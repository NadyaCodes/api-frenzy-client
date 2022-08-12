import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Fox() {
  const [fox, setFox] = useState('')

  useEffect(() => {
    const fetchFox = async () => {
      axios.get("https://api-frenzy.herokuapp.com/fox").then((data) => {
        setFox(data.data.image)
      })
    }
    fetchFox()
  }, [])
  
  return(
    <article>
      <img src={fox} />
    </article>
  )
}