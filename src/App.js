import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Modal from './components/Modals/Modal';


function App(props) {
  const [isModalActive, setModalActive] = useState(true);
  return (
    <div className="app">
      <Header dispatch={props.dispatch}/>
      <Content tasksPage={props.state.tasksPage} dispatch={props.dispatch}/>     
    </div>
  );
}

export default App;
