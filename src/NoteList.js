import React from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';
import {Link} from 'react-router-dom';

class NoteList extends React.Component  {
    
  static contextType = NotefulContext;

  render(){
    let NOTES =null;
    if(this.props.match !== undefined){
     // eslint-disable-next-line eqeqeq
     NOTES = this.context.store.notes.filter(note => note.folder_id == this.props.match.params.id)
    } else {
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
            <Link to='/addnote'>
            <button className="addButton">Add Note</button>
            </Link>
          </li>
        </ul>
      </div>
      
    );
  }
}

export default NoteList;