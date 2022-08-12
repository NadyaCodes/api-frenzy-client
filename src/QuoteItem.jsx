export default function QuoteItem(props) {
  
  return(
      <li>
        {props.quote}
        <br/>
        <em>~{props.author}</em>
        <hr />
      </li>
  )
}