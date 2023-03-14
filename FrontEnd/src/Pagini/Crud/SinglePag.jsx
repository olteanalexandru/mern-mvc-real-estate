"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglePag = void 0;
// @ts-nocheck
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const goalSlice_1 = require("../../features/goals/goalSlice");
const react_bootstrap_1 = require("react-bootstrap");
const react_calendar_1 = __importDefault(require("react-calendar"));
require("react-calendar/dist/Calendar.css");
const react_bootstrap_2 = require("react-bootstrap");
function SinglePag() {
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    const [programare, setProgramare] = (0, react_1.useState)('');
    const dispatch = (0, react_redux_1.useDispatch)();
    const { id } = (0, react_router_dom_1.useParams)();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch((0, goalSlice_1.programarea)(id));
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.token}`);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("id", id);
        urlencoded.append("programare", programare);
        urlencoded.append("_id", user._id);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("http://localhost:5000/api/goals/goals/" + id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };
    const { goals, isError, message } = (0, react_redux_1.useSelector)((state) => state.goals);
    (0, react_1.useEffect)(() => {
        if (isError) {
            console.log(message);
        }
        dispatch((0, goalSlice_1.SinglePage)(id));
        return () => {
            dispatch((0, goalSlice_1.reset)());
        };
    }, [isError, message, dispatch]);
    function GoalData() {
        if (user && user.rol === "client") {
            return (<>
       <label htmlFor='Goal'>Data vizitare</label>
       <p>Propune o data cand doresti sa vizitezi si te vom contacta</p>
       
             <react_bootstrap_1.Form onSubmit={onSubmit}>
        
                   <react_calendar_1.default onChange={(date) => setProgramare(date)} value={programare}/>
                  <button type='submit' className='btn btnBlock'>
              Submit
            </button>   
                   </react_bootstrap_1.Form> 
                    </>);
        }
        else {
            return null;
        }
    }
    return (<>
    <react_bootstrap_2.Container>
      <div id="background" className="jumbotron textCenter " style={{ 'border-bottom': '1px darkgray dotted' }}>

             
 <div className=" thumbnail">
  <p><strong>{goals["titlu"]}</strong></p>
  <h3>Pe scurt:</h3><p>{goals["text"]}</p>
    <h3>Pe Lung:</h3><p>{goals["descriere"]}</p>

    {(goals["programare"]) ? <> <h3>Programare facuta la data:</h3> <p> {goals["programare"]} </p></> : <p>nu ai facut nici o programare inca/ Nu esti logat</p>} 
    </div>
    <p>Data adaugarii: {new Date(goals["createdAt"]).toLocaleString('en-US')}</p>

    </div> 
    <GoalData />
    </react_bootstrap_2.Container>


  
  
          </>);
}
exports.SinglePag = SinglePag;
//# sourceMappingURL=SinglePag.jsx.map