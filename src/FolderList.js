import React from 'react';
import Folder from './Folder'
import NotefulContext from './NotefulContext'

class FolderList extends React.Component  {

  static contextType = NotefulContext;

  render() {
    console.log(this.context.changeOrigin);
    let folders = this.context.store.folders.map(folder =>{
      return <Folder 
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