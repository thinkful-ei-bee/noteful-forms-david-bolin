import React from 'react'

const NotefulContext = React.createContext({
  store: {},
  fromOrigin: true,
  newNoteName: '',
  newNoteMessage: '',
  newNoteValid: false,
  newSingleNoteName: '',
  newSingleNoteMessage: '',
  newSingleNoteValid: '',
  newNoteFolder: 0,
  handleDelete: () => {},
  handleGoBack: () => {},
  changeNewName: () => {},
  addFolderSubmit: () => {},
  changeNewSingleName: () => {},

  })

export default NotefulContext;