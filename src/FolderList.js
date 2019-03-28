import React from 'react';
import Folder from './Folder'
import NotefulContext from './NotefulContext'

class FolderList extends React.Component  {

  static contextType = NotefulContext;

  render() {
    let folders = this.context.store.folders.map(folder =>{
      return <Folder match={this.props.match}
        key={folder.id}
        folderid={folder.id} 
        folderName= {folder.name} />
    })
      
    return (
      <div className='leftBar'>
        <ul className='folderList'>
          {folders}
          <li>
          <button class="addButton">Add Folder</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default FolderList;