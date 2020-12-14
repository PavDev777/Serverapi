import React from 'react'
import ItemDetails, {Record} from '../ItemDetails/ItemDetails'
import WithSwapiService from '../hoc-helper/WithSwapiService'




const PersonDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record field={'gender'} label={'Gender'} />
            <Record field={'eyeColor'} label={'Eye Color'} />
        </ItemDetails>
    )
}

const mapMethodsToProps = (ServiceStar) => {
    return {
        getData: ServiceStar.getPerson,
        getImageUrl: ServiceStar.getPersonImage
    }
}

export default WithSwapiService(PersonDetails, mapMethodsToProps)