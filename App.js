import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Blink from './components/Blink.js';
import ToDoScreen from './components/ToDoList.js';
import AlbumList from './components/AlbumList.js';
import {AlbumDetailsComponent} from './components/AlbumList.js';
import PhotoList from './components/PhotoList.js';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

const TabScreen = () => <View><Text>test</Text></View>;

class HomeScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Blink text='I love to blink' />
      <Button
        title="To Do List"
        onPress={() => this.props.navigation.navigate('ToDoList')}
        />
			<Button
				title="Albums"
				onPress={() => this.props.navigation.navigate('Albums')}
			/>
    </View>
    );
  }
}

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
		Albums: AlbumList,
		AlbumDetails: AlbumDetailsComponent
	},
	{
		initialRouteName: 'Home',
	}
);

export default App  = createMaterialTopTabNavigator(
	{
		Home: HomeStack,
		ToDoList: ToDoScreen,
		Photo: PhotoList,
	}
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2da63',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});

{/*<View style={styles.container}>*/}
  {/*<Text>Open up App.js to start working on your app!</Text>*/}
  {/*<Text>Changes you make will automatically reload.</Text>*/}
  {/*<Text>Shake your phone to open the developer menu.</Text>*/}
{/*</View>*/}