import React from 'react';
import {  StyleSheet, Text, View,TextInput, Button, TouchableOpacity } from 'react-native';

export default class TodoIteam extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const todoIteam=this.props.todoIteam;

        return(
            <TouchableOpacity
             style={styles.todoIteam}
             onPress={()=>this.props.toggleDone()}
             
             >
                <Text style={(todoIteam.done) ? {color:'#AAAAAA'}:{color:'#313131'}}>
                    {todoIteam.title}
                </Text>

                <Button
                title="Remove"
                color= {(todoIteam.done) ? 'rgba(200, 0, 0, 0.5)':'rgba(255,0,0,1)'}
                onPress={()=>this.props.removeTodo()}
                
                />

            </TouchableOpacity>
        )
    }


}
const styles= StyleSheet.create({
    todoIteam:{
      width:'100%',
      height:40,
      borderBottomColor:'#DDD',
      borderBottomWidth:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:15
    }
})
