import React, { Component } from 'react'

class App extends Component {
  state ={
    hue: "150",
    saturation: "8",
    lightness: "20",

  }

  changeHue = event =>{
    const target = event.target
    const value = target.value
    this.setState({hue: value})

  }

  changeSat = event =>{
    const target = event.target
    const value = target.value
    this.setState({saturation: value})

  }

  changeLightness  = event =>{
    const target = event.target
    const value = target.value
    this.setState({lightness: value})

  }

  handleClickRandom = event => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
    })
  }

  






  render() {

    const currentColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`
    
    return (
     <div>

       <figure style= {{ backgroundColor: currentColor}}>
         
       <section>
        <p> Hue:<input type = "range" min ="0" max="360" value={this.state.hue} onChange={this.changeHue}/></p>
        <p>Saturation:<input type = "range" min="0" max= "100" value= {this.state.saturation} onChange={this.changeSat}/></p>
        <p> Lightness:<input type = "range" min="0" max="100" value ={this.state.lightness}onChange={this.changeLightness}/></p>
        <p> {currentColor}</p>
        <button onClick={this.handleClickRandom}>RANDOM</button>
       </section>
        <h1><strong>BYRON'S AWESOME COLOR PICKER</strong></h1>
       </figure>


     </div>
    )
  }
}

export default App
