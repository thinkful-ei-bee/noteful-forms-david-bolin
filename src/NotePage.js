import React from 'react';

import {Link} from 'react-router-dom';
import moment from 'moment';
import NotefulContext from './NotefulContext'


class NotePage extends React.Component  {
      static contextType = NotefulContext;


  render(){
    console.log(this.context.store.notes);
    // eslint-disable-next-line eqeqeq
    const NOTE = this.context.store.notes.find(note => note.id == this.props.match.params.id);
    
    let date = moment(NOTE.modified).format('MM-DD-YYYY HH:MM:SS');
if(this.context.fromOrigin !== true){
    return (
      <ul className='note-page'>
          <li className='back-button'>
        <Link to={`/Folder/${NOTE.folderId}`}>Go Back</Link>
        </li>
          <li className='note-info'>
        <h2>{NOTE.name}</h2>
        <p>{date} </p>
        <p>{NOTE.content}</p>
        <button onClick={() => this.context.handleDelete(NOTE.id)}>Delete</button>
        </li>
      </ul>
    );
}
else{ 
  return (
    <ul>
        <li>
          <button onClick={() => this.context.handleGoBack()}>Go Back</button>  
        </li>
        <li>
      <h2>{NOTE.name}</h2>
      <p>{date} </p>
      <p>{NOTE.content}</p>
      <button onClick={() => this.context.handleDelete(NOTE.id)}>Delete</button>
      </li>
    </ul>
  );

}
  }
}

export default NotePage;