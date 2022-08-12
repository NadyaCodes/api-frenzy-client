import QuoteItem from "./QuoteItem";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Quote() {
  const [ quotes, setQuotes ] = useState([])

  useEffect(() => {
    const fetchQuotes = async () => {
      axios.get('/quotes').then((data) => {
        console.log(data.data)
        setQuotes(data.data)
      })
    }
    fetchQuotes()
  }, [])

  const displayQuotes = quotes.map((quote, index) => {
    return(
      <QuoteItem author={quote.author} quote={quote.quote} key={index}/>
    )
  })
  
  
  return(
    <article>
      <h2>Wise Words from Wise People</h2>
      <ul>
        {displayQuotes}
      </ul>
    </article>
  )
}