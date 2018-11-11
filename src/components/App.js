import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
    render () {
        const props = this.props

        return (
            <React.Fragment>
                <div>value: { props.value }</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

const mapStateProps = state => ({ value: state.count.value })
// const mapDispatchProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
// })

const mapDispatchProps = ({ increment, decrement })

export  default connect(mapStateProps, mapDispatchProps)(App)