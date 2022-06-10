import React, { Component } from "react";
import { fetchUsers } from "../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import background from "../img/perrosGatos.jpg";


export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        //this.onChangeUser = this.onChangeUser.bind(this);
        

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchUsers()
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data,
                        selectedUser: response.data[0]
                    });
                }
            })
    }



    render(){
        return(
        <div>   
            
                <h3 className="text-center pt-4 display-4">Bienvenido</h3>
                    <div className="text-center pt-4 display-4">
                        <Link to= {"/pets"}><input type="submit" value="Mascotas" className="btn btn-warning"/></Link>
                    </div>
                    <div className="text-center pt-4 display-4">
                        <Link to= {"/datePicker"}><input type="submit" value="Agendar turnos" className="btn btn-warning"/></Link>
                    </div>
                    <div className="text-center pt-4 display-4" >
                        <Link to= {"/productsList"}><input type="submit" value="Movimientos de Stock" className="btn btn-warning"/></Link>
                    </div>   
            <div class="container" style={{ backgroundImage: `url(${background})`,
            width: 450,
            height: 500,
            opacity: 0.6,
            backgroundRepeat: 'no-repeat',
        
            }}>        
            </div> 
        </div>    
        )
    }
}