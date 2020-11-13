import React from "react";
import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Image,
	View,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";

import { Icon, Drawer as DrawerCustomItem } from "../components/";
import { Images, materialTheme } from "../constants/";

function CustomDrawerContent({
	drawerPosition,
	navigation,
	focused,
	state,
	...rest
}) {
	const insets = useSafeArea();
	const screens = ["Overview", "Settings", "Components"];
	return (
		<Block
			style={styles.container}
			forceInset={{ top: "always", horizontal: "never" }}>
			<ImageBackground
				style={{ width: "100%" }}
				source={require("../assets/images/bg3.jpg")}>
				<Block style={{ margin: 30, marginBottom: 10, marginLeft: 10 }}>
					<Block style={styles.profile}>
						<Image
							source={require("../assets/images/bg2.jpg")}
							style={styles.avatar}
						/>
						<Text h5 color={"white"}>
							Kondwerani Kamsesa
						</Text>
					</Block>

					<Block row>
						<Text size={16} muted style={styles.seller}>
							Manager
						</Text>
					</Block>
				</Block>
			</ImageBackground>
			<Block flex style={{ paddingLeft: 7, paddingRight: 14, marginTop: 10 }}>
				<ScrollView
					contentContainerStyle={[
						{
							paddingTop: insets.top * 0.4,
							paddingLeft: drawerPosition === "left" ? insets.left : 0,
							paddingRight: drawerPosition === "right" ? insets.right : 0,
						},
					]}
					showsVerticalScrollIndicator={false}>
					{screens.map((item, index) => {
						return (
							<DrawerCustomItem
								title={item}
								key={index}
								navigation={navigation}
								focused={state.index === index ? true : false}
							/>
						);
					})}
				</ScrollView>
			</Block>
		</Block>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: "#4B1958",
		paddingHorizontal: 28,
		paddingBottom: theme.SIZES.BASE,
		paddingTop: theme.SIZES.BASE * 2,
		justifyContent: "center",
	},
	footer: {
		paddingHorizontal: 28,
		justifyContent: "flex-end",
	},
	profile: {
		marginBottom: theme.SIZES.BASE / 2,
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 40,
		marginBottom: theme.SIZES.BASE,
	},
	pro: {
		backgroundColor: materialTheme.COLORS.LABEL,
		paddingHorizontal: 6,
		marginRight: 8,
		borderRadius: 4,
		height: 19,
		width: 38,
	},
	seller: {
		marginRight: 16,
	},
});

export default CustomDrawerContent;
