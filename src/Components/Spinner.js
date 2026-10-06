import React, { Component } from 'react'
import gear from '../gear.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={gear} alt="gear"/>
      </div>
    )
  }
}

export default Spinner
