import React, { Component } from 'react';
import ServiceStar from '../../services/ApiService';
import Spinner from '../spinner/spinner';

import './PersonDetails.css';

export default class PersonDetails extends Component {

    ServiceStar = new ServiceStar()

    state = {
        persons: null
    }

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson()
        }
    }

    updatePerson() {
        const { personId } = this.props
        if (!personId) {
            return
        }
        this.ServiceStar
            .getPerson(personId)
            .then((persons) => {
                this.setState({
                    persons
                })
            })
    }

    render() {
        if (!this.state.persons) {
            return <span>Select person</span>
        }



        const { id, name, gender, birthYear, eyeColor } = this.state.persons

        if (!this.state.persons) {
            return <Spinner />
        }


        return (
            <div className="person-details card">
                <img className="person-image"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

                <div className="card-body">
                    <h4> {name} </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span> {gender} </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span> {birthYear} </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span> {eyeColor} </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

