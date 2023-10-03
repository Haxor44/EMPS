import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './components/Home';
import AddUser from './userFunc/AddUser';
import EditUser from './userFunc/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/adduser' element={<AddUser/>}/>
        <Route exact path='/edituser/:id' element={<EditUser/>}/>
        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
