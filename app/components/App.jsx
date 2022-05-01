import React, {useState, useEffect} from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

//ES6 arrow function and parameter destructuring. 
const AppTitle = ({name}) => (
    <div>
        <h1>Welcome to {name} !</h1>
    </div>
)

const Vote = ({option1, option2}) => {
    const [countOption1, setCountOption1] = useState(0);
    const [countOption2, setCountOption2] = useState(0);

    let winner;
    if( countOption1 > countOption2 ) {
        winner = option1;
    } else if ( countOption2 > countOption1) {
        winner = option2;
    } else {
        winner = "Its a Tie !";
    }

    useEffect( () => {
        document.title = winner
    }, [winner])

    return(
        <div>
            <p>Votes for {option1} : {countOption1} </p>
            <p>Votes for {option2} : {countOption2} </p>
            <p> Leader : {winner} </p>
            <div>
                <button onClick={() => setCountOption1(countOption1 + 1)}>
                    Vote for { option1 }
                </button>
                <button onClick={() => setCountOption2(countOption2 + 1)}>
                    Vote for { option2 }
                </button>
            </div>
        </div>
    )
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
        //state must be initialized inside constructor method. 
        this.state = {
            profiles : [] 
        }
        //Bind instance methods so that they can passed directly with this reference. 
        this.addUser = this.addUser.bind(this)
    }

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
                {profiles}
                <AddProfile addUser={this.addUser}/>

                <p/>
                <h1>Functional Components</h1>
                <p/>
                <Vote option1="Democrats" option2="Republicans"/>
            </div>
        )
    }
}