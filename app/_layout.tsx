import { Entypo, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "../theme";

export default function Layout() {
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
