import React from 'react'
import Content from '../Content/Content.jsx'
import Total from '../Total/Total.jsx'
import Header from "../Header/Header.jsx";
import './App.css'
import '../../index.css'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course}> </Header>
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}></Content>
            <Total nbrex1={10} nbrex2={7} nbrex3={14}></Total>
        </div>
    )
}

export default App