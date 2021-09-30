import { useEffect } from 'react';
import { initDB, useIndexedDB } from 'react-indexed-db';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { DBConfig } from './DBConfig';
import { downloadTasks } from './redux/slices/tasksSlice';
import {downloadCategories} from "./redux/slices/categoriesSlice";

initDB(DBConfig);

function App(props) {
  const { getAll: getAllTasks } = useIndexedDB("Items");
  useEffect(() => {
    getAllTasks().then((tasksFromDB) => {

      props.dispatch(downloadTasks(tasksFromDB));
    })
  }, []);
  const {getAll: getAllCategories} = useIndexedDB("Categories");
  useEffect(() => {
    getAllCategories().then((categoriesFromDB) => {
      props.dispatch(downloadCategories(categoriesFromDB));
    })
  }, []);

  return (
    <div className="app">
      <Header dispatch={props.dispatch} state={props.state} />
      <Content tasksPage={props.state.tasksPage} dispatch={props.dispatch} categoriesPage={props.state.categoriesPage} />
    </div>
  );
}

export default App;
