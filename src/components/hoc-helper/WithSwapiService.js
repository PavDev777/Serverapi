import React from 'react'

import { SwapiServiceConsumer } from '../swapi-service-context/SwapiServiceContext'

const WithSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (ServiceStar) => {
                        const serviceProps = mapMethodsToProps(ServiceStar)
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}
export default WithSwapiService 
