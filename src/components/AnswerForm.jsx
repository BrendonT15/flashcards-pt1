import { React, useState } from 'react'

const AnswerForm = ({ onSubmitAnswer }) => {
    const [answer, setAnswer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitAnswer(answer)
        setAnswer("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Guess your Answer:
            </label>
            <input 
            type="text"
            value={answer}
            onChange={
                (e) => setAnswer(e.target.value)
            }
            placeholder='Input your Answer here...'
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AnswerForm;