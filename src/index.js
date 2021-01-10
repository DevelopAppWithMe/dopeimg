import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import BigImage from './pages/bigimage';
import Homepage from './pages/homepage';

let App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/big/:id'} component={BigImage} />
      </Switch>
    
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


