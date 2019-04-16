import React from 'react'

const NotefulContext = React.createContext({
  store: {
    folders: [],
    notes: []
  },
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
  handleDeleteFolder: () => {},
  handleGoBack: () => {},
  changeNewName: () => {},
  addFolderSubmit: () => {},
  changeNewSingleName: () => {},
  changeNewNoteContent: () => {},
  addNoteSubmit: () => {}

  })

export default NotefulContext;