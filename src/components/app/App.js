import React from 'react';

import Header from '../header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'

import './App.css'
import ServiceStar from '../../services/ApiService';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

export default class App extends React.Component {

    ServiceStar = new ServiceStar()

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };



    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {


        if (this.state.hasError) {
            return <ErrorIndicator />
        }

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
                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.ServiceStar.getAllPlanets}
                            renderItem={(item) => <span> {item.name} <button>!</button></span>}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.ServiceStar.getAllStarships}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>

                

            </div>
        );
    }
}
