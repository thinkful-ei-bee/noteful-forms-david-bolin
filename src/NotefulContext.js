import React from 'react'

const NotefulContext = React.createContext({
  store: {},
  fromOrigin: true,
  newNoteName: '',
  newNoteMessage: '',
  newNoteValid: false,
  handleDelete: () => {},
  handleGoBack: () => {},
  changeNewName: () => {},
  addFolderSubmit: () => {}

  })

export default NotefulContext;