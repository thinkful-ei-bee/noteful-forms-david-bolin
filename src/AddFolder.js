import React from 'react';
import NotefulContext from './NotefulContext'
import './AddFolder.css';

export default class AddFolder extends React.Component {

  static contextType = NotefulContext;

  render() {
    return (
      <ul>
          <li className='back-button'>
             <button onClick={() => this.context.handleGoBack()}>Go Back</button>
          </li>
          <li>
             <h2>Add Folder</h2>
             <form>
               <label htmlFor="foldername">Name:</label>
               <input id="foldername" type="text" value={this.context.newNoteName} onChange={(e) => this.context.changeNewName(e.target.value)}></input>
               <button className="add" disabled={!this.context.newNoteValid} onClick={(e) => {
                 e.preventDefault(); this.context.addFolderSubmit(this.context.newNoteName)}}>Add</button>
               <p>{this.context.newNoteMessage}</p>
             </form>
         </li>
      </ul>
    );
  }
}