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
      <ul className='folderList'>
        {folders}
      </ul>
    );
  }
}

export default FolderList;