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
          className="input-field"
        />
      )
      break

    case 'select':
      inputElement = (
        <select className="select-field">
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
          className="input-field"
        />
      )
      break
  }

  return (
    <div>
    <label> { props.label } </label>
    <div style={{ display: 'flex', flexFlow:'column' }}>
      {inputElement}
      {
        props.errorMessage &&
          <code style={{ color: 'red' }} >{ props.errorMessage }</code>
      }
    </div>
    </div>
  )
}

export default Input
