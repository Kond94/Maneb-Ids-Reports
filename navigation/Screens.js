import React from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from "../screens/Components";
import HomeScreen from "../screens/Overview";
import OnboardingScreen from "../screens/Onboarding";
import ProScreen from "../screens/Clerks";
import SettingsScreen from "../screens/Settings";

import CustomDrawerContent from "./Menu";
import { Icon, Header } from "../components";
import { Images, materialTheme } from "../constants/";
import ClerkDetail from "../screens/ClerkDetail";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function SettingsStack(props) {
	return (
		<Stack.Navigator
			initialRouteName='Settings'
			mode='card'
			headerMode='screen'>
			<Stack.Screen
				name='Settings'
				component={SettingsScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header title='Settings' scene={scene} navigation={navigation} />
					),
				}}
			/>
		</Stack.Navigator>
	);
}

function ComponentsStack(props) {
	return (
		<Stack.Navigator mode='card' headerMode='screen'>
			<Stack.Screen
				name='Components'
				component={ComponentsScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header title='Components' scene={scene} navigation={navigation} />
					),
				}}
			/>
		</Stack.Navigator>
	);
}

function HomeStack(props) {
	return (
		<Stack.Navigator mode='card' headerMode='screen'>
			<Stack.Screen
				name='Overview'
				component={HomeScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							search
							tabs
							title='Overview'
							navigation={navigation}
							scene={scene}
						/>
					),
				}}
			/>
			<Stack.Screen
				name='Clerks'
				component={ProScreen}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							back
							white
							transparent
							title=''
							navigation={navigation}
							scene={scene}
						/>
					),
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name='ClerkDetail'
				component={ClerkDetail}
				options={{
					header: ({ navigation, scene }) => (
						<Header
							back
							white
							transparent
							title=''
							navigation={navigation}
							scene={scene}
						/>
					),
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
}

function AppStack(props) {
	return (
		<Drawer.Navigator
			style={{ flex: 1 }}
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			drawerStyle={{
				backgroundColor: "white",
				width: width * 0.8,
			}}
			drawerContentOptions={{
				activeTintColor: "white",
				inactiveTintColor: "#000",
				activeBackgroundColor: materialTheme.COLORS.ACTIVE,
				inactiveBackgroundColor: "transparent",
				itemStyle: {
					width: width * 0.74,
					paddingHorizontal: 12,
					// paddingVertical: 4,
					justifyContent: "center",
					alignContent: "center",
					// alignItems: 'center',
					overflow: "hidden",
				},
				labelStyle: {
					fontSize: 18,
					fontWeight: "normal",
				},
			}}
			initialRouteName='Overview'>
			<Drawer.Screen
				name='Overview'
				component={HomeStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name='shop'
							family='GalioExtra'
							color={focused ? "white" : materialTheme.COLORS.MUTED}
						/>
					),
				}}
			/>

			<Drawer.Screen
				name='Settings'
				component={SettingsStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name='gears'
							family='font-awesome'
							color={focused ? "white" : materialTheme.COLORS.MUTED}
							style={{ marginRight: -3 }}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='Components'
				component={ComponentsStack}
				options={{
					drawerIcon: ({ focused }) => (
						<Icon
							size={16}
							name='md-switch'
							family='ionicon'
							color={focused ? "white" : materialTheme.COLORS.MUTED}
							style={{ marginRight: 2, marginLeft: 2 }}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

export default function OnboardingStack(props) {
	return (
		<Stack.Navigator mode='card' headerMode='none'>
			<Stack.Screen
				name='Onboarding'
				component={OnboardingScreen}
				option={{
					headerTransparent: true,
				}}
			/>
			<Stack.Screen name='App' component={AppStack} />
		</Stack.Navigator>
	);
}
