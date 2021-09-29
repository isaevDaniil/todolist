import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function App(props) {
  return (
    <div className="app">
      <Header dispatch={props.dispatch} state={props.state}/>
      <Content tasksPage={props.state.tasksPage} dispatch={props.dispatch} categoriesPage={props.state.categoriesPage}/>     
    </div>
  );
}

export default App;
