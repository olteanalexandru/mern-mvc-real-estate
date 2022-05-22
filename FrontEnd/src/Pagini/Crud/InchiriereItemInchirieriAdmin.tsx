// @ts-nocheck
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../../features/goals/goalSlice'

function InchiriereItemAdmin({ goal }) {
  const dispatch = useDispatch()
if ( goal.programareBy ){
  return (
    <div className='goal'>
      
      <h2>{goal.titlu}</h2>
      <h2>{goal.text}</h2>
      <img src={ "data:image/jpeg;"+goal.image.substring(2, goal.image.length - 2)} alt={goal.titlu} style={{width: 300, height: 400}} />

      <div>{goal.programare} </div>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
      
    </div>
  )
}
}

export default InchiriereItemAdmin