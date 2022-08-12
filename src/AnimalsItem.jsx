export default function AnimalsItem(props) {
  const { name, type, diet, latin, range, habitat, min_weight, max_weight, image } = props
  return(
    <section>
      <div className="heading-container">
        <h2>{name} <em>({latin})</em></h2>
      </div>
      <div className="animal-details">
        <ul>
          <li><em>Type: </em>{type}</li>
          <li><em>Diet: </em>{diet}</li>
          <li><em>Range: </em>{range}</li>
          <li><em>Habitat: </em>{habitat}</li>
          <li><em>Weight: </em>{min_weight}lbs - {max_weight}lbs</li>
        </ul>
        <img src={image} className="animalPic"/>
      </div>
    </section>
  )
}