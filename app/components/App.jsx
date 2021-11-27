import React from 'react'
import Profile from './Profile.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles : [
                {name: 'David', age:30, bio: 'enjoys swimming and biking', hobbies: ['swimming', 'biking']}, 
                {name: 'Sarah', age:40, bio: 'enjoy long walks on the beach', hobbies: ['gardening', 'games']}
            ]
        }
    }

    render() {
        let profiles = this.state.profiles.map( p1 => {
            return(
                <Profile name={p1.name} age={p1.age} bio={p1.bio} hobbies={p1.hobbies}/>
            )
        })

        return(
            <div>
                {profiles}
            </div>
        )
    }
}