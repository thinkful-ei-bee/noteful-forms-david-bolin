import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import './App.css';
import NotefulContext from './NotefulContext'
import {withRouter} from 'react-router-dom';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import Error from './Error.js';
import config from './config';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      STORE: {
        folders: [],
        notes: [],
        selected: null
      },
      fromOrigin: true,
      newNoteName: '',
      newNoteMessage: '',
      newNoteValid: false,
      newSingleNoteName: '',
      newSingleNoteMessage: '',
      newSingleNoteValid: false,
      newNoteFolder: 0,
      newNoteContent: ''
    }
  }
  
  changeNewName = (str) => {
    let message = '';
    let validity = false;

    if (str.length === 0) {
      message = 'No name entered';
    }

    if (str.length !== 0 && this.state.STORE.folders.find(folder => folder.name === str)) {
      message = 'Duplicate name';
    } else if (str.length !== 0) {
      validity = true;
    }
    
    this.setState({
      newNoteName: str,
      newNoteMessage: message,
      newNoteValid: validity
    });
  };

  changeSelectedFolder = (str) => {
    this.setState( {
      newNoteFolder: this.state.STORE.folders.map(ele => ele.name).indexOf(str)
    });
  }

  changeNewNoteContent = (str) => {
    this.setState({
      newNoteContent: str
    });
  }

  changeNewSingleName = (str) => {
    let message = '';
    let validity = false;

    if (str.length === 0) {
      message = 'No name entered';
    }

    if (str.length !== 0 && this.state.STORE.notes.find(note => note.name === str)) {
      message = 'Duplicate name';
    } else if (str.length !== 0) {
      validity = true;
    }

    this.setState({
      newSingleNoteName: str,
      newSingleNoteMessage: message,
      newSingleNoteValid: validity
    })
  }

  addFolderSubmit = (name) => {
    const body = JSON.stringify({name: name});

    fetch(`${config.API_ENDPOINT}/api/folders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }).then (res => {
      if (res.ok) {
        this.getFolders()
          .then(() => {
            this.handleGoBack();
            this.setState({
              newNoteName: '',
              newNoteMessage: '',
              newNoteValid: false
             });
          })
        
      }
    });
  }

  addNoteSubmit = (name, folder, content) => {
    
    const note = JSON.stringify({
      name: name,
      folder_id: this.state.STORE.folders[folder].id,
      content: content
    })

    fetch(`${config.API_ENDPOINT}/api/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: note
    }).then (res => {
      if (res.ok) {
        this.getFolders()
          .then(() => {
            this.handleGoBack();
            this.setState({
              newSingleNoteName: '',
              newSingleNoteMessage: '',
              newSingleNoteValid: false,
              newNoteFolder: 0,
              newNoteContent: ''
          });
        
          
        })
      }
    });
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  handleDeleteFolder = (folderId) => {
    return fetch(`${config.API_ENDPOINT}/api/folders/${folderId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }, 
      })
      .then (res => {
        if (res.ok) {
          this.props.history.push('/');
          // eslint-disable-next-line eqeqeq
          const newNotes = this.state.STORE.notes.filter(note => note.folder_id != folderId);
          // eslint-disable-next-line eqeqeq
          const newFolders = this.state.STORE.folders.filter(folder => folder.id != folderId);
          this.setState({
            STORE: {
              notes: newNotes,
              folders: newFolders
            }
          })
        }
      });
  }

  handleDelete = (noteId) => {

    return fetch(`${config.API_ENDPOINT}/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }, 
      })
      .then (res => {
        if (res.ok) {
          this.props.history.push('/');
          const newNotes = this.state.STORE.notes.filter(note => note.id !== noteId);
          this.setState({
            STORE: {
              notes: newNotes,
              folders: [...this.state.STORE.folders]
            }
          })
        }
      });
  }

  getFolders() {
    let folders;
    let notes;

    return fetch(`${config.API_ENDPOINT}/api/folders`)
      .then (res => res.json())
      .then (res => {folders = res})
      .then (
        fetch(`${config.API_ENDPOINT}/api/notes`)
        .then (res => res.json())
        .then (res => {notes = res})
        .then (res =>
          { console.log(folders);
            return this.setState({
            STORE: {
              folders: folders,
              notes: notes
            }
          }) }
          )
          .catch(err => this.setState(
            {error: err}
            )
          )
      .catch(err => this.setState(
        {error: err}
      )));
    }

  componentDidMount() {
    this.getFolders();
      
  }

   changeOrigin = (boolean) => {
    if(this.state.fromOrigin!==boolean){
      this.setState({
      fromOrigin:boolean
    });
  }
  }

  render(){
  return (
    <NotefulContext.Provider value={{ store: this.state.STORE, fromOrigin:this.state.fromOrigin, changeOrigin:this.changeOrigin,
    handleDelete: this.handleDelete,
    handleGoBack: this.handleGoBack,
    changeNewName: this.changeNewName,
    newNoteName: this.state.newNoteName,
    newNoteMessage: this.state.newNoteMessage,
    newNoteValid: this.state.newNoteValid,
    addFolderSubmit: this.addFolderSubmit,
    newSingleNoteName: this.state.newSingleNoteName,
    newSingleNoteMessage: this.state.newSingleNoteMessage,
    newSingleNoteValid: this.state.newSingleNoteValid,
    changeNewSingleName: this.changeNewSingleName,
    newNoteFolder: this.state.newNoteFolder,
    changeSelectedFolder: this.changeSelectedFolder,
    newNoteContent: this.state.newNoteContent,
    changeNewNoteContent: this.changeNewNoteContent,
    addNoteSubmit: this.addNoteSubmit,
    handleDeleteFolder: this.handleDeleteFolder
     }}>

    <main className='App'>

    <Error>
      <section>
      <Route path='/' render={() => <HomePage />} />
      <Route exact path='/' render={() => <FolderList />}/>
      <Route exact path='/' render={() => <NoteList />}  />
      </section>
    </Error>
    
    <Error>
      <section>
      <Route path='/Folder/:id' render={(props) => <FolderList match={props.match}/>} />
      <Route path='/Folder/:id' render={(props) => <NoteList match={props.match}  />}  />
      </section>
    </Error>
    
    <Error>
      <section>
        <Route path='/Note/:id' render={(props) => <NotePage match={props.match}  />} />
      </section>
    </Error>
    
    <Error>
      <section>
        <Route path='/addfolder' component={AddFolder} />
      </section>
    </Error>
    
     <Error>
      <section>
        <Route path='/addnote' component={AddNote} />
      </section>
     </Error>
    
    </main>
   </NotefulContext.Provider>

  );
  }
}

export default withRouter(App);