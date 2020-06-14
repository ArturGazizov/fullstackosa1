import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

const Header = ({course}) => {
  return (
    <div>
      <p>{course.name}</p>
    </div>
  )
}

const Part = ({name,exercises}) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Contents = ({parts}) => {
  return (
    <div>
    
    {parts.map((part)=>Part(part))}

    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Total {[0].concat(parts).reduce((total,add)=>total+add.exercises)} exercises</p>
    </div>
  )
}

  return (
    <div>


    <Header course={course}/>
    <Contents parts={course.parts}/>
    <Total parts={course.parts}/>

      
      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)