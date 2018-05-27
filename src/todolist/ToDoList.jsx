import React from 'react';
import uuid from 'uuid';

import './todo.css';

import TodoItem from './ToDoItem';

export default class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      newItemName: '',
      items: [
        {
          id: uuid.v4(),
          name: 'item1',
          completed: false,
        },
        {
          id: uuid.v4(),
          name: 'item2',
          completed: true,
        },
      ],
      filter: 'all',
    };

    this.handleNewItemNameChange = this.handleNewItemNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleItemComplete = this.handleToggleItemComplete.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  getDisplayItems() {
    const { filter } = this.state;
    let filterFunc = () => true;
    if (filter === 'completed') {
      filterFunc = item => item.completed;
    } else if (filter === 'pending') {
      filterFunc = item => !item.completed;
    }
    return this.state.items.filter(filterFunc);
  }

  handleNewItemNameChange(e) {
    const name = e.target.value;
    this.setState({ newItemName: name });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItemName = this.state.newItemName.trim(); // trim spaces
    if (!newItemName) {
      return;
    }

    const newItem = {
      id: uuid.v4(),
      name: this.state.newItemName,
      completed: false,
    };
    this.setState({
      newItemName: '',
      items: [newItem].concat(this.state.items),
    });
  }

  handleToggleItemComplete(item) {
    const newItems = this.state.items.map((x) => {
      if (x.id === item.id) {
        return { ...x, completed: !item.completed };
      }
      return x;
    });
    this.setState({ items: newItems });
  }

  handleDeleteItem(item) {
    const newItems = this.state.items.filter(x => x.id !== item.id);
    this.setState({ items: newItems });
  }

  handleFilterChange(e) {
    this.setState({ filter: e.target.value });
  }

  renderItems() {
    return this.getDisplayItems().map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          onToggleComplete={this.handleToggleItemComplete}
          onDelete={this.handleDeleteItem}
        />
      );
    });
  }

  render() {
    return (
      <div className="todo-container">
        <h3>My Todo List</h3>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              value={this.state.newItemName}
              onChange={this.handleNewItemNameChange}
              placeholder="What are you gonna do next"
              className="form-control"
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">Add item</button>
            </span>
          </div>
        </form>
        <div className="list-group">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
