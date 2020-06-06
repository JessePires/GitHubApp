'use strict'

import React, { PropTypes } from 'react';
import Pagination from 'components/pagination';
import './repository.css';

const Repository = ({ className, title, repos, handlePagination }) => (
  <div className={ className } >
    <h2>{ title }</h2>
    <ul>
      { repos.repos.map((repository, index) => (
        <li key={ index } >
          <a href={ repository.link } >{ repository.name }</a> 
        </li>
      ))}
    </ul>
    <Pagination 
      total={ repos.pagination.total }
      activePage={ repos.pagination.activePage }
      onClick={ handlePagination }
    />
  </div>
);

Repository.defaultProps = {
  className: '',
  title: '',
};

Repository.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  }),
  handlePagination: PropTypes.func.isRequired
};

export default Repository;
