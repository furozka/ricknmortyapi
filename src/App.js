import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
