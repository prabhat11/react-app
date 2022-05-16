import React, { Component } from 'react';

export default class ShowAPIData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users:[]
    };
  }

 async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {users.map(item => (
            <li key={item.id}>
              {item.name} {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

