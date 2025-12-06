import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({ type: eventKey });

  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      const matchesSearch = item.name.toLowerCase().includes(this.state.search);
      const matchesType = this.state.type === "All" || item.type === this.state.type;
      return matchesSearch && matchesType;
  }

  render(){
    return (
        <div className = "filter-list">
         
          <DropdownButton
          title = {this.state.type}
          id = "type-dropdown"
          onSelect={this.onFilter}
          >
            <MenuItem eventKey = "All">All</MenuItem>
            <MenuItem eventKey = "Friut">Fruit</MenuItem>

            <MenuItem eventKey = "Vegetable">Vegetable</MenuItem>

            </DropdownButton>

          
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
