import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Dog() {
  const [dog, setDog] = useState('')
  
  useEffect(() => {
    const fetchDog = async () => {
      axios.get("https://dog.ceo/api/breeds/image/random").then((data) =>
        setDog(data.data.message)
      )
    }
    fetchDog()
  }, [])
  return(
    <article><img src={dog} /></article>
  )
}