import React from 'react'
import { Provider } from 'react-redux'
import Form from './component/Form'
import { task1Store } from './redux/task1Store'

function Main() {
  return (
    <>
      <Provider store={task1Store}>
        <Form />
      </Provider>
    </>
  )
}

export default Main