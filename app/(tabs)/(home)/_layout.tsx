import { theme } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Home",
					headerRight: () => (
						<Link href="/new" asChild>
							<Pressable style={styles.plusButton} hitSlop={10}>
								<AntDesign
									name="pluscircleo"
									size={24}
									color={theme.colors.green}
								/>
							</Pressable>
						</Link>
					),
				}}
			/>
		</Stack>
	);
}

const styles = StyleSheet.create({
	plusButton: {
		marginRight: 12,
	},
});
