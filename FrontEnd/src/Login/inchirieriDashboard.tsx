// @ts-nocheck
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import InchiriereItem from '../Pagini/Crud/InchiriereItemInchirieri'
import InchiriereItemAdmin from '../Pagini/Crud/InchiriereItemInchirieriAdmin'
import Spinner from '../Pagini/Crud/Spinner'
import { getGoals, reset, getAllGoals} from '../features/goals/goalSlice'
import { Container , Card} from 'react-bootstrap'
import LinkParola from './Elemente/LinkParola'
import { RootState } from 'src/app/store'

function InchirieriDashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state : RootState) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state : RootState) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    if (user.rol == "agent"){
    dispatch(getGoals())
    return () => {
      dispatch(reset())
    } }
   else if (user.rol == "client"){

      dispatch(getAllGoals())
  
      return () => {
        dispatch(reset())
      } }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  if (user.rol == "agent"){
  return (
    <>
    <Container><Card>
      <section className='heading'>
        <h1>Salut {user && user.name}</h1>
        
      </section>
  
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <InchiriereItemAdmin key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Nici o cerere momentan</h3>
        )}
      </section>
      </Card>
<LinkParola/>
      </Container>
    </>
    
  )} else {
   
    return(
      <>
    <Container><Card>
      <section className='heading'>
        <h1>Salut {user && user.name}</h1> 
      </section>
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
     
{goals.map(goal =>   (
    
      <InchiriereItem key={goal._id} goal={goal} parametru={user._id} />   
  ))}   
          </div>
        ) : (
          <h3>Nici o cerere momentan</h3>
        )}
      </section>
      </Card>
<LinkParola/>
      </Container>
    </>
    )
  }
}

export default InchirieriDashboard