'use strict'

import React, { Component } from 'react';

const App = () => {
  render(
    <div>My app</div>
  );
};


// In ES6
// class App extends Component {
//   render () {
//     return (
//       <div>
//         <Button handleClick = { () => console.log('Hi!') } >
//           Click me
//         </Button>
//       </div>
//      );
//   }
// }

// In ES5
// const App = React.createClass({
//   render () {
//     return (
//       <div className="container">
//         <Title 
//           name="Jessé"
//           lastName={{
//             first: "Pires Barbato",
//             last: "Rocha"
//           }}
//         />
//       </div>
//     );
//   },
// });

export default App;
