import React from 'react'
import WithSwapiService from '../hoc-helper/WithSwapiService'
import ItemDetails, { Record } from '../ItemDetails/ItemDetails'

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field={'population'} label={'Population'} />
            <Record field={'rotationPeriod'} label={'RotationPeriod'} />
            <Record field={'diameter'} label={'Diameter'} />

        </ItemDetails>
    )
}

const mapMethodsToProps = (ServiceStar) => {
    return {
        getData: ServiceStar.getPlanet,
        getImageUrl: ServiceStar.getPlanetImage
    }
}

export default WithSwapiService(PlanetDetails, mapMethodsToProps) 