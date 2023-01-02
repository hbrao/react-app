import React from 'react'
import styled from 'styled-components'

const AddProfileDiv = styled.div`
    border-style: dotted;
    width: 100%;
    .wrapper {
        background-color: whitesmoke;
        list-style-type: none;
        padding: 0;
        border-radius: 3px;
    }
    .form-row {
        display: flex;
        justify-content: flex-start;
        padding: .5em;
    }
    .form-row > label {
        padding: .5em 1em .5em 0;
        flex: 1;
    }
    .form-row > input {
        flex: 4;
    }
    .form-row > input,
    .form-row > button {
        padding: .5em;
    }
    .form-row > button {
        background: gray;
        color: white;
        border: 0;
    }
    & button {
        width: 100%;
    }
    @media (min-width: 768px) {
        & button {
            width: auto;
        }
    }
`

export default class AddProfile extends React.Component {
    //props is a mandatory argument
    constructor(props) {
        super(props)
        //state must be initialized
        this.state = {
            name: 'John',
            age: 21,
            bio: 'likes to swim and code',
            hobby: 'Skating'
        }

        //Bind instance methods so that they can passed directly with this reference. 
        this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleHobby = this.handleHobby.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    //Event handlers
    handleName(e) {this.setState({name: e.target.value,});}
    handleAge(e) {this.setState({age: e.target.value,});}
    handleBio(e) {this.setState({bio: e.target.value,});}
    handleHobby(e) {this.setState({hobby: e.target.value,});}

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
            <AddProfileDiv>
                <ul class="wrapper">
                    <li class="form-row">
                        <label for="name">Name</label>
                        <input id="name" onChange={this.handleName} value={this.state.name} />
                    </li>
                    <li class="form-row">
                        <label for="age">Age</label>
                        <input id="age" onChange={this.handleAge} value={this.state.age} />
                    </li>
                    <li class="form-row">
                        <label for="bio">Bio</label>
                        <input id="bio" onChange={this.handleBio} value={this.state.bio} />
                    </li>
                    <li class="form-row">
                        <label for="hobby">Hobbies</label>
                        <input id="hobby" onChange={this.handleHobby} value={this.state.hobby} />
                    </li>
                    <li class="form-row">
                        <button onClick={this.handleClick}>Add Profile</button>
                    </li>
                </ul>
            </AddProfileDiv>
        )
    }
}