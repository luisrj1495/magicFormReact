import React from 'react'
import PropTypes from 'prop-types'

import fieldsForm from '../../utils/fields'
import Input from '../../components/Input'
import useForm from '../../hooks/useForm'

const HookTest = props => {
  const [renderElementsForm, formIsValid, handlerOnChangeForm, onSubmitJSON, , onLoadData] = useForm(fieldsForm)

  const renderForm = () => {
    let form = (
      <form>
        {renderElementsForm().map(formElement => (
          <Input
            key={ formElement.id }
            label={ formElement.config.elementLabel }
            elementType={ formElement.config.elementType }
            elementConfig={ formElement.config.elementConfig }
            value={ formElement.config.value }
            changed={ ev => handlerOnChangeForm(ev, formElement.id) }
            errorMessage={ formElement.config.errorMessage }
          />
        ))}
        <button disabled={ !formIsValid } type="submit" color="primary">
          Save
        </button>
      </form>
    )

    return form
  }

  return (
    <div>
      <h2>Using Hooks</h2>
      { renderForm() }
      { JSON.stringify(onSubmitJSON()) }
    </div>
  )
}

HookTest.propTypes = {

}

export default HookTest
