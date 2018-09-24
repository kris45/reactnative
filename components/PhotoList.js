import React from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';

export default class PhotoList extends React.Component {

	state = {
		photos: []
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(res => res.json())
			.then(photos => this.setState({ photos }))
			.catch(() => Alert.alert('network'))
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.head}>Photos</Text>
				<FlatList
					data={this.state.photos}
					renderItem={({item}) => <AlbumPhoto photoItem={item}/>}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}

const AlbumPhoto = ({ photoItem }) => (
	<View style={styles.container}>
		<Text>
			{photoItem.title}
		</Text>
		<Image
			style={{ width: 70, height: 70}}
			source={{uri: photoItem.thumbnailUrl }}

		/>
	</View>
)


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