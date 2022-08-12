import axios from 'axios'
import {useEffect, useState} from 'react'
import EventItem from './WikipediaEventItem'
import HolidayItem from './WikipediaHolidayItem'

export default function Wikipedia(props) {
  const [wikiData, setWikiData] = useState({})
  let day = props.day
  let month = props.month

  useEffect(() => {
    const fetchWikiData = async () => {
      axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`).then((data) => {
        setWikiData((data.data))
        console.log((data.data))
      })
    }
    fetchWikiData()
  }, [])



  const allEvents = wikiData.events && wikiData.events.map((event, index) => {
    return(
      <EventItem key={index} year={event.year} text={event.text}/>
    )
  })

  const allHolidays = wikiData.holidays && wikiData.holidays.map((holiday, index) => {
    return(
      <HolidayItem key={index} text={holiday.text}/>
    )
  })
  
  return(
    <article>
      <h2>{month}/{day} Events</h2>
      <ul>{allEvents}</ul>
      <h2>{month}/{day} Holidays</h2>
      <ul>{allHolidays}</ul>
    </article>
  )
}