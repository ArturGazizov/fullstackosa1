import React from 'react'
import ReactDOM from 'react-dom'



const Statistic = ({what,number}) => {
  return (
    <React.Fragment>
    <td>{what}</td>
    <td>{number}</td>
    </React.Fragment>
  )
}




class Statistics extends React.Component {

	 constructor(props) {
    super(props)

    
  }

   makepositiivista=(someobject)=>
  {
let result=
  	100*
someobject[Object.keys(someobject)[2]]*(1)/
(someobject[Object.keys(someobject)[0]]+someobject[Object.keys(someobject)[1]]+someobject[Object.keys(someobject)[2]])
//cannot just return expression

if (isNaN(result))
	result=0
  	return result
  }

  makeaverage=(someobject)=>
  {

  	let result=(someobject[Object.keys(someobject)[0]]*(-1)+
someobject[Object.keys(someobject)[2]]*(1))/
(someobject[Object.keys(someobject)[0]]+someobject[Object.keys(someobject)[1]]+someobject[Object.keys(someobject)[2]])
//cannot just return expression
if (isNaN(result))
	result=0
  	return result
  }



  render() {

if (Object.keys(this.props.thestate).map((it)=>this.props.thestate[it]).reduce((total,add)=>total+add)>0)

    return (
      <div>
<table>
{
	Object.keys(this.props.thestate).map((it)=>{return <tr><Statistic what={it} number={String(this.props.thestate[it])}/></tr>})
}

<tr><Statistic what={'all'} number={Object.keys(this.props.thestate).map((it)=>{return (this.props.thestate[it])}).reduce((it,it2)=>{return it+it2})}/></tr>

<tr><Statistic what={'keskiarvo '} number={String(this.makeaverage(this.props.thestate))}/></tr>
<tr><Statistic what={'positiivista '} number={String(this.makepositiivista(this.props.thestate))}/>%</tr>


</table>

      </div>
    )

return(<div>No feedback given</div>)

  }
}


const Button=({whattodo,what})=>{
  return (
    <button onClick={whattodo}>
      {what}
    </button>
  )
}


const Feedback = ({whattodo,what,howmany}) => {
  if (whattodo)
  return (

<Button whattodo={whattodo} what={what}/>

  )
  return (
    <p>
      {what}{' '}{howmany}
    </p>
  )
}

const Annapalautetta = () => {
  return (
    <div>
      <p>Give feedback</p>
    </div>
  )
}

const Tilasto = () => {
  return (
    <div>
      <p>Statistics</p>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      huono: 0,
      neutraali: 0,
      hyvä: 0
    }
  }


  lisaaArvoon = (whattoraise) => {
  const renewer=new Object()
  renewer[whattoraise]=this.state[whattoraise]+1
  return () => {
    this.setState(renewer)
  }
	}


 

  render() {
    return (

      <div>
<Annapalautetta />
{Object.keys(this.state).map((it)=>{return <Feedback whattodo={this.lisaaArvoon(it).bind(this)} what={it}/>})}
<Tilasto/>



<Statistics thestate={this.state}/>

      </div>



    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

