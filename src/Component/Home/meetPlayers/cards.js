import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'
import Otamendi from '../../../Resources/images/players/Otamendi.png'

class HomeCards extends Component {

  state = {
    
    cards: [
      {
        bottom:90,
        left:300
      },
      {
        bottom:60,
        left:200
      },
      {
        bottom:30,
        left:100
      },
      {
        bottom:0,
        left:0
      }
    ]
  }

  showAnimateCards = () => (
    this.state.cards.map((card,i) =>(
      <Animate
        key={i}
        show={this.props.show}
        start = {{
          left:0,
          bottom:0
        }}
      >
        {({})=>{
          return(
            <div>
              div
            </div>
          )
        }}
      </Animate>
    ))
  )

  render() {
    return (
      <div>
        {this.showAnimateCards()}
      </div>
    );
  }
}

export default HomeCards;