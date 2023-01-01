import React from 'react'
import Profile from './functional/stateless/Profile.jsx'
import AddProfile from './class/AddProfile.jsx'
import AppTitle from './functional/stateless/AppTitle.jsx'
import Vote from './functional/hooks/Vote.jsx'
import styled from 'styled-components'
import ExampleWrapper from './functional/stateless/ExampleWrapper.jsx'
import AddUser from './functional/refs/AddUser.js'
import UsersList from './functional/refs/UsersList.js'

const ProfilesDiv = styled.div`
    display: flex;
    justify-items: first baseline;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
`

//Class based React Component
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles : [] , 
            usersList : []
        }
        this.addUser = this.addUser.bind(this)
        this.addUserHandler = this.addUserHandler.bind(this)
    }

    //Gets called after initial rendering of the page. 
    componentDidMount() {
        //TODO Write an ajax request to fetch the state info from APIs. 

        //Updating the state triggers rendering of the app component again. 
        this.setState({
            profiles : [
                {name: 'David', age:30, bio: 'enjoys swimming and biking', hobbies: ['swimming', 'biking']}, 
                {name: 'Sarah', age:40, bio: 'enjoy long walks on the beach', hobbies: ['gardening', 'games']}
            ]
        })
    }

    addUser(newProfile) {
        this.setState({ profiles: this.state.profiles.concat([newProfile]) });
    }

    addUserHandler(uName, uAge) {
        this.setState({
          usersList: this.state.usersList.concat([
            { id: Math.random(), name: uName, age: uAge },
          ]),
        });
    }

    render() {
        let profiles = this.state.profiles.map( p1 => {
            return(
                <Profile name={p1.name} age={p1.age} bio={p1.bio} hobbies={p1.hobbies}/>
            )
        })

        return(
            <div>
                <AppTitle name="React App"/>
                <ExampleWrapper>
                    <h1>Parent / Child Component</h1>
                    <AddProfile addUser={this.addUser}/>
                    <ProfilesDiv>{profiles}</ProfilesDiv>
                </ExampleWrapper>
                <ExampleWrapper>
                    <h1>Hooks</h1>
                    <Vote party1="Democrats" party2="Republicans"/>
                </ExampleWrapper>
                <ExampleWrapper>
                    <AddUser onAddUser={this.addUserHandler} />
                    <UsersList users={this.state.usersList} />
                </ExampleWrapper>
            </div>
        )
    }
}
