import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity, ToastAndroid,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
var count=0;

function add(){
  count+=1;
   printer(count);
}

function substract(){
  count-=1;
   printer(count);
}

const App = () => {
  const showToast = () => {
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "ROHIT SINGH YOU HAVE PRESSED THE BUTTON!",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  return (
    <View style={{backgroundColor:"#000"}}>
    {/* toolbar title/ */}
     <View style={[styles.bg,styles.toolbar]}>
        <Text style={styles.toolbar}>We Serve The Best Air Here </Text>
      </View>
    <ScrollView style={styles.box} nestedScrollEnabled={true}>
        <TouchableOpacity style={[styles.bg, styles.bg1]} activeOpacity={0.8}
        onPress={() => showToastWithGravityAndOffset()}>
        <Text style={styles.color}>Hello1</Text>
      </TouchableOpacity>
      <View style={[styles.bg,styles.bg2]}>

       <Text style={styles.color}>Check us More</Text>
          <ScrollView horizontal={true} >
            <View style={[styles.bg11]}>
              <Text style={styles.color}>{this.state.sampleText}</Text>
            </View>
            <TouchableOpacity style={[styles.bg11]} onPress={add} activeOpacity={0.8}>
              <Text style={styles.color}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bg11]} onPress={substract} activeOpacity={0.8}>
              <Text style={styles.color}>-</Text>
            </TouchableOpacity>
            <View style={[styles.bg11]}>
              <Text style={styles.color}>hhbh</Text>
            </View>
          </ScrollView>
      </View>
      <ScrollView horizontal={true} >
        <View style={[styles.bg11]}>
          <Text style={styles.color}>Hello1</Text>
        </View>
        <View style={[styles.bg11]}>
          <Text style={styles.color}>Hello1</Text>
        </View>
        <View style={[styles.bg11]}>
          <Text style={styles.color}>Hello1</Text>
        </View>
        <View style={[styles.bg11]}>
          <Text style={styles.color}>Hello1</Text>
        </View>
      </ScrollView>
      <View style={[styles.bg,styles.bg3]}>
        <Text style={styles.color}>Hello</Text>
      </View>
        <View style={{ width: "100%", height: 100}}>
          <Text style={{ textAlign:'center'}}>Copyrights Reserved By Rohit Singh</Text>
        </View>
    </ScrollView>

      
</View>
  )
}

const styles = StyleSheet.create({
  toolbar: {
    height :50,
    backgroundColor:'#000',
    color: '#fff',
    fontWeight:'900' ,
    borderRadius: 10,
    fontSize:18

  },
  color: {
    color: '#000', fontSize: 18, fontWeight: '900',


  },
  bg: {
    width: '100%',
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center', fontSize: 18

  },
  bg1: {
    height: 200,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    marginBottom: 20, fontSize: 18, 

    justifyContent: 'center',
    alignItems: 'center',
  },
  // horizontals fs
  bg11: {
    width: 200,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#FFD700', marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2, fontSize: 18

  },

  bg2: {
    height: 200,
    backgroundColor: '#fff',
    marginTop:20,
    borderRadius: 0,
    marginBottom: 20, fontSize: 18


  },
  bg3: {
    height: 400,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20, fontSize: 18


  },
})
export default App