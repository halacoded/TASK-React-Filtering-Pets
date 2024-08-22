import React, { useState } from "react";

function PetItem({ pet }) {
  const [image, setImage] = useState(pet.image);
  const [Nextimage, setNextImage] = useState(false);
  const HandelPetButton = () => {
    if (Nextimage) {
      setImage(pet.image);
    } else {
      setImage(pet.image2);
    }
    setNextImage(!Nextimage);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              HandelPetButton();
            }}
          >
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
