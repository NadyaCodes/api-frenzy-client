import { useState } from 'react'
import WikipediaDisplay from './WikipediaDisplay'

export default function WikipediaInput() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [page, setPage] = useState(false)


  const handleDate = (event) => {
    setDay(event.target.value)
  }

  const handleMonth = (event) => {
    setMonth(event.target.value)
  }

  const showData = () => {
    page ? setPage(false) : setPage(true)
  }


  return(
    <section>
      {page ? 
        <WikipediaDisplay day={day} month={month}/> 
        : <div><h2>Want to know what makes a certain date special?</h2><h3>Look it up on Wikipedia!!</h3>
        <div className='wikipedia-form'>
            <div className='day'>
              Day: <input type='text' id='day' name='day' onChange={handleDate} value={day}></input>
            </div>
            <div className='month'>
              Month (numeric): <input type='text' id='month' name='month' onChange={handleMonth} value={month}></input>
            </div>
            <button type='submit' onClick={() => showData()}>Search</button>
          </div>
          </div>}
    </section>
  )
}