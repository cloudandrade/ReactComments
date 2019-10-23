import React from 'react';
import Post from './Post';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Post title="Aprendendo com reactJS com a RocketSeat" />
        <Post title="ReactJs é demais!" />
        <Post title="Em breve mais videos de ReactJs" />
      </div>
    );
  }
}
