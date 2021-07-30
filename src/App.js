import './App.css';
import './Responsive.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Routes from './Utilities/Routes';
import { getUser } from './actions/auth';
import { getNews } from './actions/news';

function App(props) {
  useEffect(() => {
    props.getNews()
    const token = localStorage.getItem('token');
    if (token) {
        props.getUser();
    }
  }, [props]);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default connect(null, { getUser, getNews })(App);
