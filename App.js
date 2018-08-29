
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  View
} from 'react-native';

import globalStyles from "./src/globalstyles";
import Logo from "./src/components/logo";
import Form from "./src/components/form";

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <StatusBar backgroundColor = {globalStyles.backgroundColor} barStyle = {"dark-content"} />
        <ScrollView contentContainerStyle = {{flexGrow:1, alignItems:"center", backgroundColor:globalStyles.backgroundColor}}>
          <Logo style = {styles.logo} />
          <Form style = {styles.form} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView:{
    flex:1
  },
  logo:{
    flex:1,
    width:"90%",
    alignItems:"center",
    justifyContent:"center",
    borderBottomWidth:globalStyles.lineSeparatorWidth,
    borderBottomColor:globalStyles.lineSeparatorColor
  },
  form:{
    flex:1,
    width:"80%",
    alignItems:"center",
    justifyContent:"center"
  }
});
