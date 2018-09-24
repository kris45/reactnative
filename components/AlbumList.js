import React from 'react';
import { StyleSheet, Text, FlatList, View, Button, Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

export default class AlbumList extends React.Component {
	state = {
		albums: []
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/albums')
			.then(res => res.json())
			.then(albums => this.setState({ albums }))
			.catch(() => Alert.alert('network'))
	}

	handleNav = (item) => {
		this.props.navigation.navigate('AlbumDetails', {
			id: item.id,
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.head}>Albums list</Text>
				<FlatList
					data={this.state.albums}
					renderItem={({item}) => <Album
					item={item} onPress={this.handleNav}/>}
					keyExtractor={(item) => item.id.toString()}
				/>

			</View>
		);
	}
}

export class AlbumDetailsComponent extends React.Component {
	render() {
		console.log(this.props)
		return (
		<View><Text>Details this.props.item.id</Text></View>
		)
	}
}

class Album extends React.Component {
	state = {
		animatedHeight: new Animated.Value(150),
	};

	hideItem = () => {
		Animated.timing(
			this.state.animatedHeight,
			{
				toValue: 0,
				duration: 2000
			}
		).start()
	}

	render() {
	const {item, onPress} = this.props;
	const {animatedHeight} = this.state;

	return (
	<Animated.View style={[styles.container, styles.albumItem, {height: animatedHeight}]}>
		<Text style={styles.defaultFont}>{item.title}</Text>
		<Button
			title="details"
			onPress={() => onPress(item)}
		/>
		<Button
			title="don't show"
			onPress={this.hideItem}
		/>
	</Animated.View>)
}};


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f2da63',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	},
	head: {
		backgroundColor: '#f2da63',
		alignItems: 'center',
		justifyContent: 'center',
	},
	albumItem: {
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10,
		padding: 5
	}
})
