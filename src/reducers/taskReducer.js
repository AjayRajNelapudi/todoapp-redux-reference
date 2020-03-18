import { FETCH_TASKS, ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from '../actions/types';
import { act } from 'react-dom/test-utils';

const initState = {
    tasks: [
        // {name: 'Learn React', completed: true},
        // {name: 'Learn Redux', completed: false}
    ],
    task: {}
};

export default function(state=initState, action) {
    switch (action.type) {
        case FETCH_TASKS:
            return state;

        case ADD_TASK:
            var newState = {
                ...state,
                // task: action.payload
            };
            newState.tasks.push(action.payload);
            return newState;

        case TOGGLE_TASK:
            var newState = {...state};
            newState.tasks.map(task => {
                if (task.name === action.payload) {
                    task.completed = !task.completed
                }
            });
            return newState;

        case REMOVE_TASK:
            var newState = {...state};
            newState.tasks = newState.tasks.filter(task => {
                // console.log(task, action.payload);
                return task.name != action.payload
            });
            // console.log();
            return newState;

        default:
            return state;
    }
}