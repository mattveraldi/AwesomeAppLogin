import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import globalStyles from "../../globalstyles";

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        return (
        <View style={this.props.style}>

            <View style = {styles.textInputView} >
                <Icon
                    name = {"user-o"}
                    style = {styles.icon}
                    size = {20} />
                <TextInput
                    style = {styles.textInput}
                    placeholder = "Email"
                    keyboardType = "email-address"
                    placeholderTextColor = {globalStyles.primaryColor}
                    underlineColorAndroid = "transparent"
                    
                    onChangeText = {(text) => this.setState({email:text})} /> 
            </View>
            
            <View style = {styles.textInputView} >
                <Icon
                    name = {"lock"}
                    style = {styles.icon}
                    size = {20} />
                <TextInput
                    style = {styles.textInput}
                    placeholder = "Password"
                    secureTextEntry = {true}
                    placeholderTextColor = {globalStyles.primaryColor}
                    underlineColorAndroid = "transparent"
                    
                    onChangeText = {(text) => this.setState({password:text})}/> 
            </View>

            <TouchableOpacity style = {styles.loginView}
                              onPress = {()=>alert("email: "+this.state.email+"\n"+"password: "+this.state.password)}>
                <Text style = {styles.loginText}>
                    LOGIN
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.signView}>
                <Text style = {styles.signText}>
                    SIGNUP
                </Text>
            </TouchableOpacity>

        </View>
        );
    }
}

const styles = StyleSheet.create({

  textInputView:{
    width:"100%",
    height:50,
    marginVertical:"3%",
    justifyContent:"center"
  },
  textInput:{
      width:"100%",
      height:50,
      textAlign:"center",
      fontSize:18,
      borderBottomWidth:2,
      borderBottomColor:globalStyles.primaryColor,
      color:globalStyles.primaryColor
  },
  icon:{
      position:"absolute",
      color:globalStyles.primaryColor
  },
  loginView:{
      width:globalStyles.buttonsWidth,
      height:50,
      backgroundColor:globalStyles.primaryColor,
      alignItems:"center",
      justifyContent:"center",
      marginVertical:"3%",
      borderRadius:25
  },
  loginText:{
      fontSize:20,
      color:globalStyles.backgroundColor
  },
  signView:{
    width:globalStyles.buttonsWidth,
    height:50,
    backgroundColor:globalStyles.backgroundColor,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:25,
    borderWidth:2,
    borderColor:globalStyles.primaryColor
  },
  signText:{
      fontSize: 20,
      color:globalStyles.primaryColor
  }

});
