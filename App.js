
import React from 'react';
import {  StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from'./components/InputBar';
import TodoIteam from './components/TodoIteam';

export default class  App extends React.Component {
  constructor(){
       super();
       this.state ={
         todoInput: '',
         todos: [
           {id: 0, title: 'take the trash out', done:false},
           {id:1, title: 'cook dinner', done:false}
         ]
       }

  }

addNewTodo(){
  let todos= this.state.todos;

  todos.unshift({
    id: todos.length + 1,
    title: this.state.todoInput,
    done: false
  });
  this.setState({
    todos,
    todoInput:''
  });

}
toggleDone(item){
  let todos =this.state.todos;

  todos=todos.map((todo)=>{
    if(todo.id==item.id){
      todo.done= !todo.done;
    }
    return todo;
  })

  this.setState({todos});

}
removeTodo(item){

  let todos= this.state.todos;
  todos= todos.filter((todo)=>todo.id !==item.id);
  this.setState({todos});
}

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.StatusBar}>
        
      </View>
      <Header  title="TODOAPP"/>

      <InputBar  textChange={todoInput=>this.setState({todoInput})}
      addNewTodo={ () => this.addNewTodo()}
      
       />
       <FlatList
        data={this.state.todos}
        extraData={this.state}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({item, index})=>{
          return(
            <TodoIteam todoIteam={item} toggleDone={()=>this.toggleDone(item)}
             removeTodo={()=> this. removeTodo(item)}
             />
          )
        }}
        />
  
      

      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  StatusBar:{
    backgroundColor:'#FFCE00',
    height:20
  }
});
