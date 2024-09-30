import {React, useState} from 'react'

const Flashcards = ({question, answer, difficulty}) => {
    const [flip, setFlip] = useState(true)

    const handleFlip = () => {
        setFlip(!flip);
    }

    return(
        <div className="Flashcards" onClick={handleFlip}>
            {flip ? (
                <div className={"container " + difficulty}>
                    <h1>{question}</h1>
                </div>
            ) : (
                <div className={"container " + difficulty}>
                    <h1>{answer}</h1>
                </div>
            )}
        </div>
    )
}

export default Flashcards;