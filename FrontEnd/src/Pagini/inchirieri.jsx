"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inchirieri = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Spinner_1 = __importDefault(require("./Crud/Spinner"));
const getAllInchirieri_1 = __importDefault(require("./Crud/getAllInchirieri"));
const goalSlice_1 = require("../features/goals/goalSlice");
const GridGen_1 = __importDefault(require("../Extras/GridGen"));
require("bootstrap/dist/css/bootstrap.min.css");
function Inchirieri() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { goals, isLoading, isError, message } = (0, react_redux_1.useSelector)((state) => state.goals);
    (0, react_1.useEffect)(() => {
        if (isError) {
            console.log(message);
        }
        dispatch((0, goalSlice_1.getAllGoals)());
        return () => {
            dispatch((0, goalSlice_1.reset)());
        };
    }, [isError, message, dispatch]);
    if (isLoading) {
        return <Spinner_1.default />;
    }
    return (<div className="container text-center bg-grey border-colorat" style={{ 'paddingBottom': '4rem' }}>
  <h2 style={{ marginBottom: ' 3rem' }}>Oferim spre goal</h2>
  
  


 
  {goals.length > 0 ? (<div>
          <GridGen_1.default cols={3}>

            {goals.map((goal) => {
                return (<div style={{ marginBottom: '4rem', minHeight: '200px' }}>
                <getAllInchirieri_1.default key={goal._id} goal={goal}/>
                </div>);
            })}

              </GridGen_1.default>
              </div>) : (<h3>Nu sa adaugat nici un continut pana acum</h3>)}
            
           
      
    </div>);
}
exports.Inchirieri = Inchirieri;
//# sourceMappingURL=inchirieri.jsx.map