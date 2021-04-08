import { NameContextProvider } from '@fio/shared-library'
import React from 'react'

const Welcome = () => {
  const name = React.useContext(NameContextProvider)

  return <p>Welcome home, {name}</p>
}

export default Welcome
