import { useEffect, useState } from "react"
import axios from 'axios'

export default function CatFact() {
  const [fact, setFact] = useState({})

  useEffect(() => {
    const fetchFact = async () => {
      axios.get('https://catfact.ninja/fact').then((data) => {
        setFact(data.data)
      })
    }
    fetchFact()
  }, [])

  return(
    <article className='catFact-container'>
      <h2>Cat Fact</h2>
      <br />
      {fact.fact}
    </article>
  )
}