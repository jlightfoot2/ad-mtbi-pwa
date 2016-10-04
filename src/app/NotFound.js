import { Link } from 'react-router';
import React, {Component} from 'react';
import Main from './Main.js';
const NotFound = () => {
  return (<Main><div><h1>Page Not Found</h1>
       <p><Link to='/main/home'>Home</Link></p>
    </div></Main>);
};

export default NotFound;