'use strict'

import React, { PropTypes } from 'react';
import './actions.css';

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions' >
    <button onClick={ getRepos } >Ver Repositórios</button>
    <button onClick={ getStarred } >Ver Favoritos</button>
  </div>
);

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
};

export default Actions;
