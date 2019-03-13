import React, { useState, useMemo } from 'react'
import { checkValidation } from '../utils/validations'

const withForm = formInitialData => WrappedComponent => {
  return props => {
    const [formState, setFormState] = useState({ ...formInitialData })
    const [ formIsValid, setFormIsValid ] = useState(false)

    const handlerFormValidation = form => {
      let isValidForm = true
      for (let inputElement in form) {
        isValidForm = isValidForm && form[inputElement].valid
      }
      return isValidForm
    }

    const handlerOnChangeForm = (ev, id) => {
      const inputValue = ev.target.value
      const validation = checkValidation(inputValue, formState[id].validation)
      const formData = {
        ...formState,
        [id]: {
          ...formState[id],
          value: inputValue,
          touched: true,
          valid: validation.isValid,
          errorMessage: validation.error
        }
      }
      setFormState(formData)
      setFormIsValid(handlerFormValidation(formData))
    }

    const handlerOnSubmitJSON = ev => {
      const data = {}
      for (let key in formState) {
        data[key] = formState[key].value
      }
      return data
    }

    const arrayElementsForm = () => {
      const formElementsArr = []
      if (formState) {
        for (let key in formState) {
          formElementsArr.push({
            id: key,
            config: formState[key]
          })
        }
      }
      return formElementsArr
    }

    const onResetForm = () => {
      setFormState(formInitialData)
      setFormIsValid(false)
    }

    console.log("data")

    return (
      useMemo(() => (
        <WrappedComponent
          { ...props }
          isValidForm={ formIsValid }
          onChangeForm={ handlerOnChangeForm }
          onRenderElements={ arrayElementsForm }
          onResetForm={ onResetForm }
          getJsonData={ handlerOnSubmitJSON }
        />
      ), [formState, formIsValid])

    )
  }
}

export default withForm
