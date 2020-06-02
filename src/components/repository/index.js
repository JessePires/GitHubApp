'use strict'

import React, { PropTypes } from 'react';
import './repository.css';

const Repository = ({ className, title, repos }) => (
  <div className={ className } >
    <h2>{ title }</h2>
    <ul>
      { repos.map((repository, index) => (
        <li key={ index } >
          <a href={ repository.link } >{ repository.name }</a> 
        </li>
      ))}

    </ul>
  </div>
);

Repository.defaultProps = {
  className: '',
  title: ''
};

Repository.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
};

export default Repository;
