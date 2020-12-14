import React from 'react'
import Row from '../Row/Row'
import { PlanetList } from '../sw-components/ItemsLists'
import PlanetDetails from '../sw-components/PlanetDetails'


export default class PlanetPage extends React.Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }



    render() {
        const { selectedItem } = this.state

        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        )
    }

}