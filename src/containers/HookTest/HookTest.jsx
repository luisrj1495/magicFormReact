import React from 'react'
import { NavLink } from 'react-router-dom'

import fieldsForm from '../../utils/fields'
import Input from '../../components/Input'
import useForm from '../../hooks/useForm'

const HookTest = props => {
  const [renderElementsForm, formIsValid, handlerOnChangeForm, onSubmitJSON, , onLoadData] = useForm(fieldsForm)

  const renderForm = () => {
    let form = (
      <div className="form-style-2">
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
        <button disabled={ !formIsValid } type="button">
          Save
        </button>
      </form>

      </div>
    )

    return form
  }

  return (
    <div className="container">
      <NavLink to="/hoc"> GO TO HOC </NavLink>
      <h2>Using Hooks</h2>
      { renderForm() }
      <br />
      { JSON.stringify(onSubmitJSON()) }
    </div>
  )
}

HookTest.propTypes = {

}

export default HookTest
