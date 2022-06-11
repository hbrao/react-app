import React from 'react'
import styled from 'styled-components'

const Person = styled.div`
    border-style: dashed;
    border-color: lightblue;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

//Arrow func, Param Destructuring a.k.a Omit render, return
let Profile = ({name, age, bio, hobbies}) => (
    <Person>
        <h3>{name}</h3>
        <p>{name} is {age} and {bio}</p>
        <h3>Hobbies</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </Person>
)


let Profile1 = function(props) {
    const {name, age, bio, hobbies} = props;
    return (
        <Person>
            <h3>{name}</h3>
            <p>{name} is {age} and {bio}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </Person>
    )
}

export default Profile