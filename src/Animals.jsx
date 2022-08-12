import axios from 'axios'
import {useEffect, useState} from 'react'
import AnimalsItem from './AnimalsItem'

export default function Animals() {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchAnimals = async () => {
      axios.get("/animals").then((data) => {
        setAnimals(data.data)
      })
    }

    fetchAnimals()
  }, [])
  

  const displayAnimals = animals.map((animal, index) => {
    return (
      <AnimalsItem
        name={animal.name}
        latin={animal.latin_name}
        key={index}
        type={animal.animal_type}
        diet={animal.diet}
        range={animal.geo_range}
        habitat={animal.habitat}
        max_weight={animal.weight_max}
        min_weight={animal.weight_min}
        image={animal.image_link}
      />
    );
  });



  
  return(
    <article className='animals-container'>
      {displayAnimals}
    </article>
  )
}