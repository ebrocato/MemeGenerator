import React from 'react'


class MemeGenerator extends React.Component {
  constructor(){
    super()
    this.state ={
      topText: "",
      bottomText: "",
      randomImg: "",
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

  handleChange = () => {
    
  }


  render(){
    return(
      <div>
        <main>
          <form>
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
          </form>
        </main>
      </div>
    )
  }

}

export default MemeGenerator