import { Text } from "galio-framework";
import React, { Component } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Alert,
	Button,
} from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

export default class Clerks extends Component {
	constructor(props) {
		super(props);

		const elementButton = (value, name) => (
			<TouchableOpacity
				style={styles.text}
				onPress={() => this._alertColumn(value)}>
				<Text>{name}</Text>
			</TouchableOpacity>
		);

		this.state = {
			tableHead: [
				elementButton(0, "Name"),
				elementButton(1, "Mapped"),
				elementButton(2, "Extracted"),
			],
			tableData: [
				["Kondwerani Kamsesa", "6", "6"],
				["Wali Panjwani", "3", "5"],
				["John  Maida", "9", "3"],
				["Rodney Chabwera", "2", "98"],
			],
		};
	}

	_alertIndex(index) {
		Alert.alert(`This is row ${index + 1}`);
	}

	_alertColumn(index) {
		function Comparator(a, b) {
			if (a[index] < b[index]) return -1;
			if (a[index] > b[index]) return 1;
			return 0;
		}

		let myArray = [...this.state.tableData];

		myArray = myArray.sort(Comparator);
		this.setState({ tableData: myArray });
	}

	render() {
		const state = this.state;
		const element = (data, index) => (
			<TouchableOpacity
				style={styles.text}
				onPress={() => this.props.navigation.navigate("ClerkDetail")}>
				<Text link>{data}</Text>
			</TouchableOpacity>
		);

		return (
			<View style={styles.container}>
				<Text h4 style={{ marginBottom: 10 }}>
					Clerks
				</Text>
				<View
					style={{
						backgroundColor: "#22EFF2",
						opacity: 0.9,
						borderRadius: 10,
						margin: 3,
						marginBottom: 20,
						padding: 5,
						elevation: 10,
					}}>
					<Text style={{ margin: 4 }} size={13}>
						· Mapped and Extracted values are weekly averages.
					</Text>
					<Text style={{ margin: 4 }} size={13}>
						· Tap on the column header to sort.
					</Text>
					<Text style={{ margin: 4 }} size={13}>
						· Tap on the Clerks name to view details.
					</Text>
				</View>
				<Table
					style={{
						marginTop: 20,
						elevation: 2,
						borderRadius: 3,
					}}
					borderStyle={{
						borderWidth: 2,
						borderColor: "#c8e1ff",
					}}>
					<Row
						data={state.tableHead}
						style={styles.head}
						textStyle={styles.text}
					/>
					{state.tableData.map((rowData, index) => (
						<TableWrapper key={index} style={styles.row}>
							{rowData.map((cellData, cellIndex) => (
								<Cell
									key={cellIndex}
									data={cellIndex === 0 ? element(cellData, index) : cellData}
									textStyle={styles.text}
								/>
							))}
						</TableWrapper>
					))}
				</Table>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
	head: { height: 40, backgroundColor: "#f1f8ff" },
	text: { margin: 6 },
	row: { flexDirection: "row" },
});
