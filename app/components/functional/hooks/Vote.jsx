import React, {useState, useEffect} from 'react'

//React functional component
const Vote = ({party1, party2}) => {
    //hook to manage the state of votes for two parties
    const [countParty1, setCountParty1] = useState(0);
    const [countParty2, setCountParty2] = useState(0);

    let winner;
    if( countParty1 > countParty2 ) {
        winner = party1;
    } else if ( countParty2 > countParty1) {
        winner = party2;
    } else {
        winner = "Its a Tie !";
    }

    //hook that runs only once to fetch and initial data. 
    useEffect(() => {
        try {
            //TODO fetch initial votes from API
            setCountParty1(21)
            setCountParty2(20)
        } catch (error) {
            console.log('Unable to fetc initial votes data ... ')
        }
    }, []);

    //hook that runs evertime winner is updated. 
    useEffect(() => {
        document.title = winner
    }, [winner])

    return(
        <div>
            <p>Votes for {party1} : {countParty1} </p>
            <p>Votes for {party2} : {countParty2} </p>
            <p> Leader : {winner} </p>
            <div>
                <button onClick={() => setCountParty1(countParty1 + 1)}>
                    Vote for { party1 }
                </button>
                <button onClick={() => setCountParty2(countParty2 + 1)}>
                    Vote for { party2 }
                </button>
            </div>
        </div>
    )
}

export default Vote
