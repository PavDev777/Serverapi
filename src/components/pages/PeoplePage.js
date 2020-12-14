import React from 'react'
import { withRouter } from 'react-router-dom'
import Row from '../Row/Row'
import { PersonList } from '../sw-components/ItemsLists'
import PersonDetails from '../sw-components/PersonDetails'

const PeoplePage = ({ history, match }) => {
    const {id} = match.params

    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id} />}
        />
    )
}
export default withRouter(PeoplePage) 