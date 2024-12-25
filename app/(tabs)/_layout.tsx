import { Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { Entypo, Feather } from "@expo/vector-icons";

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
				name="(home)"
				options={{
					headerShown: false,
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
