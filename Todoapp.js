import React from 'react';
import {View , Button ,Text ,ScrollView} from 'react-native'
let id =0;
const Todo = props => (
  <View>
    <Button onPress={props.ondelete} title="delete"/>
    <Text>{props.todo.text}</Text>
    <Text>{props.todo.id}</Text>
  </View>
)


export default class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      todos: [],
    }
  }
  addTodo()
  {
    
    const text = 'TODO number'
    id++
    this.setState({todos : [...this.state.todos, {id: id,text: text, checked :false}],
    })
  }
  removeTodo(id)
  {
    this.setState({ todos : this.state.todos.filter(todo => todo.id !== id )})

  }
  toggleTodo(id)
  {
    this.setState({todos : this.state.todos.map (todo => {
      if(todo.id !== id) return todo
      return {
        id :todo.id,
        text :todo.text,
        checked :!todo.checked,
      }
    })})

  }
  render(){
    return (
      <View>
        <Text>Todo count: {this.state.todos.length}</Text> 
        <Text> Unchecked count :{this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add todo" />
        <ScrollView>
          {this.state.todos.map(todo => (<Todo 
           onToggle={() => this.toggleTodo(todo.id)}
          ondelete={() => this.removeTodo(todo.id)}
          todo={todo} 
          />))}
        </ScrollView>
      </View>
    )
  }
}
