import React from "react";

const PetListItem = ({pet}) => (
    <tr>
        <td>{pet.name}</td>
        <td>{pet.dni}</td>
        <td>{pet.nameOwner}</td>
        <td>{pet.animal}</td>
        <td>{pet.race}</td>
    </tr>
);

export default PetListItem;