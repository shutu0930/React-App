import React from 'react';
import classnames from 'classnames';


export default class ToDoItem extends React.Component {
  constructor() {
    super();
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggleComplete() {
    const { onToggleComplete, item } = this.props;
    if (onToggleComplete) {
      onToggleComplete(item);
    }
  }

  handleDelete() {
    const { onDelete, item } = this.props;
    if (onDelete) {
      onDelete(item);
    }
  }

  render() {
    const { item } = this.props;

    return (
      <li className={classnames('list-group-item todo-item', { 'todo-item--completed': item.completed })}>
        <div className="todo-item__name">{item.name}</div>
        <div className="todo-item__check">
          <i className="fa fa-check" onClick={this.handleToggleComplete} />
        </div>
        <div className="todo-item__trash">
          <i className="fa fa-trash" onClick={this.handleDelete} />
        </div>
      </li>
    );
  }
}
