"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const InchiriereItemInchirieri_1 = __importDefault(require("../Pagini/Crud/InchiriereItemInchirieri"));
const InchiriereItemInchirieriAdmin_1 = __importDefault(require("../Pagini/Crud/InchiriereItemInchirieriAdmin"));
const Spinner_1 = __importDefault(require("../Pagini/Crud/Spinner"));
const goalSlice_1 = require("../features/goals/goalSlice");
const react_bootstrap_1 = require("react-bootstrap");
const LinkParola_1 = __importDefault(require("./Elemente/LinkParola"));
function InchirieriDashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    const { goals, isLoading, isError, message } = (0, react_redux_1.useSelector)((state) => state.goals);
    (0, react_1.useEffect)(() => {
        if (isError) {
            console.log(message);
        }
        if (!user) {
            navigate('/login');
        }
        if (user.rol == "agent") {
            dispatch((0, goalSlice_1.getGoals)());
            return () => {
                dispatch((0, goalSlice_1.reset)());
            };
        }
        else if (user.rol == "client") {
            dispatch((0, goalSlice_1.getAllGoals)());
            return () => {
                dispatch((0, goalSlice_1.reset)());
            };
        }
    }, [user, navigate, isError, message, dispatch]);
    if (isLoading) {
        return <Spinner_1.default />;
    }
    if (user.rol == "agent") {
        return (<>
    <react_bootstrap_1.Container><react_bootstrap_1.Card>
      <section className='heading'>
        <h1>Salut {user && user.name}</h1>
        
      </section>
  
      <section className='content'>
        {goals.length > 0 ? (<div className='goals'>
            {goals.map((goal) => (<InchiriereItemInchirieriAdmin_1.default key={goal._id} goal={goal}/>))}
          </div>) : (<h3>Nici o cerere momentan</h3>)}
      </section>
      </react_bootstrap_1.Card>
        <LinkParola_1.default />
      </react_bootstrap_1.Container>
    </>);
    }
    else {
        return (<>
    <react_bootstrap_1.Container><react_bootstrap_1.Card>
      <section className='heading'>
        <h1>Salut {user && user.name}</h1> 
      </section>
      <section className='content'>
        {goals.length > 0 ? (<div className='goals'>
     
                {goals.map(goal => (<InchiriereItemInchirieri_1.default key={goal._id} goal={goal} parametru={user._id}/>))}   
          </div>) : (<h3>Nici o cerere momentan</h3>)}
      </section>
      </react_bootstrap_1.Card>
        <LinkParola_1.default />
      </react_bootstrap_1.Container>
    </>);
    }
}
exports.default = InchirieriDashboard;
//# sourceMappingURL=inchirieriDashboard.jsx.map