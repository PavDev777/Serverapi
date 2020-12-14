import React from 'react'
import WithSwapiService from '../hoc-helper/WithSwapiService'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'

const StarshipDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record field={'model'} label={'Model'} />
            <Record field={'passengers'} label={'Passengers'} />
            <Record field={'crew'} label={'Crew'} />

        </ItemDetails>
    )
}

const mapMethodsToProps = (ServiceStar) => {
    return {
        getData: ServiceStar.getStarhip,
        getImageUrl: ServiceStar.getStarshipImage
    }
}

export default WithSwapiService(StarshipDetails, mapMethodsToProps)