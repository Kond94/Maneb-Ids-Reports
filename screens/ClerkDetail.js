import { Text } from "galio-framework";
import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class ClerkDetail extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerContent}>
						<Image
							style={styles.avatar}
							source={{
								uri: "https://bootdey.com/img/Content/avatar/avatar1.png",
							}}
						/>

						<Text style={styles.name}>John Doe</Text>
					</View>
				</View>

				<View style={styles.body}>
					<View style={styles.bodyContent}>
						<View style={styles.card}>
							<Text h5 style={{ margin: 5 }}>
								Assigned Resources
							</Text>
							<Text> - Lorem ipsum dolor sit amet</Text>
							<Text> - Lorem ipsum dolor sit amet</Text>
							<Text> - Lorem ipsum dolor sit amet</Text>
						</View>

						<View style={styles.card}>
							<Text h5 style={styles.cardTittle}>
								Stats
							</Text>
							<Text> - Lorem ipsum dolor sit amet</Text>
							<Text> - Lorem ipsum dolor sit amet</Text>
							<Text> - Lorem ipsum dolor sit amet</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#00BFFF",
	},
	headerContent: {
		padding: 30,
		alignItems: "center",
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: "white",
		marginBottom: 10,
	},
	name: {
		fontSize: 22,
		color: "#FFFFFF",
		fontWeight: "600",
	},
	bodyContent: {
		flex: 1,
		alignItems: "center",
		margin: 10,
	},
	textInfo: {
		fontSize: 18,
		marginTop: 20,
		color: "#696969",
	},
	card: {
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		padding: 10,
		height: 150,
		marginTop: 10,
		width: "100%",
		elevation: 10,
	},
});
