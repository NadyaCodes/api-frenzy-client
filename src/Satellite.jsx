import { useState, useEffect } from "react"
import axios from 'axios'

export default function Satellite() {
  const [pic, setPic] = useState('')

  useEffect(() => {
    const fetchPic = async () => {
      axios.get("https://api-frenzy.herokuapp.com/satellite-pic").then((data) => {
        setPic(data.data.url)
      })
    }
    fetchPic()
  }, [])
  return(
    <article>
      <img src={pic} />
    </article>
  )
}