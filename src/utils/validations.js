export const checkValidation = (value, rules) => {
  let isValid = true
  let error = null
  let pattern = /[/<>+*¿?'`=$%&()!#|]/
  if (!rules) {
    return {
      isValid,
      error
    }
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid
    if (!isValid) {
      error = 'Este campo es requerido'
    }
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid
    if (!isValid) {
      error = `Este campo es debe tener mínimo de ${
        rules.minLength
      } caracteres `
    }
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid
    if (!isValid) {
      error = `Este campo es debe tener máximo de ${rules.minLength} caracteres`
    }
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    isValid = pattern.test(value) && isValid
    if (!isValid) {
      error = `Este correo no es valido `
    }
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/
    isValid = pattern.test(value) && isValid
    if (!isValid) {
      error = `Esto no es un numero `
    }
  }

  if (pattern.test(value)) {
    isValid = false
    error = 'Este campo contiene caracteres no permitidos'
  }

  return {
    isValid,
    error
  }
}
