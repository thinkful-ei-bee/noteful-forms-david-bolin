import React from 'react'

const NotefulContext = React.createContext({
  store: {},
  fromOrigin: true,
  newNoteName: '',
  handleDelete: () => {},
  handleGoBack: () => {},
  changeNewName: () => {}

  })

export default NotefulContext;