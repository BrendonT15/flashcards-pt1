import {React, useState, useEffect} from 'react'

import Flashcards from './Flashcards.jsx'
import AnswerForm from './AnswerForm.jsx'

const arr = [
    {id: 1, question: "What is the time complexity of merge sort?", answer: "O(n log n)", difficulty: "easy"}, 
    {id: 2, question: "What is the time complexity of binary search?", answer: "O(log n)", difficulty: "easy"},
    {id: 3, question: "What is the time complexity of linear search?", answer: "O(n)", difficulty: "easy"},
    {id: 4, question: "What is a stable sorting algorithm?", answer: "An algorithm that maintains the relative order of records with equal keys.", difficulty: "medium"},
    {id: 5, question: "What is the worst-case time complexity of quicksort?", answer: "O(n^2)", difficulty: "medium"},
    {id: 6, question: "What is dynamic programming?", answer: "A method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once.", difficulty: "medium"},
    {id: 7, question: "What is a greedy algorithm?", answer: "An algorithm that makes the locally optimal choice at each step with the hope of finding a global optimum.", difficulty: "medium"},
    {id: 8, question: "What is Dijkstra's algorithm used for?", answer: "To find the shortest paths from a source vertex to all other vertices in a weighted graph.", difficulty: "hard"},
    {id: 9, question: "What is the difference between a depth-first search (DFS) and a breadth-first search (BFS)?", answer: "DFS explores as far as possible along each branch before backtracking, while BFS explores all neighbors at the present depth before moving on to nodes at the next depth level.", difficulty: "hard"},
    {id: 10, question: "What is the Bellman-Ford algorithm used for?", answer: "It is used to find the shortest paths from a source node to all other nodes in a weighted graph and can handle graphs with negative weights.", difficulty: "hard"}
]

const FlashcardArray = ({setNumberOfCards}) => {
    useEffect(() => {
        setNumberOfCards(arr.length);
    })

    const [currentIndex, setCurrentIndex] = useState(0)
    const [history, setHistory] = useState([0])
    const [feedback, setFeedback] = useState('')
    const [allowFlip, setAllowFlip] = useState(false)

    const handleSubmitAnswer = (userAnswer) => {
        const correctAnswer = arr[currentIndex].answer;
        if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            setFeedback("Correct!")
        }
        else {
            setFeedback("Incorrect! Try again.")
        }
        setAllowFlip(true)
    }

    const handleNextIndex = () => {
        setAllowFlip(false)
        setCurrentIndex((prevIndex) => {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * arr.length);
            } while (randomIndex === prevIndex)
    
            setHistory((prevHistory) => [...prevHistory, prevIndex]);
            return randomIndex;
        });
    };
    
    const handlePrevIndex = () => {
        setAllowFlip(false)
        setHistory((prevHistory) => {
            if (prevHistory.length > 0) {
                const lastIndex = prevHistory.pop();
                setCurrentIndex(lastIndex);
            }
            return [...prevHistory]; 
        });
    };

    return(
        <div className="FlashcardArray">
            <Flashcards question={arr[currentIndex].question} answer={arr[currentIndex].answer} difficulty={arr[currentIndex].difficulty} allowFlip={allowFlip}/>
            <button onClick={handlePrevIndex}>&lt;</button>
            <button onClick={handleNextIndex}>&gt;</button>
            <p>{feedback}</p>
            <AnswerForm onSubmitAnswer={handleSubmitAnswer}/>
        </div>
    )
}

export default FlashcardArray;