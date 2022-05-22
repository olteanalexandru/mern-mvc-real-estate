// @ts-nocheck

function GoalItem({ goal , parametru}) {
if ( goal.programareBy ){
if ( parametru == goal.programareBy ){
  return (
    <div className='goal'>
      
      <h2>{goal.titlu}</h2>
      <h2>{goal.text}</h2>
      <img src={ "data:image/jpeg;"+goal.image.substring(2, goal.image.length - 2)} alt={goal.titlu} style={{width: 300, height: 400}} />

      <div>{goal.programare} </div>
    
      
    </div>
  )
}
}
}

export default GoalItem