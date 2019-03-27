import React from 'react';
import HomePage from './HomePage';
import {Route,Link} from 'react-router-dom';
import moment from 'moment';

function Note(props) {
 let date = moment(props.modified).format('MM-DD-YYYY HH:MM:SS');
  

  return (
      
    <li key={props.noteId}>         
      <Link to={`/Note/${props.noteId}`}>
      {props.name}</Link>
      <p>{date}</p>
    </li>
   
  );
}

export default Note;