import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './pages/Home/Home';
import AddTodo from './pages/Add/Add';
import GetTodo from './pages/GetTodo/GetTodo';
import Delete from './pages/Delete/Delete';
import Put from './pages/Put/Put';


function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/add" component={AddTodo}/>
          <Route path="/view/:id" component={GetTodo}/>
          <Route path="/edit/:id" component={Put}/>
          <Route path="/delete/:id" component={Delete}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
