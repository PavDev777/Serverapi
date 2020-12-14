import React from 'react';

import Header from '../header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'

import './App.css'
import ServiceStar from '../../services/ApiService';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import { SwapiServiceProvider } from '../swapi-service-context/SwapiServiceContext'
import PeoplePage from '../pages/PeoplePage';
import StarshipsPage from '../pages/StarshipsPage';
import PlanetPage from '../pages/PlanetsPage';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import StarshipDetails from '../sw-components/StarshipDetails';
import Loginpage from '../pages/LoginPage';
import Secretpage from '../pages/SecretPage';



export default class App extends React.Component {

    ServiceStar = new ServiceStar()

    state = {
        hasError: false,
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        const { isLoggedIn } = this.state

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <SwapiServiceProvider value={this.ServiceStar}>
                <Router>
                    <div className="container">
                        <Header />

                        <RandomPlanet />
                        <Switch>
                            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>} />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planets' component={PlanetPage} />
                            <Route path='/starships' exact component={StarshipsPage} />
                            <Route path='/starships/:id'
                                render={({ match }) => {
                                    const { id } = match.params
                                    return <StarshipDetails itemId={id} />
                                }}
                            />
                            <Route
                                path='/login'
                                render={() => (
                                    <Loginpage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}
                                    />
                                )}
                            />
                            <Route
                                path='/secret'
                                render={() => (
                                    <Secretpage isLoggedIn={isLoggedIn} />
                                )}
                            />

                            {/* <Redirect to='/' />   */}
                            <Route render={() => <h2>Page not found</h2>} />

                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
}

