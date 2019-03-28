import React from 'react';
import {NavLink} from 'react-router-dom';
import './Folder.css';
import NotefulContext from './NotefulContext'


class Folder extends React.Component  {    

  static contextType = NotefulContext;
  
  render(){
    let cname;
    if (this.props.match.params.id === this.props.folderid) {
      cname = 'folderItem selected';
    } else {
      cname = 'folderItem';
    }
    
    return ( 
      <li key={this.props.folderid} className ={cname}>         
        <NavLink onClick={() => this.context.changeOrigin(false)} to={`/Folder/${this.props.folderid}`}>
        {this.props.folderName}</NavLink>
      </li>
    );
  }
}

export default Folder;