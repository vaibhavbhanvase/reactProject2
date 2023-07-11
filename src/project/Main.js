import React from 'react'
import Form from './component/Form'
import { reduxStore } from './redux/reduxStore'
import { Provider } from 'react-redux'

function Main() {
  return (
    <>
      <Provider store={reduxStore}>
        <Form />
      </Provider>
    </>
  )
}

export default Main