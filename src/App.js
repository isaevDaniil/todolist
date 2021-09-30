import { useEffect } from 'react';
import { initDB, useIndexedDB } from 'react-indexed-db';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import { DBConfig } from './DBConfig';
import { downloadTasks } from './redux/slices/tasksSlice';
import {downloadCategories} from "./redux/slices/categoriesSlice";
import { useDispatch } from 'react-redux';

initDB(DBConfig);

function App(props) {
  const dispatch = useDispatch();
  const { getAll: getAllTasks } = useIndexedDB("Items");
  useEffect(() => {
    getAllTasks().then((tasksFromDB) => {

      dispatch(downloadTasks(tasksFromDB));
    })
  }, []);
  const {getAll: getAllCategories} = useIndexedDB("Categories");
  useEffect(() => {
    getAllCategories().then((categoriesFromDB) => {
      dispatch(downloadCategories(categoriesFromDB));
    })
  }, []);

  return (
    <div className="app">
      <Header  />
      <Content  />
    </div>
  );
}
/* <Header dispatch={props.dispatch} state={props.state} />
      <Content tasksPage={props.state.tasksPage} dispatch={props.dispatch} categoriesPage={props.state.categoriesPage} />*/
export default App;
