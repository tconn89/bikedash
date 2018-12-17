const initialState = {}

export const contactReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SEND_CONTACT_FORM':
      return _sendContactForm(state, action)
    default:
      return state
  }
}

// Action Creators
function _sendContactForm(state, action){
  // connect to api and send email to myself
  console.log('Contact Form Test Send')
  console.log(action.message)
  return {}
}

export const sendContactForm = (name, number, email, message) => ({
  type: 'SEND_CONTACT_FORM',
  name, number, email, message
})
