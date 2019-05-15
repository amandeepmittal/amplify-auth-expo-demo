import React from "react"
import { StyleSheet, Text, View } from "react-native"

// --- This is the part to add

import Amplify from "aws-amplify"
import config from "./aws-exports"

Amplify.configure(config)

// ---

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>React Native + Amplify = 💛</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})
