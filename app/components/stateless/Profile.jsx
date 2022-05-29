import React from 'react'
import styled from 'styled-components'

const Name = styled.h3`
    color: green;
    border-style: dashed;
    border-color: aliceblue;
    width: 180px;
`;

//Arrow func, Param Destructuring a.k.a Omit render, return
let Profile = ({name, age, bio, hobbies}) => (
    <div>
        <Name>{name}</Name>
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
            <Name>{name}</Name>
            <p>{name} is {age} and {bio}</p>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}

export default Profile