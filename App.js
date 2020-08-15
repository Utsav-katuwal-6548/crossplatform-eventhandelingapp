
import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputBar from'./components/InputBar';

export default class  App extends React.Component {
  constructor(){
       super();
       this.state ={
         todoInput: '',
         todos: [
           {id: 0, title: 'take the trash out', done:false},
           {id:0, title: 'cook dinner', done:false}
         ]
       }

  }




  render(){
  return (
    <View style={styles.container}>
      <View style={styles.StatusBar}>
        
      </View>
      <Header  title="TODOAPP"/>
      <InputBar/>
      

      
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
