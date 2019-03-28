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
             <h2>stuff</h2>
             <p>stuff </p>
             <p>stuff</p>
        </li>
      </ul>
    );
  }
}