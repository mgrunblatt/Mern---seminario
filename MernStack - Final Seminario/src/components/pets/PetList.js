import React, { Component } from "react";
import { fetchUserPetsByUsername } from "../../fetchdata";
import LocalStorage from "../../services/LocalStorage";
import PetListItem from './PetListItem';

export default class PetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            selectedUser: LocalStorage.getObject("selectedUser")
        };
    }

    componentDidMount() {
        fetchUserPetsByUsername(this.state.selectedUser.username)
            .then(pets => this.setState({ pets: pets }));

    }

    renderPets() {
        return this.state.pets?.map(currentpet => {
            return <PetListItem pet={currentpet} key={currentpet._id} />;
        })
    }

    render() {
        return (
            <>
                <h3>Mascotas</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nombre</th>
                            <th>Dni</th>
                            <th>Nombre de Dueño</th>
                            <th>Tipo</th>
                            <th>Raza</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPets()}
                    </tbody>
                </table>
            </>
        );
    }
}