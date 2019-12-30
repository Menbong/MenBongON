import React, { Component } from 'react'

const dummy_prop = {
    title: '텍스트용 타이틀입니다',
    content: '테스트용 글입니다'
}

export default class MenbongUser extends Component {
    render() {
        const {id, name, school} = this.props
        return (
            <div>
                <h3>{name}</h3>
                <p>{school}</p>
            </div>
        )
    }
}
