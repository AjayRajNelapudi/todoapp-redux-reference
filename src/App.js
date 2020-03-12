import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import FetchTasks from './components/fetchTasks';
import AddTask from './components/addTask';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTask />
        <FetchTasks />
      </div>
    </Provider>
  );
}

export default App;
