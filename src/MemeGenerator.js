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
    const randomNum = Math.floor(Math.random() * this.state.memeData.length)
    const genNewRandImg = this.state.memeData[randomNum].url
    this.setState({
      randomImg: genNewRandImg
    })
  }

  render(){
    return(
      <div>
          <form className="memeForm" onSubmit={this.handleSubmit}>
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
            <button>Go!</button>
          </form>

          <div className="meme">
            <img src={this.state.randomImg} alt="meme" />
            <h2 className="topText">{this.state.topText}</h2>
            <h2 className="bottomText">{this.state.bottomText}</h2>
          </div>
      </div>
    )
  }

}

export default MemeGenerator