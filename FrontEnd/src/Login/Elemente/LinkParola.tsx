import {  FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'





function LinkParola(){

  return (
  
              <Link to='/Modifica'>
                <FaUser /> Modifica parola
              </Link>
  ) }


export default LinkParola