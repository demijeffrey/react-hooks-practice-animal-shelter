import React from "react";
import Filters from "./Filters";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet, filters }) {

  // let renderPets
  // filters.type === 'all' ? renderPets = pets : renderPets = pets.filter(pet => filters.type === pet.type)

  return <div className="ui cards">{pets.map(pet => {
    return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  })}</div>;

  // return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
}

export default PetBrowser;
