import React from 'react'

import withData from '../hoc-helper/WithData'

import ItemList from '../ItemList/ItemList'
import ServiceStar from '../../services/ApiService'


const serviceStar = new ServiceStar()

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = serviceStar



const witchChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}




const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name }) => <span>{name} ({model}) </span> 




const PersonList = withData(witchChildFunction(ItemList, renderName), getAllPeople)

const PlanetList = withData(witchChildFunction(ItemList, renderName), getAllPlanets)

const StarshipList = withData(witchChildFunction(ItemList, renderModelAndName), getAllStarships)

export { PersonList, PlanetList, StarshipList }