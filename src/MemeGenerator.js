import React from 'react'


class MemeGenerator extends React.Component {
  constructor(){
    super()
    this.state ={
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      memeData: []
    }
  }

  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
          const {memes} = response.data
          this.setState({
           memeData: memes
    })})
  
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('clicked')
    //Math.ceil (ceiling) is not used when generated random number based on array length because it has a bias.
    //it will never round to the zero indice
    
    const randomNum = Math.floor(Math.random() * this.state.memeData.length)
    const genNewRandImg = this.state.memeData[randomNum].url
    this.setState({
      randomImg: genNewRandImg
    })
  }

  render(){
    return(
      <div>
        
          <form onClick={this.handleSubmit}>
            <input
              type="text"
              placeholder="Top text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <button>Generate</button>
          </form>

          <div>
            <h1>{this.state.topText}</h1>
            <h1>{this.state.bottomText}</h1>
            <img src={this.state.randomImg} alt="meme" />
          </div>
      </div>
    )
  }

}

export default MemeGenerator