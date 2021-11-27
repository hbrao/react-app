import React from 'react'
import ReactDOM from 'react-dom'

var App1 = React.createClass({
    getInitialState: function() {
        return {
            profiles: [
                {name: 'David'}, 
                {name: 'Sarah'}
            ]
        }
    },
    render: function() {
        return(
            <div>
                <p>Hello {this.state.profiles[0].name}</p>
            </div>
        )
    }
})

//Must be declared before App2
class Profile extends React.Component {
    render() {
        let hobbies = this.props.hobbies.map( hobby => {
            return <li>{hobby}</li>
        })

        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.name} is {this.props.age} and {this.props.bio}</p>
                <h3>Hobbies</h3>
                <ul>
                    {hobbies}
                </ul>
            </div>
        )
    }
}

class App2 extends React.Component {
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

ReactDOM.render(<App2 />, document.getElementById('app'))