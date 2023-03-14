"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const footer_1 = require("./Extras/footer");
const Contact_1 = require("./Pagini/Contact");
const desprenoi_1 = require("./Pagini/desprenoi");
const inchirieri_1 = require("./Pagini/inchirieri");
const index_1 = require("./Pagini/index");
const noutati_1 = __importDefault(require("./Pagini/noutati"));
const vanzari_1 = require("./Pagini/vanzari");
const Header_1 = __importDefault(require("./Pagini/Crud/Header"));
const Login_1 = __importDefault(require("./Login/Login"));
const Register_1 = __importDefault(require("./Login/Register"));
const Dashboard_1 = __importDefault(require("./Login/Dashboard"));
const SinglePag_1 = require("./Pagini/Crud/SinglePag");
const Modifica_1 = __importDefault(require("./Login/Modifica"));
const inchirieriDashboard_1 = __importDefault(require("./Login/inchirieriDashboard"));
function App() {
    return (<div>
      {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
      <react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<Layout />}>
          <react_router_dom_1.Route index element={<index_1.Index />}/>
          <react_router_dom_1.Route path="Noutati" element={<noutati_1.default />}/>
          <react_router_dom_1.Route path="Desprenoi" element={<desprenoi_1.Desprenoi />}/>
          <react_router_dom_1.Route path="Inchirieri" element={<inchirieri_1.Inchirieri />}/>
          <react_router_dom_1.Route path="Vanzari" element={<vanzari_1.Vanzari />}/>
          <react_router_dom_1.Route path="Contact" element={<Contact_1.Contact />}/>
          <react_router_dom_1.Route path="Login" element={<Login_1.default />}/>
          <react_router_dom_1.Route path="Register" element={<Register_1.default />}/>
          <react_router_dom_1.Route path="Header" element={<Header_1.default />}/>  
          <react_router_dom_1.Route path="Dashboard" element={<Dashboard_1.default />}/>        
          <react_router_dom_1.Route path="SinglePag/:id" element={<SinglePag_1.SinglePag />}/> 
          <react_router_dom_1.Route path="Modifica" element={<Modifica_1.default />}/> 
          <react_router_dom_1.Route path="InchirieriDashboard" element={<inchirieriDashboard_1.default />}/> 
          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <react_router_dom_1.Route path="*" element={<NoMatch />}/>
        </react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
function Layout() {
    return (<div style={{ 'backgroundColor': 'ghostwhite' }}>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}



          
          <header id="header">
 

    <div className="container d-flex align-items-center justify-content-between">
   
      <h1 className="logo"><react_router_dom_1.Link to="/">Imobiliare</react_router_dom_1.Link></h1>

      <nav id="navbar" className="navbar">
       
        <ul>
          <li className="nav-link scrollto active"><react_router_dom_1.Link to="/">Home</react_router_dom_1.Link></li>
          <li className="nav-link scrollto"><react_router_dom_1.Link to="/Noutati">Noutati</react_router_dom_1.Link></li>
          <li className="nav-link scrollto"><react_router_dom_1.Link to="/Desprenoi">Despre noi</react_router_dom_1.Link></li>
          <li className="nav-link scrollto"><react_router_dom_1.Link to="/Inchirieri">Inchirieri</react_router_dom_1.Link></li>
          <li className="nav-link scrollto"><react_router_dom_1.Link to="/Vanzari">Vanzari</react_router_dom_1.Link></li>
          <br /><br /><br />
          <li className="getstarted scrollto"><react_router_dom_1.Link to="/Contact">Contacteaza-ne</react_router_dom_1.Link></li>
          <li className="nav-link scrollto"><Header_1.default /></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

      <hr />





      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <react_router_dom_1.Outlet />




 <footer_1.Footerl />



     
    </div>);
}
function NoMatch() {
    return (<div>
      <h2>Nothing to see here!</h2>
      <p>
        <react_router_dom_1.Link to="/">Go to the home page</react_router_dom_1.Link>
      </p>
    </div>);
}
//# sourceMappingURL=App.jsx.map