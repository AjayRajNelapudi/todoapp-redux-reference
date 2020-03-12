import { FETCH_TASKS, ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from './types';
// import { todolist } from '../db';

export const fetchTasks = () => dispatch => {
    dispatch({
        type: FETCH_TASKS
    })
}

export const addTask = (task) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: task
    })
}

export const toggleTask = (taskName) => dispatch => {
    dispatch({
        type: TOGGLE_TASK,
        payload: taskName
    });
}

export const removeTask = (taskName) => dispatch => {
    dispatch({
        type: REMOVE_TASK,
        payload: taskName
    });
}