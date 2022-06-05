import React from 'react'
import Profile from './functional/stateless/Profile.jsx'
import AddProfile from './class/AddProfile.jsx'
import AppTitle from './functional/stateless/AppTitle.jsx'
import Vote from './functional/hooks/Vote.jsx'
import styled from 'styled-components'

const Example = styled.div`
    display: block;
    border-style: dashed;
    border-color: grey;
    padding: 10px;
    margin-bottom: 10px;
`;

//Class based React Component
export default class App extends React.Component {
    //props is a mandatory argument
    constructor(props) {
        super(props)
        //state must be initialized to empty array inside constructor method
        //as we are fetching the data in componentDidMount and updating the state
        //which triggers the rendering of the app component again. 
        this.state = {
            profiles : [] 
        }
        //Bind instance methods so that they can passed directly with this reference. 
        this.addUser = this.addUser.bind(this)
    }

    //Gets called after initial rendering of the page. 
    componentDidMount() {
        //Normally this is the place to write ajax request to fetch the state info from APIs. 
        this.setState({
            profiles : [
                {name: 'David', age:30, bio: 'enjoys swimming and biking', hobbies: ['swimming', 'biking']}, 
                {name: 'Sarah', age:40, bio: 'enjoy long walks on the beach', hobbies: ['gardening', 'games']}
            ]
        })
    }

    addUser(newProfile) {
        this.setState(
            {
                profiles : this.state.profiles.concat([
                       newProfile
                    ]
                )
            }
        )
    }

    //Render function
    render() {
        let profiles = this.state.profiles.map( p1 => {
            return(
                <Profile name={p1.name} age={p1.age} bio={p1.bio} hobbies={p1.hobbies}/>
            )
        })

        return(
            <div>
                <AppTitle name="React App"/>

                <Example>
                    <h1>Parent / Child Component</h1>

                    <h3>Enter new profile info :</h3>
                    <AddProfile addUser={this.addUser}/>

                    <h3>All user profiles</h3>
                    {profiles}
                </Example>

                <Example>
                    <h1>Functional Components</h1>
                    <Vote option1="Democrats" option2="Republicans"/>
                </Example>
            </div>
        )
    }
}
