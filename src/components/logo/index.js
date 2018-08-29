import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export default class Logo extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <View style={this.props.style}>
            <Image
                source = {require("../../../assets/png/logo.png")}
                resizeMode = {"contain"}
                style = {styles.image} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  image:{
      width:"100%",
      height:"100%",
      minHeight:150,
  }
});
