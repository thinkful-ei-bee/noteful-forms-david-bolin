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
  newNoteContent: '',
  handleDelete: () => {},
  handleGoBack: () => {},
  changeNewName: () => {},
  addFolderSubmit: () => {},
  changeNewSingleName: () => {},
  changeNewNoteContent: () => {}

  })

export default NotefulContext;