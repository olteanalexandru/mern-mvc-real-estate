// @ts-nocheck
import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {SinglePage , reset, programarea} from '../../features/goals/goalSlice';
import { Form } from 'react-bootstrap';
import { RootState } from 'src/app/store';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';
export function SinglePag() {

  const { user } = useSelector((state : RootState) => state.auth)
  const [programare, setProgramare] = useState('')


  const dispatch = useDispatch();
  const { id } = useParams()



  const onSubmit = (e) => {
    e.preventDefault()
  
    dispatch(programarea(id))



      var myHeaders = new Headers();
      myHeaders.append("Authorization",`Bearer ${user.token}` );
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
      var urlencoded = new URLSearchParams();
      urlencoded.append("id", id);
      urlencoded.append("programare", programare);
      urlencoded.append("_id", user._id);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5000/api/goals/goals/"+id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }




  const { goals, isError, message } = useSelector(
    (state) => state.goals
  )
  
  useEffect( () => {
    if (isError) {
      console.log(message)
    }
    dispatch(SinglePage(id))
     return () => {
       dispatch(reset())
      }

    
    
  }, [ isError, message, dispatch])




 
  function GoalData ()  {

    if (user && user.rol === "client"){ 
     return (
       <>
       <label htmlFor='Goal'>Data vizitare</label>
       <p>Propune o data cand doresti sa vizitezi si te vom contacta</p>
       
             <Form onSubmit={onSubmit} >
        
                   <Calendar onChange={(date:Date) => setProgramare(date)} value={programare} />
                  <button type='submit' className='btn btnBlock'>
              Submit
            </button>   
                   </Form> 
                    </> )} else { return null}}




  return (
<>
<Container>
      <div id="background" className="jumbotron textCenter " style={{ 'border-bottom': '1px darkgray dotted' }}>

             
 <div className=" thumbnail">
  <p><strong>{goals["titlu"]}</strong></p>
  <h3>Pe scurt:</h3><p>{goals["text"]}</p>
<h3>Pe Lung:</h3><p>{goals["descriere"]}</p>

{(goals["programare"]) ?  <> <h3>Programare facuta la data:</h3> <p> {goals["programare"]} </p></> : <p>nu ai facut nici o programare inca/ Nu esti logat</p>} 
</div>
<p>Data adaugarii: {new Date(goals["createdAt"]).toLocaleString('en-US')}</p>

</div> 
<GoalData/>
</Container>


  
  
          </>   
  
    )}


