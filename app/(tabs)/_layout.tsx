import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { Pressable, StyleSheet } from "react-native";

export default function Layout() {
	const hasFinishedOnboarding = useUserStore(
		(state) => state.hasFinishedOnboarding,
	);

	if (!hasFinishedOnboarding) {
		return <Redirect href={"/onboarding"} />;
	}
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.green }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<Entypo name="leaf" size={size} color={color} />
					),
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
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Feather name="user" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	plusButton: {
		marginRight: 12,
	},
});
