"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const react_toastify_1 = require("react-toastify");
const fa_1 = require("react-icons/fa");
const authSlice_1 = require("../features/Auth/authSlice");
const Spinner_1 = __importDefault(require("../Pagini/Crud/Spinner"));
const react_bootstrap_1 = require("react-bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
function Register() {
    const [formData, setFormData] = (0, react_1.useState)({
        rol: '',
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { rol, name, email, password, password2 } = formData;
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
        if (password !== password2) {
            react_toastify_1.toast.error('Passwords do not match');
        }
        else {
            const userData = {
                rol,
                name,
                email,
                password,
            };
            dispatch((0, authSlice_1.register)(userData));
        }
    };
    if (isLoading) {
        return <Spinner_1.default />;
    }
    return (<>
      <section className='heading'>
        <h1>
          <fa_1.FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <react_bootstrap_1.Form onSubmit={onSubmit}>

        <div className='form-group'>
        <label>
        <select as="select" aria-label="Rol" value={rol} onChange={onChange} type='text' name='rol' id='rol' className='form-control'>
        <option type='text'>Selecteaza rol</option>
        <option type='text' value='client'>Client</option>
       <option type='text' value='agent'>Agent imobiliar</option>
        </select>
        </label>
    </div>

          <div className='form-group'>
            <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='password2' name='password2' value={password2} placeholder='Confirm password' onChange={onChange}/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </react_bootstrap_1.Form>
      </section>
    </>);
}
exports.default = Register;
//# sourceMappingURL=Register.jsx.map