import { Entypo, Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export default function Layout() {
	const hasFinishedOnboarding = useUserStore(
		(state) => state.hasFinishedOnboarding
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
