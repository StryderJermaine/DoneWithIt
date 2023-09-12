// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Button, Alert, StatusBar, Dimensions } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';



export default function App() {

  console.log(Dimensions.get('screen'));



  return (
    // <View style={{
    //   //marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    //   backgroundColor: '#fff',
    //   flexDirection: 'row',
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center"
    // }}>
    //   <View style={{ backgroundColor: 'dodgerblue', width: 100, height: 100  }} />
    //   <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
    //   <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
    //   <View style={{ backgroundColor: 'grey', width: 100, height: 100 }} />
    // </View>
    <WelcomeScreen />
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40
  },
});
