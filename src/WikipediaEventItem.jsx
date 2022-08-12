export default function WikipediaEventItem(props) {
  return(
    <li>
      {props.text}
      <br/>
      <em>{props.year}</em>
      <hr/>
    </li>
  )
}