import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/todoActions';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }

        this.onChange = this.onChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    addTask(event) {
        event.preventDefault();

        const task = {
            name: this.state.name,
            completed: false
        };
        this.props.addTask(task);
    }

    render() {
        return (
            <div>
                <h2>Add Task</h2>
                <form onSubmit={this.addTask}>
                    <div>
                        <label>Task: </label>
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addTask })(AddTask);