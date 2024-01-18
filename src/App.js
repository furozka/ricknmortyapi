import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import CharacterInfo from './pages/CharacterInfo';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <div>
        <nav  className='bg-orange-200 flex justify-between w-screen'>
        <h1 className='text-3xl p-5'>Rick And Morty Characters</h1>
          <ul className='flex justify-center items-center p-5'>
            <li className='mr-3'>
              <Link className='w-auto h-10 bg-orange-700 py-2 px-5 hover:bg-red-900' to="/">Home</Link>
            </li>
            <li>
              <Link className='w-auto h-10 bg-orange-700 py-2 px-5 hover:bg-red-900 mr-5' to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/character/:id' element={<CharacterInfo/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
