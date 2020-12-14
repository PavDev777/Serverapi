import React from 'react'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

const withData = (View, getData) => {
    return class extends React.Component {
        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.setState({
                loading: true,
                error: false
            })
            getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                })
        }

        render() {
            const { data, loading, error } = this.state

            if (loading) {
                return <Spinner />
            }

            if (error) {
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data} />
        }
    }
}
export default withData 
