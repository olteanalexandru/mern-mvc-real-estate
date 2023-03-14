"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const InchiriereForm_1 = __importDefault(require("../Pagini/Crud/InchiriereForm"));
const InchiriereItem_1 = __importDefault(require("../Pagini/Crud/InchiriereItem"));
const Spinner_1 = __importDefault(require("../Pagini/Crud/Spinner"));
const goalSlice_1 = require("../features/goals/goalSlice");
const react_bootstrap_1 = require("react-bootstrap");
const LinkParola_1 = __importDefault(require("./Elemente/LinkParola"));
function Dashboard() {
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
    }, [user, navigate, isError, message, dispatch]);
    if (isLoading) {
        return <Spinner_1.default />;
    }
    if (user.rol == "agent") {
        return (<>
    <react_bootstrap_1.Container><react_bootstrap_1.Card>
      <section className='heading'>
        <h1>Salut {user && user.name}</h1>
        <LinkParola_1.default />
        <p>Updateaza continutul paginii:</p>
      </section>

      <InchiriereForm_1.default />

      
      <section className='content'>
        {goals.length > 0 ? (<div className='goals'>
            {goals.map((goal) => (<InchiriereItem_1.default key={goal._id} goal={goal}/>))}
          </div>) : (<h3>Nu ai adaugat nici un continut pana acum</h3>)}
      </section>
      </react_bootstrap_1.Card>

      </react_bootstrap_1.Container>
    </>);
    }
    else {
        return (<>
      <react_bootstrap_1.Container><react_bootstrap_1.Card>
        <section className='heading'>
          <h1>Salut {user && user.name}</h1>
          <LinkParola_1.default />
          </section>
        </react_bootstrap_1.Card>
        
        </react_bootstrap_1.Container>
      </>);
    }
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.jsx.map