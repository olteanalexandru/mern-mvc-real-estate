"use strict";
// @ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const goalSlice_1 = require("../../features/goals/goalSlice");
const react_file_base64_1 = __importDefault(require("react-file-base64"));
function InchiriereForm() {
    const [titlu, setTitlu] = (0, react_1.useState)('');
    const [text, setText] = (0, react_1.useState)('');
    const [descriere, setDescriere] = (0, react_1.useState)('');
    const [image, setImage] = (0, react_1.useState)('');
    const dispatch = (0, react_redux_1.useDispatch)();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch((0, goalSlice_1.createGoal)({ titlu, descriere, text, image }));
    };
    return (<section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <label htmlFor='titlu'>Titlu:</label>
           <input type='titlu' name='titlu' id='titlu' value={titlu} onChange={(e) => setTitlu(e.target.value)}/>

          <label htmlFor='text'>Pe scurt:</label>
          <input type='text' name='text' id='text' value={text} onChange={(e) => setText(e.target.value)}/>
          
         <label htmlFor='Descriere'>Continut:</label>
          <input type='Descriere' name='Descriere' id='Descriere' value={descriere} onChange={(e) => setDescriere(e.target.value)}/>

         <h3 className="text-center mb-4">Add Image</h3>
                   

        <react_file_base64_1.default multiple={false} onDone={({ base64 }) => setImage({ base64 })}/> 
                
              


        </div>

        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Adauga continut
          </button>
        </div>
      </form>
    </section>);
}
exports.default = InchiriereForm;
//# sourceMappingURL=InchiriereForm.jsx.map