import React from 'react';
import ReactDOM from 'react-dom';
//import TodoApp from './todolist/ToDoList';
import SignUpForm from './signupForm/SignUpForm';

import './styles/app.css';


// class ToDoList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInput: '',
//       filter: 'all',
//       items: [
//         {
//           id: uuid.v4(),
//           title: 'item1',
//           completed: false,
//         },
//         {
//           id: uuid.v4(),
//           title: 'item2',
//           completed: false,
//         },
//       ],


//     };

//     this.AddItemHandler = this.AddItemHandler.bind(this);
//     this.InputValueHandler = this.InputValueHandler.bind(this);
//   }
//   componentWillMount() {

//   }
//   componentDidMount() {

//   }
//   componentWillUnmount() {

//   }
//   componentDidUpdate(prevProps, prevState) {

//   }

//   AddItemHandler(e) {
//     e.preventDefault();
//     const newItems = this.state.items.concat({
//       id: uuid.v4(),
//       title: this.state.userInput,
//       completed: false,
//     });
//     this.setState({ userInput: '', items: newItems });
//   }

//   InputValueHandler(e) {
//     e.preventDefault();
//     this.setState({ userInput: e.target.value });
//   }

//   getDisplayItems() {
//     const { filter } = this.state;
//     let filterFunc = () => true;
//     if (filter === 'completed') {
//       filterFunc = item => item.completed;
//     } else if (filter === 'pending') {
//       filterFunc = item => !item.completed;
//     }
//     return this.state.items.filter(filterFunc);
//   }

//   handleToggleItemComplete(item){

//   }

//   handleDeleteItem(item){

//   }

//   renderItems() {
//     return this.getDisplayItems().map((item) => {
//       return (
//         <li key={item.id} item={item} onToggleComplete={this.handleToggleItemComplete}
//         onDelete={this.handleDeleteItem}>{item.title}</li>)}
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>My To Do List</h1>
//         <form onSubmit={this.AddItemHandler}>
//           <input type="text" value={this.state.userInput} onChange={this.InputValueHandler} placeholder="What are you gonna do next" />
//           <button type="submit">Add item</button>
//         </form>

//         {/* {this.state.items.map(item => <li key={item.id}>{item.title}</li>)} */}
//         <ul className="list-group">
//           {this.renderItems()}
//         </ul>

//       </div>

//     );
//   }
// }

ReactDOM.render(

  <SignUpForm />,
  document.getElementById('root'),
);
