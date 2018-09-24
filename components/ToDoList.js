import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

export default class ToDoScreen extends React.Component {
	state = {
		tasks: [],
		text: ""
	};

	addTask =() => {

	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.head}>To Do List</Text>
				<FlatList
					data={[{key: 'a'}, {key: 'b'}]}
					renderItem={({item}) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2da63',

		marginTop: 20
	},
	head: {
		backgroundColor: '#f2da63',
		alignItems: 'center',
		justifyContent: 'center',
	}
});