import React from 'react'
import { connect } from 'react-redux'

import logo from '../assets/img/bg-hero-1.jpg'

class _HomePage extends React.Component {
    state = {}

    changeCount = (diff) => {
        console.log('Changing count by:', diff);
        const action = { type: 'CHANGE_COUNT', diff }
        this.props.dispatch(action)
    }

    render() {
        const { count } = this.props
        return (
            <section className='home-container'>
                <img src={logo} alt="Hero" className='hero-img' />
                <h2>
                    Count {count}
                    <button onClick={() => {
                        this.changeCount(1)
                    }}>+</button>
                    <button onClick={() => {
                        this.changeCount(10)
                    }}>+10</button>
                </h2 >
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.userModule.count
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)