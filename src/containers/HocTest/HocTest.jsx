import React,{ useState } from 'react'

import fieldsForm from '../../utils/fields'
import Input from '../../components/Input'
import withForm from '../../hoc/withForm'

const HocTest = props => {
  const renderForm = () => {
    let form = (
      <form>
        {props.onRenderElements().map(formElement => (
          <Input
            key={ formElement.id }
            label={ formElement.config.elementLabel }
            elementType={ formElement.config.elementType }
            elementConfig={ formElement.config.elementConfig }
            value={ formElement.config.value }
            changed={ ev => props.onChangeForm(ev, formElement.id) }
            errorMessage={ formElement.config.errorMessage }
          />
        ))}
        <button disabled={ !props.isValidForm } type="button">
          Save
        </button>
      </form>
    )

    return form
  }

  return (
    <div>
      <h2>Using HOC</h2>
      { renderForm() }
      <br />
      { JSON.stringify(props.getJsonData()) }
    </div>
  )
}

HocTest.propTypes = {

}

export default withForm(fieldsForm)(HocTest)
