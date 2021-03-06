import React, { Component } from "react";

class GuestList extends Component {
  render() {
    return (
      <div>
        <h2>Guest List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kid's Meal</th>
            </tr>
          </thead>
          <tbody>
            {this.props.guestList.map((guest, index) => (
              <tr key={index}>
                <td>{guest.name}</td>
                <td>{guest.kidsMeal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GuestList;
