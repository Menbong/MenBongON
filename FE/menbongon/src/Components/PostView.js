import React, { Component } from 'react'

const dummy_prop = {
    title: '테스트용 타이틀',
    content: '테으스용 글',
    password: '테스트용 비밀번호'
}

export default class PostView extends Component {
    render() {
        const {id, title, content, password} = this.props
        return (
            <div>
                {id}
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{password}</p>
            </div>
        )
    }
}
