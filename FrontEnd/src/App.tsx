import './App.css';
import *  as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {Footerl} from './Extras/footer';
import {Contact} from './Pagini/Contact';
import {Desprenoi} from './Pagini/desprenoi';
import {Inchirieri} from './Pagini/inchirieri';
import {Index} from './Pagini/index';
import Noutati from './Pagini/noutati';
import {Vanzari} from './Pagini/vanzari';
import Header from './Pagini/Crud/Header';
import Login from './Login/Login';
import Register from './Login/Register';
import Dashboard from './Login/Dashboard';
import {SinglePag} from './Pagini/Crud/SinglePag';
import Modifica from './Login/Modifica';
import InchirieriDashboard from './Login/inchirieriDashboard'

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="Noutati" element={<Noutati />} />
          <Route path="Desprenoi" element={<Desprenoi />} />
          <Route path="Inchirieri" element={<Inchirieri />} />
          <Route path="Vanzari" element={<Vanzari />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Header" element={<Header />} />  
          <Route path="Dashboard" element={<Dashboard />} />        
          <Route path="SinglePag/:id" element={<SinglePag />} /> 
          <Route path="Modifica" element={<Modifica />} /> 
          <Route path="InchirieriDashboard" element={<InchirieriDashboard />} /> 
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div style={{'backgroundColor': 'ghostwhite'}}>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}



          
          <header id="header">
 

    <div className="container d-flex align-items-center justify-content-between">
   
      <h1 className="logo"><Link to="/">Imobiliare</Link></h1>

      <nav id="navbar" className="navbar">
       
        <ul>
          <li className="nav-link scrollto active" ><Link to="/">Home</Link></li>
          <li className="nav-link scrollto" ><Link to="/Noutati">Noutati</Link></li>
          <li className="nav-link scrollto"><Link to="/Desprenoi">Despre noi</Link></li>
          <li className="nav-link scrollto"><Link to="/Inchirieri">Inchirieri</Link></li>
          <li className="nav-link scrollto" ><Link to="/Vanzari">Vanzari</Link></li>
          <br/><br/><br/>
          <li className="getstarted scrollto"><Link to="/Contact">Contacteaza-ne</Link></li>
          <li className="nav-link scrollto"><Header/></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

      <hr />





      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />




 <Footerl />



     
    </div>
  );
}




function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}