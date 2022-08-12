import axios from "axios"
import { useEffect, useState } from "react";


export default function XKCD() {
  const [comic, setComic] = useState('')


  useEffect(() => {
    const fetchXKCD = async () => {
      axios.get("https://api-frenzy.herokuapp.com/xkcd").then((data) =>{
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