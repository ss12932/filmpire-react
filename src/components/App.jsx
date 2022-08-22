import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './styles';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

// -> root -> all movies
// /asd123 -> movie information -> more

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
