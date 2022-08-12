import axios from "axios"
import { useEffect, useState } from "react";


export default function XKCD() {
  const [comic, setComic] = useState('')


  useEffect(() => {
    const fetchXKCD = async () => {
      axios.get("/xkcd").then((data) =>{
      setComic(data.data.img)
      })
    }
    fetchXKCD()
  }, [])



  return(
    <article>
      <img src={comic}/>
    </article>
  )
}