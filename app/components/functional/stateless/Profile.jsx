import React from 'react'

//Arrow func, Param Destructuring a.k.a Omit render, return
let Profile = ({name, age, bio, hobbies}) => (
    <div>
        <h3>{name}</h3>
        <p>{name} is {age} and {bio}</p>
        <h3>Hobbies</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
)


let Profile1 = function(props) {
    const {name, age, bio, hobbies} = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>{name} is {age} and {bio}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}

export default Profile