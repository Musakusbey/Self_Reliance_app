import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Kendimi başarılı bir insan olarak görürüm.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },

      ],
    },
    {
      text: "Verdiğim kararların arkasında dururum.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },
      ],
    },
    {
      text: "Aktif birisi olduğumu düşünürüm.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },
      ],
    },
    {
      text: "Öz-eleştiri yapabilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },
      ],
    },
    {
      text: "Anlamadığım konularda başkalarına soru sorabilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },
      ],
    },
    {
      text: "Yeni girdiğim ortamlara uyum sağlarım.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },
      ],
    },
    {
      text: "Kendimi ve başkalarını olduğu gibi kabul ederim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "sıklıkla", isCorrect: true },
      ],
    },
    ];

  const optionClicked = (isCorrect) =>{
    if(isCorrect){
      setScore(score +1)
    }
    if(currentQuestion +1 <questions.length){
      setCurrentQuestion(currentQuestion +1);
    }
    else{
      setFinalResult(true);
    }

  }
      
  const restartTest = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false); 
  }
  return (
    <div className='App'> 
      <div className='Container'>
        <h1> Özgüven Testi </h1>  
        <h2> Mevcut Skor : {score} </h2>  
        {
          showFinalResult ? 
            <div className='result'> 
              <h1> Sonuç </h1>
              <h2>
                 {(score/questions.length)*100}% Başarılısın
              </h2>
              <button onClick={()=> restartTest()}>Yeniden Test Et</button>
            </div>
            :
            <div className='question-card'>
              <h2> {questions.length} sorudan {currentQuestion + 1}.</h2>
              <h3>{questions[currentQuestion].text }</h3>
              <ul>
                {questions[currentQuestion].options.map((option) => {

                  return ( 
                    <li onClick={()=> optionClicked(option.isCorrect)} key={option.id}> {option.text} </li>
                  )

                })}
              </ul>
            </div>
        }
      </div>
    </div>
  )
}

export default App
