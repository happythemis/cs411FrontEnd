//version 1 with material ui: I have not really understand this api so you can first try with version 2.. it is up to u.
// as you can see there is a Router at line 9:14
import './App.css';
// import List from './List' ;
import SignIn from './SignIn'
// import SignUp from './SignUp'
import Home from './Home'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">

      <Router>
      <div className={classes.paper}>
      <form className={classes.form} noValidate>
      <ul>
          <Grid container>
            <Grid item xs>
              <li className="Appli">
                <Link to="/">Home</Link>
              </li>
            </Grid>
            <Grid item xs>
            <li className="Appli">
              <Link to="/signin">SignIn</Link>
            </li>
            </Grid>
          </Grid>
          </ul>


        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/" exact component={Home}/>
          {/* </Route> */}
         </Switch>
      </form>
      </div>
    </Router>

    </Container>

  );
}
//version 2
/**
import './App.css';
import List from './List' ;
import WrappedLoginForm from './Login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="AppNav">
          <ul>
            <li className="Appli">
              <Link to="/">Home</Link>
            </li>
            <li className="Appli">
              <Link to="/lists">List</Link>
            </li>
            <li className="Appli">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/lists" exact component={List} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

**/

//defalut
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
