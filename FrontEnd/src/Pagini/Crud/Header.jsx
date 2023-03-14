"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const authSlice_1 = require("../../features/Auth/authSlice");
function Header() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user } = (0, react_redux_1.useSelector)((state) => state.auth);
    const onLogout = () => {
        dispatch((0, authSlice_1.logout)());
        dispatch((0, authSlice_1.reset)());
        navigate('/');
    };
    return (<header className='header'>
   {user ? <div className='logo'>
        <react_router_dom_1.Link to='/Dashboard'>{user.name}</react_router_dom_1.Link>
        <react_router_dom_1.Link to='/InchirieriDashboard'>Pagina Inchirieri</react_router_dom_1.Link>
      </div> : ''} 
      <ul>
        {user ? (<li>
            <button className='btn' onClick={onLogout}>
              <fa_1.FaSignOutAlt /> Logout
            </button>
          </li>) : (<>
            <li>
              <react_router_dom_1.Link to='/login'>
                <fa_1.FaSignInAlt /> Login
              </react_router_dom_1.Link>
            </li>
            <li>
              <react_router_dom_1.Link to='/register'>
                <fa_1.FaUser /> Register
              </react_router_dom_1.Link>
            </li>
          </>)} 
      </ul>
    </header>);
}
exports.default = Header;
//# sourceMappingURL=Header.jsx.map