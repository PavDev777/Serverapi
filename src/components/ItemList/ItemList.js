import React, { Component } from 'react';
import ServiceStar from '../../services/ApiService';

import './ItemList.css';

export default class ItemList extends Component {

    ServiceStar = new ServiceStar()

    state = {
        person: {}
    }

    constructor() {
        super()
        this.updatePerson()
    }

    onPersonLoaded = (person) => {
        this.setState({
            person  
        })
    }


    updatePerson() {
        const id = Math.floor(Math.random() * 25) + 2
        this.ServiceStar.getPerson(id)
            .then(this.onPersonLoaded)
            
    }



    render() {

        const {person: {name, gender}} = this.state

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    {name}
        </li>
                <li className="list-group-item">
                    {gender}
        </li>
                <li className="list-group-item">
                    R2-D2
        </li>
            </ul>
        );
    }
}
