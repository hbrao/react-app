import React from 'react'
import Profile from './components/Profile.jsx'
import AddProfile from './components/AddProfile.jsx'
import AppTitle from './components/AppTitle.jsx'
import Vote from './components/Vote.jsx'
import Style from './components/Style.jsx'

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

    render() {
        let profiles = this.state.profiles.map( p1 => {
            return(
                <Profile name={p1.name} age={p1.age} bio={p1.bio} hobbies={p1.hobbies}/>
            )
        })

        return(
            <div>
                <AppTitle name="React App"/>

                <h1>Parent state update via Child Component</h1>

                <h2>Enter new profile info :</h2>
                <AddProfile addUser={this.addUser}/>

                <h2>All user profiles</h2>
                {profiles}
        
                <h1>Functional Components</h1>
                <Vote option1="Democrats" option2="Republicans"/>

                <h1>Styled Components</h1>
                <Style/>
            </div>
        )
    }
}
