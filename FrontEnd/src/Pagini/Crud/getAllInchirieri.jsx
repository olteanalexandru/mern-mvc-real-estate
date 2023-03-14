"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
// @ts-ignore
function Continut({ goal }) {
    return (<>
  <div className=" thumbnail">
  <img src={"data:image/jpeg;" + goal.image.substring(2, goal.image.length - 2)} className=" rounded img-fluid img" alt="Paris"/>
  <p><strong>{goal.titlu}</strong></p>
  <p>{goal.text}</p>
  
    </div>

    <react_router_dom_1.Link to={`/SinglePag/${goal._id}`}><button type="button" className="btn btn-primary"> Vezi mai mult </button> </react_router_dom_1.Link>
    </>);
}
exports.default = Continut;
//# sourceMappingURL=getAllInchirieri.jsx.map