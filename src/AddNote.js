import React from 'react';
import NotefulContext from './NotefulContext'
import './AddNote.css';

export default class AddNote extends React.Component {

  static contextType = NotefulContext;

  render() {
    let dropDown;

    if (!this.context.store.folders) {
      return <div></div>;
    } else {

      dropDown = (
      
        <select id="folder-name" value={this.context.store.folders[this.context.newNoteFolder].name} onChange={e => {this.context.changeSelectedFolder(e.target.value)}}>
          {this.context.store.folders.map(folder => 
            <option key={folder.id} value={folder.name}>{folder.name}</option>
          )}
        </select>);
    }

    return (
      <ul>
          <li className='back-button'>
             <button onClick={() => this.context.handleGoBack()}>Go Back</button>
          </li>
          <li>
             <h2>Add Note</h2>
             <form>
               <label htmlFor="note-name">Name:</label>
               <input id="note-name" type="text" value={this.context.newSingleNoteName} onChange={(e) => this.context.changeNewSingleName(e.target.value)}></input>
               <p>{this.context.newSingleNoteMessage}</p>
               <label htmlFor="folder-name">Folder:</label>
               {dropDown}
               <p></p>
               
               <textarea id="note-content" name="note-content" rows="15" cols="100" onChange={e => this.context.changeNewNoteContent(e.target.value)}></textarea>
               <p></p>
               <button onClick={(e) => {
                 e.preventDefault(); this.context.addNoteSubmit(this.context.newSingleNoteName, this.context.newNoteFolder, this.context.newNoteContent)}} type="submit" className="add" disabled={!this.context.newSingleNoteValid}>Add Note</button>
             </form>
         </li>
      </ul>
    );
  }
}

/* 
<button className="add" disabled={!this.context.newSingleNoteValid} onClick={(e) => {
                 e.preventDefault(); this.context.addFolderSubmit(this.context.SingleNoteName)}}>Add</button>

                */