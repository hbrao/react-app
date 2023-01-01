import React from 'react'
import styled from 'styled-components'

const PersonDiv = styled.div`
    border-style: dashed;
    border-color: lightblue;
    padding: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    & h2 {
        color: ${props => (props.age > 30 ? 'red' : 'green')} 
    }
    & li:hover {
        background-color: antiquewhite;
    }
`;

//Arrow func, Param Destructuring a.k.a Omit render, return
let Profile = ({name, age, bio, hobbies}) => (
    <PersonDiv age={age}>
        <h2>{name}</h2>
        <p>{name} is {age} and {bio}</p>
        <h3>Hobbies</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </PersonDiv>
)

//Vanilla implementation of Profile component.
let Profile1 = function(props) {
    const {name, age, bio, hobbies} = props;
    return (
        <PersonDiv>
            <h3>{name}</h3>
            <p>{name} is {age} and {bio}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </PersonDiv>
    )
}

export default Profile