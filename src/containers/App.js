import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
                }, {
                id: 2,
                text: 'wash the dishes'
                }, {
                id: 3,
                text: 'feed my cat'
            }]
        };
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
               <Title title='To do list' length={this.state.data.length}/>
               <TodoForm addTodo={this.addTodo}/>
               <TodoList data={this.state.data} remove={(id) => this.removeTodo(id)}/>
            </div>
        );
    }
}

export default hot(module)(App);
