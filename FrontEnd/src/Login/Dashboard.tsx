// @ts-nocheck
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import InchiriereForm from '../Pagini/Crud/InchiriereForm'
import InchiriereItem from '../Pagini/Crud/InchiriereItem'
import Spinner from '../Pagini/Crud/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import { Container , Card} from 'react-bootstrap'
import LinkParola from './Elemente/LinkParola'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
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
        <LinkParola/>
        <p>Updateaza continutul paginii:</p>
      </section>

      <InchiriereForm />

      
      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <InchiriereItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Nu ai adaugat nici un continut pana acum</h3>
        )}
      </section>
      </Card>

      </Container>
    </>
    
  )} else {

    return(
      <>
      <Container><Card>
        <section className='heading'>
          <h1>Salut {user && user.name}</h1>
          <LinkParola/>
          </section>
        </Card>
        
        </Container>
      </>
    )
  }
}

export default Dashboard