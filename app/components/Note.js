import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default class todoapp extends Component {
  clickButton = () => {
    Alert.alert(
      "Delete",
      "Are you sure ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteMethod }
      ],
      { cancelable: false }
    );
  };
  render() {
    return(
      <View key={this.props.keyval} style={styles.note}>

      <Image style={styles.imageStyle} source={require('../../icons/circle.jpg')}/>

      <View style={styles.noteView}>

        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

      </View>


      <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}
           onPress={this.clickButton}
      >
        <Image style={styles.imageStyle} source={require('../../icons/delete.png')}/>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  note : {
    position : 'relative',
    borderBottomWidth : 2,
    borderBottomColor : '#ededed',
    backgroundColor : '#fffff0',
    paddingBottom : 15
  },
  noteText : {
    paddingLeft : 40,
    color : 'black',
  },
  noteDelete : {
    position : 'absolute',
    justifyContent : 'center',
    alignItems : 'center',
    padding : 10,
    top : 10,
    bottom : 10,
    right : 10,
  },
  noteDeleteText : {
    color : 'white',
  },
  imageStyle : {
    width : 30,
    height : 30,
    alignSelf : 'flex-start',
    marginTop : '5%'
  },
  noteView : {
    marginTop : -30
  }
});
