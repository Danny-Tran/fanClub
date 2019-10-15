import React, { Component } from 'react';
import FormField from '../../ui/formField';


class Enroll extends Component {

  state = {
    fromError:false,
    formSuccess:'',
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
  
  // this function will update the form
  updateForm(element) {
    const newFormdata = {...this.state.formdata}
    const newElement = {...newFormdata[element.id]}

    newElement.value = element.event.target.value
    newFormdata[element.id] = newElement

    this.setState ({
      formdata: newFormdata
    })
  }

  // function that will submit user email into database
  submitForm() {
    
  }

  render() {
    return (
      <Fade>
        <div className='enroll_wrapper'>
          <form onSubmit={(event) => this.submitForm(event)}>
            <div className='enroll_title'>
              Enter your email
            </div>
            <div className='enroll_input'>
              <FormField
                id={'email'}
                formdata={this.state.formdata.email}
                change={(element)=>this.updateForm(element)}
              
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
import Fade from 'react-reveal/Fade'


export default Enroll;