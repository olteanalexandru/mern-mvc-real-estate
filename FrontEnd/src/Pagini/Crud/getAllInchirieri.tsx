
import { Link  } from "react-router-dom";
// @ts-ignore
function Continut({ goal}){
  
  
return (
  <>
  <div className=" thumbnail">
  <img src={"data:image/jpeg;" + goal.image.substring(2, goal.image.length - 2)} className=" rounded img-fluid img" alt="Paris" />
  <p><strong>{goal.titlu}</strong></p>
  <p>{goal.text}</p>
  
</div>

<Link to={`/SinglePag/${goal._id}`}><button type="button" className="btn btn-primary" > Vezi mai mult </button> </Link>
</>
)
} export default Continut





 