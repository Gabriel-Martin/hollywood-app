import React, { Component } from "react";
import api from "../api";

class CreateMovie extends Component {
  constructor() {
    super();

    this.state = {
      movie: {}
    };
  }

  onInputChange = e => {
    e.persist();

    let prop = e.target.name;
    let val = e.target.value;

    this.setState(state => ({
      ...state,
      movie: {
        ...state.movie,
        [prop]: val
      }
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();

    api.movies.create(this.state.movie).then(() => {
      this.props.history.push("/movies");
    });
  };

  render() {
    let { movie } = this.state;
    console.log(movie);
    return (
      <div>
        <h1>CreateMovie</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name={"title"}
            placeholder={"title"}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name={"rating"}
            placeholder={"rating"}
            onChange={this.onInputChange}
          />
          <input
            type="text"
            name={"poster"}
            placeholder={"poster"}
            onChange={this.onInputChange}
          />
          <input
            type="number"
            min={0}
            max={100}
            onChange={this.onInputChange}
            name={"rottenTomatoes"}
            placeholder={"rottenTomatoes"}
          />
          <input
            type="text"
            name={"summary"}
            placeholder={"summary"}
            onChange={this.onInputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateMovie;
