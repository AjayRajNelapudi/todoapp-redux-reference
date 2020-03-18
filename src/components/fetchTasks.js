import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks, toggleTask, removeTask } from '../actions/todoActions';

class FetchTasks extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTask = this.toggleTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentWillMount() {
        this.props.fetchTasks();
    }

    // componentWillReceiveProps(props) {
    //     // console.log('new props', props);
    //     if (props.task) {
    //         this.props.todo.tasks.push(props.task);
    //     }
    // }

    toggleTask(event) {
        this.props.toggleTask(event.target.name);
    }

    removeTask(event) {
        this.props.removeTask(event.target.name);
    }

    render() {
        // console.log(this.props.todo.tasks);
        const taskItems = this.props.todo.tasks.map(task => (
            <div key={task.id}>
                <input type="checkbox" name={task.name} checked={task.completed} onClick={this.toggleTask} />
                { task.completed ? <label><s>{task.name}</s></label> : <label>{task.name}</label> }
                <input type="button" name={task.name} onClick={this.removeTask} value="Remove"/>
            </div>
        ));
        return (
            <div>
                <h2>Tasks</h2>
                {taskItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todo: state.todo,
    // task: state.todo.task
});

export default connect(mapStateToProps, { fetchTasks, toggleTask, removeTask })(FetchTasks);