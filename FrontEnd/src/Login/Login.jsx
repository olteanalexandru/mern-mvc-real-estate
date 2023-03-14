"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const authSlice_1 = require("../features/Auth/authSlice");
const Spinner_1 = __importDefault(require("../Pagini/Crud/Spinner"));
function Login() {
    const [formData, setFormData] = (0, react_1.useState)({
        email: '',
        password: '',
    });
    const { email, password } = formData;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const { user, isLoading, isError, isSuccess, message } = (0, react_redux_1.useSelector)((state) => state.auth);
    (0, react_1.useEffect)(() => {
        if (isError) {
            react_toastify_1.toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }
        dispatch((0, authSlice_1.reset)());
    }, [user, isError, isSuccess, message, navigate, dispatch]);
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch((0, authSlice_1.login)(userData));
    };
    if (isLoading) {
        return <Spinner_1.default />;
    }
    return (<>
      <section className='heading'>
        <h1>
          <fa_1.FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange}/>
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>);
}
exports.default = Login;
//# sourceMappingURL=Login.jsx.map