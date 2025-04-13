import React, { Component } from 'react';


class UserGreeting extends Component {
 render() {
   const { firstName, lastName } = this.props;
   return <p>Hello, {firstName} {lastName}!</p>;
 }
}
