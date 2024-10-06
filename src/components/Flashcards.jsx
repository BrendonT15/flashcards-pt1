import {React, useState} from 'react'

const Flashcards = ({question, answer, difficulty, allowFlip}) => {
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
        if (allowFlip == true) {
            setFlip(!flip);
        }
    }

    return(
        <div className="Flashcards" onClick={handleFlip}>
            {flip ? (
                <div className={"container " + difficulty}>
                    <h1>{answer}</h1>
                </div>
            ) : (
                <div className={"container " + difficulty}>
                    <h1>{question}</h1>
                </div>
            )}
        </div>
    )
}

export default Flashcards;