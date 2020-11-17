import React from 'react';

import Header from '../header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'

import './App.css'

export default class App extends React.Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 3
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> :
            null;

        return (
            <div className="container">
                <Header />
                { planet}

                <button
                    className="toggle-planet btn btn-warning btn-lg mb-4"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}
