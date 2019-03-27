import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './HomePage'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import './App.css';
import NotefulContext from './NotefulContext'
import {withRouter} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      STORE: {
        folders: [],
        notes: []
      },
      fromOrigin: true
    }
  }
  
  handleDelete = (noteId) => {

    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }, 
      })
      .then (res => {
        if (res.ok) {
          console.log('delete worked');
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

  componentDidMount() {
    let folders;
    let notes;

    fetch('http://localhost:9090/folders')
      .then (res => res.json())
      .then (res => {folders = res})
      .then (
        fetch('http://localhost:9090/notes')
        .then (res => res.json())
        .then (res => {notes = res})
        .then (res => 
          this.setState({
            STORE: {
              folders: folders,
              notes: notes
            }
          })
          )
      )
      
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
    handleDelete: this.handleDelete }}>
    <main className='App'>

    <section>
     <Route path='/' render={() => <HomePage />} />
     <Route exact path='/' render={() => <FolderList />}/>
     <Route exact path='/' render={() => <NoteList />}  />
    </section>

    <section>
     <Route path='/Folder/:id' render={() => <FolderList />} />
     <Route path='/Folder/:id' render={(props) => <NoteList match={props.match}  />}  />
    </section>

    <section>
      <Route path='/Note/:id' render={(props) => <NotePage match={props.match}  />} />
    </section>

    </main>
   </NotefulContext.Provider>

  );
  }
}

export default withRouter(App);