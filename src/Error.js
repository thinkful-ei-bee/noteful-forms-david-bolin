import React from 'react';

export default class Error extends React.Component {
  state = {
    error: null
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {error};
  }

  render() {
    if (this.state.error) {
      return (
        <div className="errorPage">
          <h1>Something went wrong.</h1>
          <p>Reload original page or restart the server. Please note that the app will not function correctly if a page reload is attempted on paths other than the home page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}