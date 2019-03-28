import React from 'react';
import NotefulContext from './NotefulContext'

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
               <label for="foldername">Name:</label>
               <input id="foldername" type="text" value={this.context.newNoteName} onChange={(e) => this.context.changeNewName(e.target.value)}></input>
             </form>
         </li>
      </ul>
    );
  }
}