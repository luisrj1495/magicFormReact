import { useState } from 'react'
import { checkValidity } from '../../utils/form'

const useForm = fieldForm => {
  const [fieldState, setFieldState] = useState({ ...fieldForm })
  const [formIsValid, setFormIsValid] = useState(false)

  const renderElementsForm = () => {
    const formElementsArr = []
    if (fieldState) {
      for (let key in fieldState) {
        formElementsArr.push({
          id: key,
          config: fieldState[key]
        })
      }
    }
    return formElementsArr
  }

  const onSubmitJSON = () => {
    const data = {}
    for (let key in fieldState) {
      data[key] = fieldState[key].value
    }
    return data
  }

  const handlerFormValidation = form => {
    let isValidForm = true
    for (let inputElement in form) {
      isValidForm = isValidForm && form[inputElement].valid
    }
    return isValidForm
  }

  const onResetForm = () => {
    setFieldState(fieldForm)
    setFormIsValid(false)
  }

  const handlerOnChangeForm = (ev, id) => {
    const inputValue = ev.target.value
    const validation = checkValidity(inputValue, fieldState[id].validation)
    const formData = {
      ...fieldState,
      [id]: {
        ...fieldState[id],
        value: inputValue,
        touched: true,
        valid: validation.isValid,
        errorMessage: validation.error
      }
    }
    setFieldState(formData)
    setFormIsValid(handlerFormValidation(formData))
  }

  const handlerLoadData = data => {
    const loadForm = { ...fieldState }
    for (let formElement in fieldState) {
      loadForm[formElement] = {
        ...fieldState[formElement],
        value: data[formElement] || '',
        touched: true,
        valid: true
      }
    }
    setFieldState(loadForm)
    setFormIsValid(true)
  }

  return [ renderElementsForm, formIsValid, handlerOnChangeForm, onSubmitJSON, onResetForm, handlerLoadData ]
}

export default useForm
