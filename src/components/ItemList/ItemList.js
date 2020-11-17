import React, { Component } from 'react';
import ServiceStar from '../../services/ApiService';
import Spinner from '../spinner/spinner';

import './ItemList.css';

export default class ItemList extends Component {

    ServiceStar = new ServiceStar()

    state = {
        personList: null
    }

    componentDidMount() {
        this.ServiceStar
            .getAllPeople()
            .then((personList) => {
                this.setState({
                    personList
                })
            })
    }

    renderItems(arr) {
        return arr.map((person) => {
            return (
                <li
                    className="list-group-item"
                    key={person.id}
                    onClick={() => this.props.onItemSelected(person.id)}
                >
                    {person.name}
                </li>
            )
        })
    }

    render() {
        const { personList } = this.state

        if (!personList) {
            return <Spinner />
        }

        const items = this.renderItems(personList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
