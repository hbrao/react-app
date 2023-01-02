import React from 'react'
import Profile from './components/functional/stateless/Profile.jsx'
import AddProfile from './components/class/AddProfile.jsx'
import AppTitle from './components/functional/stateless/AppTitle.jsx'
import Vote from './components/functional/hooks/state/Vote.jsx'
import styled from 'styled-components'
import ExampleWrapper from './components/functional/stateless/ExampleWrapper.jsx'
import AddUser from './components/refs/AddUser.js'
import UsersList from './components/refs/UsersList.js'
import LoginApp from './components/functional/hooks/effect/LoginApp'
import { AuthContextProvider } from './components/functional/hooks/effect/context/auth-context'
import UsersContext from './components/class/users-context.js'
import UserFinder from './components/class/UserFinder.js'

const ProfilesDiv = styled.div`
    display: flex;
    justify-items: first baseline;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
`

const DUMMY_USERS = [
    { id: 'u1', age: 30,  name: 'David' },
    { id: 'u2', age:40, name: 'Sarah' },
    { id: 'u3', age:60, name: 'Mark' },
  ];

const DUMMY_PROFILES = [
    {name: 'David', age:30, bio: 'enjoys swimming and biking', hobbies: ['swimming', 'biking']}, 
    {name: 'Sarah', age:40, bio: 'enjoy long walks on the beach', hobbies: ['gardening', 'games']},
    {name: 'Mark', age:60, bio: 'enjoy long walks on the beach', hobbies: ['gardening', 'games']}
]

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
    //Equaivalent to useEffect(..., []) in functional based components.
    componentDidMount() { 
        //TODO Write an ajax request to fetch the state info from APIs. 

        //Updating the state triggers rendering of the app component again. 
        this.setState({
            usersList : DUMMY_USERS,
            profiles : DUMMY_PROFILES
        })
    }

    componentDidUpdate(prevProps, prevState) {
        //TODO Add an example using this
    }

    addUser(newProfile) {
        this.setState({ profiles: this.state.profiles.concat([newProfile]) });
        this.setState({ usersList: this.state.usersList.concat({id: new Date().toISOString(), age: newProfile.age,  name : newProfile.name})})
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
                <AppTitle name="React Examples"/>
                <ExampleWrapper>
                    <h1>Class-based Component</h1>
                    <AddProfile addUser={this.addUser}/>
                    <ProfilesDiv>{profiles}</ProfilesDiv>
                </ExampleWrapper>
                <ExampleWrapper>
                    <h1>useState</h1>
                    <Vote party1="Democrats" party2="Republicans"/>
                </ExampleWrapper>
                <ExampleWrapper>
                    <h1>useRef</h1>
                    <AddUser onAddUser={this.addUserHandler} />
                    <UsersList users={this.state.usersList} />
                </ExampleWrapper>
                <ExampleWrapper>
                    <h1>useState, useEffect, useReducer, useContext, useRef</h1>
                    <AuthContextProvider>
                        <LoginApp/>
                    </AuthContextProvider>
                </ExampleWrapper>
                <ExampleWrapper>
                    <h1>componentDidCatch</h1>
                    <UsersContext.Provider value={{users: DUMMY_USERS}}>
                        <UserFinder />
                    </UsersContext.Provider>
                </ExampleWrapper>
            </div>
        )
    }
}
