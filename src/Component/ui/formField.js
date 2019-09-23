import React from 'react';

const FormField = ({formdata,id}) => {

  const renderTemplate = () => {
    let formTemplate = null;
    
    switch(formdata.element) {
      case('input'):
        formTemplate = (
          <div>
            input with something
          </div>
        )

      break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

export default FormField;