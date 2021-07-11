import './App.css';
import './Responsive.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Routes from './Utilities/Routes';
import { getUser } from './actions/auth';

function App(props) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        props.getUser(token);
    }
  }, [props]);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default connect(null, { getUser })(App);
