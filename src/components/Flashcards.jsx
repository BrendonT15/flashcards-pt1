import { React, useState, useEffect } from 'react';

const Flashcards = ({ question, answer, difficulty, allowFlip, showQuestion }) => {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setFlip(false);  
    }, [showQuestion]);

    const handleFlip = () => {
        if (allowFlip) {
            setFlip(!flip);  
        }
    };

    return (
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
    );
};

export default Flashcards;