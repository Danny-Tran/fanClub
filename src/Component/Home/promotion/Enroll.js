import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'


class Enroll extends Component {

  state = {
    fromError=false,
    formSuccess='',
    formdata:{
      email:{
        element:'input',
        value:'',
        config:{
          name:'email_input',
          type:'email',
          placeholder:'Enter your email'
        },
        validation:{
          require:true,
          email:true
        },
        valid:false,
        validationMessage:''
      }
    }
  }

  render() {
    return (
      <Fade>
        <div className='enroll_wrapper'></div>
      </Fade>
    );
  }
}
import Fade from 'react-reveal/Fade'


export default Enroll;