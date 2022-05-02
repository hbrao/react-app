import React from 'react'

export default class AddProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'John',
            age: 21,
            bio: 'likes to swim and code',
            hobby: 'Skating'
        }
        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleHobby = this.handleHobby.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleName(e) {
        this.setState(
            {
                name: e.target.value
            }
        )
    }

    handleAge(e) {
        this.setState(
            {
                age: e.target.value
            }
        )
    }

    handleBio(e) {
        this.setState(
            {
                bio: e.target.value
            }
        )
    }

    handleHobby(e) {
        this.setState(
            {
                hobby: e.target.value
            }
        )
    }

    handleClick(e) {
        let newProfile = {
            name: this.state.name, 
            age: this.state.age,
            bio: this.state.bio,
            hobbies: [this.state.hobby]
        }

        //Call parent componet App
        this.props.addUser(newProfile)
    }

    render() {
        return(
            <div>
                <section>
                    <input onChange={this.handleName} value={this.state.name} />
                    <input onChange={this.handleAge} value={this.state.age} />
                    <input onChange={this.handleBio} value={this.state.bio} />
                    <input onChange={this.handleHobby} value={this.state.hobby} />
                    <button onClick={this.handleClick}>Add Profile</button>
                </section>
            </div>
        )
    }
}