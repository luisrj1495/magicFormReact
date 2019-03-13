import React from 'react'

const Input = props => {
  let inputElement = null
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          { ...props.elementConfig }
          value={ props.value }
          onChange={ props.changed }
        />
      )
      break

    case 'select':
      inputElement = (
        <select>
          {props.elementConfig.options.map(option => (
            <option key={ option.label } value={ option.value }>
              {option.label}
            </option>
          ))}
        </select>
      )
      break

    default:
      inputElement = (
        <input
          { ...props.elementConfig }
          value={ props.value }
          onChange={ props.changed }
        />
      )
      break
  }

  return (
    <div>
    <label> { props.label } </label>
      {inputElement}
      {
        props.errorMessage &&
          <code style={{ color: 'red' }} >{ props.errorMessage }</code>
      }
    </div>
  )
}

export default Input
