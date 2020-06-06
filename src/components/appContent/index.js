'use strict'

import React, { PropTypes } from 'react';
import Search from 'components/search';
import UserInfo from 'components/userInfo';
import Actions from 'components/actions';
import Repository from 'components/repository';

import './app.css'

const AppContent = ({ 
  userInfo,
  repos, 
  starred, 
  isFetching,
  handleSearch, 
  getRepos, 
  getStarred,
  handlePagination
}) => (
  <div className='app' >
    <Search isDisabled={ isFetching } handleSearch={ handleSearch } />

    { isFetching && <div>carregando...</div> }

    { 
      // The !! converts userInfo to boolean
      !!userInfo && <UserInfo userInfo={ userInfo } /> 
    } 

    { !!userInfo && 
      <Actions 
        getRepos={ getRepos } 
        getStarred={ getStarred }
      /> 
    }

    { !!repos.repos.length && 
      <Repository 
        className='repos'
        title='Repositórios:' 
        repos={ repos }
        handlePagination={ (clicked) => handlePagination('repos', clicked) }
      /> 
    }

    { !!starred.repos.length &&
      <Repository 
        className='starred'
        title='Favoritos:' 
        repos={ starred }
        handlePagination={ (clicked) => handlePagination('starred', clicked) }
      /> 
    } 
  </div>
);

const reposPropTypesShape = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
};

AppContent.propTypes = {
  userInfo: PropTypes.object, 
  repos: PropTypes.shape(reposPropTypesShape).isRequired, 
  starred: PropTypes.shape(reposPropTypesShape).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,

};

export default AppContent;
