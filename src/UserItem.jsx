export default function UserItem(props) {
  return(
    <li>
      <em>Name: </em>{props.name}
      <br />
      <em>Email: </em>{props.email}
      <hr />
    </li>
  )
}