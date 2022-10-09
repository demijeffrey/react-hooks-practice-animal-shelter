import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {

  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" })

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(data => setPets(data))
  }, [])

  function onAdoptPet(id) {
    const adopedPets = pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    setPets(adopedPets)
  }

  function onChangeType(type) {
    setFilters({ type: type})
  }

  function onFindPetsClick() {
    if(filters.type === 'all'){
      fetch('http://localhost:3001/pets')
        .then(res => res.json())
        .then(data => setPets(data))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(res => res.json())
      .then(data => setPets(data))
    }
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser filters={filters} pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
