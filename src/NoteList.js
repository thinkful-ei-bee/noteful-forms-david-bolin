import React from 'react';
import Note from './Note'
import NotefulContext from './NotefulContext'

class NoteList extends React.Component  {
    
  static contextType = NotefulContext;

  render(){
    let NOTES =null;
    if(this.props.match !== undefined){
     NOTES = this.context.store.notes.filter(note =>{
       return note.folderId === this.props.match.params.id
      }
    )
    }
    else{
      NOTES = this.context.store.notes;
    }

     let newnotes =  NOTES.map(note => {
        return <Note noteId = {note.id} 
          key={note.id}
          modified = {note.modified} 
          name= {note.name}
           />
      })
    return (
      <div className="rightBar">
        <ul className="noteList">
          {newnotes}
          <li>
            <button class="addButton">Add Note</button>
          </li>
        </ul>
      </div>
      
    );
  }
}

export default NoteList;