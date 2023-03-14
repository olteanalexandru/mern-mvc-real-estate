"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footerl = void 0;
const react_router_dom_1 = require("react-router-dom");
const Mail_1 = __importDefault(require("../Componente/Mail"));
function Footerl() {
    return (<div>
    <footer id="footer">
    <div className="footer-top" style={{ borderTop: '1px dotted' }}>
      <div className="container">
        <div className="row">

        <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Imobiliare</h3>
            <p>
              By default bootstrap  pref<br />
              5 does not support hover. But most developers<br />
              Romania <br /><br />
              <strong>Phone:</strong> 0755494691<br />
              <strong>Email:</strong> Oltean.alexandru11@gmail.com<br />
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Pagini folositoare</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <react_router_dom_1.Link to="/#">Home</react_router_dom_1.Link> </li>
              <li><i className="bx bx-chevron-right"></i> <react_router_dom_1.Link to="/Desprenoi">About us</react_router_dom_1.Link> </li>
              <li><i className="bx bx-chevron-right"></i> <react_router_dom_1.Link to="/Noutati">Noutati</react_router_dom_1.Link> </li>
              <li><i className="bx bx-chevron-right"></i> <react_router_dom_1.Link to="/Contact"> Contact</react_router_dom_1.Link> </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Servicile noaste</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <react_router_dom_1.Link to="/Desprenoi">Despre Noi</react_router_dom_1.Link> </li>
              <li><i className="bx bx-chevron-right"></i> <react_router_dom_1.Link to="/Inchirieri">Inchirieri</react_router_dom_1.Link> </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Newsletter</h4>
            <p>Nu te vom contacta decat cu informatii relevante</p>






            <Mail_1.default />
            
          </div>
          

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>Oltean Alexandru Florin</span></strong>. All Rights Reserved
        </div>
    </div> </div>
  </footer> </div>);
}
exports.Footerl = Footerl;
//# sourceMappingURL=footer.jsx.map