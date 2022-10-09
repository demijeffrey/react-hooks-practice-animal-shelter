import React from "react";

function Pet({ pet, onAdoptPet }) {

  const renderGender = pet.gender === 'female' ? '♀' : '♂'

  const adoptPet = pet.isAdopted === true ? 
    <button className="ui disabled button">Already adopted</button> :
    <button onClick={() => onAdoptPet(pet.id)} className="ui primary button">Adopt pet</button>

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {renderGender}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {/* <button className="ui disabled button">Already adopted</button>
        <button onClick={() => onAdoptPet(pet)} className="ui primary button">Adopt pet</button> */}
        {adoptPet}
      </div>
    </div>
  );

  // return (
  //   <div className="card" data-testid="pet">
  //     <div className="content">
  //       <span className="header">
  //         {/*'♀' OR '♂' */}
  //         PET NAME
  //       </span>
  //       <div className="meta">
  //         <span className="date">PET TYPE</span>
  //       </div>
  //       <div className="description">
  //         <p>Age: PET AGE</p>
  //         <p>Weight: PET WEIGHT</p>
  //       </div>
  //     </div>
  //     <div className="extra content">
  //       <button className="ui disabled button">Already adopted</button>
  //       <button className="ui primary button">Adopt pet</button>
  //     </div>
  //   </div>
  // );
}

export default Pet;
