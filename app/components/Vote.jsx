import React, {useState, useEffect} from 'react'

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

    useEffect(() => {
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

export default Vote
