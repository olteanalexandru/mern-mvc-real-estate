"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const react_redux_1 = require("react-redux");
const goalSlice_1 = require("../../features/goals/goalSlice");
function InchiriereItemAdmin({ goal }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    if (goal.programareBy) {
        return (<div className='goal'>
      
      <h2>{goal.titlu}</h2>
      <h2>{goal.text}</h2>
      <img src={"data:image/jpeg;" + goal.image.substring(2, goal.image.length - 2)} alt={goal.titlu} style={{ width: 300, height: 400 }}/>

      <div>{goal.programare} </div>
      <button onClick={() => dispatch((0, goalSlice_1.deleteGoal)(goal._id))} className='close'>
        X
      </button>
      
    </div>);
    }
}
exports.default = InchiriereItemAdmin;
//# sourceMappingURL=InchiriereItemInchirieriAdmin.jsx.map