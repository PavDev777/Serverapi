import React from 'react';
import ServiceStar from '../../services/ApiService';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

export default class PeoplePage extends React.Component {

    ServiceStar = new ServiceStar()

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {

        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }


        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.ServiceStar.getAllPeople}
                        renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        )
    }

}





