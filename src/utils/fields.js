export default {
  name: {
    elementLabel: 'Write your Name',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Write your Name',
      name: 'name'
    },
    value: '',
    validation: {
      required: true,
      isText: true
    },
    valid: false,
    touched: false,
    errorMessage: null
  },
  lastName: {
    elementLabel: 'Write your LastName',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Write your LastName',
      name: 'lastName'
    },
    value: '',
    validation: {
      required: true,
      isText: true
    },
    valid: false,
    touched: false,
    errorMessage: null
  },
  email: {
    elementLabel: 'Write your Email',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Write your Email',
      name: 'email'
    },
    value: '',
    validation: {
      required: true,
      isEmail: true
    },
    valid: false,
    touched: false,
    errorMessage: null
  },
  cellphone: {
    elementLabel: 'Write your CellPhone',
    elementType: 'input',
    elementConfig: {
      type: 'number',
      placeholder: 'Write your CellPhone',
      name: 'cellphone'
    },
    value: '',
    validation: {
      required: true,
      isNumber: true
    },
    valid: false,
    touched: false,
    errorMessage: null
  }
}