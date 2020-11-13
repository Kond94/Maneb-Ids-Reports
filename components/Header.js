import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
	TouchableOpacity,
	StyleSheet,
	Platform,
	Dimensions,
} from "react-native";
import { Button, Block, NavBar, Input, Text, theme } from "galio-framework";

import Icon from "./Icon";
import materialTheme from "../constants/Theme";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
	Platform.OS === "ios" &&
	(height === 812 || width === 812 || height === 896 || width === 896);

const ChatButton = ({ isWhite, style, navigation }) => (
	<TouchableOpacity
		style={[styles.button, style]}
		onPress={() => navigation.navigate("Clerks")}>
		<Icon
			family='GalioExtra'
			size={16}
			name='chat-33'
			color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
		/>
		<Block middle style={styles.notify} />
	</TouchableOpacity>
);

class Header extends React.Component {
	handleLeftPress = () => {
		const { back, navigation } = this.props;
		return back ? navigation.goBack() : navigation.openDrawer();
	};

	renderRight = () => {
		const { white, title, navigation } = this.props;

		if (title === "Title") {
			return [
				<ChatButton key='chat-title' navigation={navigation} isWhite={white} />,
			];
		}

		switch (title) {
			case "Overview":
				return [
					<ChatButton
						key='chat-home'
						navigation={navigation}
						isWhite={white}
					/>,
				];

			case "Clerks":
				return [];

			case "Settings":
				return [];
			default:
				break;
		}
	};

	renderTabs = () => {
		const { navigation, tabTitleLeft, tabTitleRight } = this.props;

		return (
			<Block row style={styles.tabs}>
				<Button
					shadowless
					style={[styles.tab, styles.divider]}
					onPress={() => navigation.navigate("Clerks")}>
					<Block row middle>
						<Icon name='users' family='feather' style={{ paddingRight: 8 }} />
						<Text size={16} style={styles.tabTitle}>
							{tabTitleLeft || "Clerks"}
						</Text>
					</Block>
				</Button>
				<Button
					shadowless
					style={styles.tab}
					onPress={() => navigation.navigate("Clerks")}>
					<Block row middle>
						<Icon
							size={16}
							name='clipboard'
							family='feather'
							style={{ paddingRight: 8 }}
						/>
						<Text size={16} style={styles.tabTitle}>
							{tabTitleRight || "Resouces"}
						</Text>
					</Block>
				</Button>
			</Block>
		);
	};

	renderHeader = () => {
		const { search, tabs } = this.props;
		if (search || tabs) {
			return <Block center>{tabs ? this.renderTabs() : null}</Block>;
		}
		return null;
	};

	render() {
		const { back, title, white, transparent, navigation } = this.props;
		// const { routeName } = navigation.state;
		const noShadow = ["Search", "Clerks", "Deals", "Clerks"].includes(title);
		const headerStyles = [
			!noShadow ? styles.shadow : null,
			transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
		];

		return (
			<Block style={headerStyles}>
				<NavBar
					back={back}
					title={title}
					style={styles.navbar}
					transparent={transparent}
					right={this.renderRight()}
					rightStyle={{ alignItems: "center" }}
					leftStyle={{ flex: 0.4, paddingTop: 2 }}
					leftIconName={back ? "chevron-left" : "navicon"}
					leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
					titleStyle={[
						styles.title,
						{ color: theme.COLORS[white ? "WHITE" : "ICON"] },
					]}
					onLeftPress={this.handleLeftPress}
				/>
				{this.renderHeader()}
			</Block>
		);
	}
}

export default withNavigation(Header);

const styles = StyleSheet.create({
	button: {
		padding: 12,
		position: "relative",
	},
	title: {
		width: "100%",
		fontSize: 16,
		fontWeight: "bold",
	},
	navbar: {
		paddingVertical: 0,
		paddingBottom: theme.SIZES.BASE * 1.5,
		paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
		zIndex: 5,
	},
	shadow: {
		backgroundColor: theme.COLORS.WHITE,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.2,
		elevation: 3,
	},
	notify: {
		backgroundColor: materialTheme.COLORS.LABEL,
		borderRadius: 4,
		height: theme.SIZES.BASE / 2,
		width: theme.SIZES.BASE / 2,
		position: "absolute",
		top: 8,
		right: 8,
	},
	header: {
		backgroundColor: theme.COLORS.WHITE,
	},
	divider: {
		borderRightWidth: 0.3,
		borderRightColor: theme.COLORS.MUTED,
	},
	search: {
		height: 48,
		width: width - 32,
		marginHorizontal: 16,
		borderWidth: 1,
		borderRadius: 3,
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
});
