import React from "react";
import Part from "./Part.jsx";

const Content = ({
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3
                 }) => {



    return (
        <div>
            <Part part={part1} exercice={exercises1}></Part>
            <Part part={part2} exercice={exercises2}></Part>
            <Part part={part3} exercice={exercises3}></Part>
        </div>
    )
}

export default Content