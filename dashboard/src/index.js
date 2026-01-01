import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Orders from './components/Orders';
import Holdings from './components/Holdings';
import Positions from './components/Positions';
import Funds from './components/Funds';
import Apps from './components/Apps';
import Home from './components/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index path="/" element={<Home/>}/>
     
  <Route path="/dashboard" element={<DashBoard/>}/>
  <Route path="/orders" element={<Orders/>}/>
  <Route path="/holdings" element={<Holdings/>}/>
  <Route path="/positions" element={<Positions/>}/>
  <Route path="/funds" element={<Funds/>}/>
  <Route path="/apps" element={<Apps/>}/>
  </Routes>
    </BrowserRouter>

);


  