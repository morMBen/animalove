import React from 'react';
import './App.css';

import { images } from './assets/constants';
import Card from './components/Card/Card';
import Nav from './components/Nav/Nav';
import NavButtom from './components/NavButtom/NavButtom';

class App extends React.Component {
  state = {
    numOfItems: images.length,
    currentItem: 0,
    likes: 0,
    disLike: 0,
    isEnd: false,
  };

  setLike = () => {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 };
    });
  };
  setDislike = () => {
    this.setState((prevState) => {
      return { disLike: prevState.disLike + 1 };
    });
  };
  setNext = () => {
    if (this.state.currentItem + 1 <= this.state.numOfItems - 1) {
      this.setState((prevState) => {
        return { currentItem: prevState.currentItem + 1 };
      });
    } else {
      this.setState({ isEnd: true });
    }
  };
  render() {
    const lik = 'Go open a zoo';
    const dis =
      'Go give a hug to a friend, because you probably will not have a pet.';
    const brr = 'Bring yourself a dog or cat :)';
    return (
      <div className='App'>
        {console.log(this.state.likes)}
        <Nav dislikes={this.state.disLike} likes={this.state.likes} />
        {!this.state.isEnd && <Card currentItem={this.state.currentItem} />}
        {this.state.isEnd && (
          <h1>
            {this.state.disLike === this.state.likes
              ? brr
              : this.state.disLike > this.state.likes
              ? dis
              : lik}
          </h1>
        )}
        <NavButtom
          like={this.setLike}
          dislike={this.setDislike}
          nextItem={this.setNext}
          isEnd={this.state.isEnd}
        />
      </div>
    );
  }
}

export default App;
