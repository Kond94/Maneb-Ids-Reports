import React from "react";
import { StyleSheet, Dimensions, ScrollView, View } from "react-native";
import { Button, Block, Text, theme } from "galio-framework";

import { Icon } from "../components";

const { width } = Dimensions.get("screen");

import * as Progress from "react-native-progress";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Overview extends React.Component {
	state = {
		modal: false,
	};

	WrapperComponent = (data) => {
		return (
			<View>
				<Modal isVisible={this.state.modal}>
					<View style={{ flex: 1 }}>
						<Text>I am the modal content!</Text>
					</View>
				</Modal>
			</View>
		);
	};
	renderCharts = () => {
		const chartConfig = {
			backgroundGradientFrom: "#1E2923",
			backgroundGradientFromOpacity: 0.4,
			backgroundGradientTo: "#08130D",
			backgroundGradientToOpacity: 0.9,
			color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`,
			strokeWidth: 3, // optional, default 3
			useShadowColorFromDataset: false, // optional
			style: {
				borderRadius: 10,
			},
		};

		const OverviewData = {
			labels: ["PSLCE", "JCE", "MSCE", "IPTE", "Total"], // optional
			data: [0.8, 0, 0, 0, 0.2],
		};

		const PSLCEData = {
			labels: ["Map", "Extract", "Print", "Total"], // optional
			data: [0.4, 0.6, 0.8, 0.6],
		};

		const JCEData = {
			labels: ["Map", "Extract", "Print", "Total"], // optional
			data: [0.4, 0.6, 0.8, 0.6],
		};

		const MSCEData = {
			labels: ["Map", "Extract", "Print", "Total"], // optional
			data: [0.4, 0.6, 0.8, 0.6],
		};

		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.products}>
				<View
					style={{
						alignItems: "center",
						margin: 5,
						backgroundColor: "#F9F9F9",
						borderRadius: 20,
						elevation: 10,
					}}>
					<View
						style={{
							backgroundColor: "#F9F9F9",
							flexDirection: "row",
							borderRadius: 10,
							margin: 20,
							paddingRight: 15,
							elevation: 10,
						}}>
						<View
							style={{
								alignItems: "center",
								margin: 10,
							}}>
							<Text p style={{ margin: 10, lineHeight: 19 }}>
								Total Progress
							</Text>
							<Progress.Circle
								size={130}
								thickness={10}
								progress={0.13}
								showsText={true}
								color='green'
								formatText={() => "13.3%"}
							/>
						</View>
						<View style={{ justifyContent: "center", marginTop: 20 }}>
							<Text color='green' style={{ marginVertical: 5 }}>
								Mapped: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Extracted: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Printed: 0/600,000
							</Text>
						</View>
					</View>
					<Block row>
						<TouchableOpacity
							onPress={() => {
								this.setState({ modal: !this.state.modal });
								console.log(this.state.modal);
							}}
							style={{
								alignItems: "center",
								margin: 5,
								marginBottom: 10,
								padding: 10,
								backgroundColor: "#F9F9F9",
								borderRadius: 10,
								elevation: 5,
							}}>
							<Text p style={{ margin: 5, lineHeight: 19 }}>
								PSLCE
							</Text>
							<Progress.Circle
								size={80}
								thickness={6}
								progress={0.4}
								showsText={true}
								formatText={() => "40%"}
							/>
						</TouchableOpacity>
						<View
							style={{
								alignItems: "center",
								margin: 5,
								marginBottom: 10,

								padding: 5,
								backgroundColor: "#F9F9F9",
								borderRadius: 10,
								elevation: 5,
							}}>
							<Text p style={{ margin: 5, lineHeight: 19 }}>
								JCE
							</Text>
							<Progress.Circle
								size={80}
								thickness={6}
								progress={0}
								showsText={true}
								formatText={() => "0%"}
							/>
						</View>
						<View
							style={{
								alignItems: "center",
								margin: 5,
								marginBottom: 10,

								padding: 5,
								backgroundColor: "#F9F9F9",
								borderRadius: 10,
								elevation: 5,
							}}>
							<Text p style={{ margin: 5, lineHeight: 19 }}>
								MSCE
							</Text>
							<Progress.Circle
								size={80}
								thickness={6}
								progress={0}
								showsText={true}
								formatText={() => "0%"}
							/>
						</View>
					</Block>
				</View>

				<View style={{ flexDirection: "row" }}>
					<View
						style={{
							margin: 5,
							backgroundColor: "#F9F9F9",
							borderRadius: 20,
							elevation: 10,
							flex: 0.5,
						}}>
						<Text p center style={{ margin: 10, lineHeight: 19 }}>
							Yesterday
						</Text>
						<View style={{ justifyContent: "center", margin: 15 }}>
							<Text color='green' style={{ marginVertical: 5 }}>
								Mapped: 0
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Extracted: 0
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Printed: 0
							</Text>
						</View>
					</View>
					<View
						style={{
							margin: 5,
							backgroundColor: "#F9F9F9",
							borderRadius: 20,
							elevation: 10,
							flex: 0.5,
						}}>
						<Text p center style={{ margin: 10, lineHeight: 19 }}>
							Today
						</Text>
						<View style={{ justifyContent: "center", margin: 15 }}>
							<Text color='green' style={{ marginVertical: 5 }}>
								Mapped: 0
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Extracted: 0
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Printed: 0
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	};

	toggleModal = () => {
		this.setState({ modal: !this.state.modal });
	};
	render() {
		return (
			<Block flex center style={styles.home}>
				<Modal
					onBackdropPress={() => this.toggleModal()}
					onBackButtonPress={() => this.toggleModal()}
					isVisible={this.state.modal}>
					<View
						style={{
							backgroundColor: "#F9F9F9",
							borderRadius: 10,
							padding: 15,
							elevation: 10,
							alignItems: "flex-start",
						}}>
						<View style={{ marginTop: 20 }}>
							<Text p style={{ lineHeight: 19, marginBottom: 10 }}>
								PSLCE
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Mapping: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Verification: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Pre-Extraction: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Extraction: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Post-Extraction: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Pre-Printing: 0/600,000
							</Text>
							<Text color='green' style={{ marginVertical: 5 }}>
								Printing: 0/600,000
							</Text>
						</View>
					</View>
				</Modal>
				{this.renderCharts()}
			</Block>
		);
	}
}

const styles = StyleSheet.create({
	home: {
		width: width,
	},
	search: {
		height: 48,
		width: width - 32,
		marginHorizontal: 16,
		borderWidth: 1,
		borderRadius: 3,
	},
	header: {
		backgroundColor: theme.COLORS.WHITE,
		shadowColor: theme.COLORS.BLACK,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 8,
		shadowOpacity: 0.2,
		elevation: 4,
		zIndex: 2,
	},
	tabs: {
		marginBottom: 24,
		marginTop: 10,
		elevation: 4,
	},
	tab: {
		backgroundColor: theme.COLORS.TRANSPARENT,
		width: width * 0.5,
		borderRadius: 0,
		borderWidth: 0,
		height: 24,
		elevation: 0,
	},
	tabTitle: {
		lineHeight: 19,
		fontWeight: "300",
	},
	divider: {
		borderRightWidth: 0.3,
		borderRightColor: theme.COLORS.MUTED,
	},
	products: {
		width: width - theme.SIZES.BASE * 2,
		paddingVertical: theme.SIZES.BASE * 2,
	},
});
