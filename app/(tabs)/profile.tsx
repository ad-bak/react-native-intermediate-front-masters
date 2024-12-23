import { View, StyleSheet } from "react-native";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function ProfileScreen() {
	const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

	return (
		<View style={styles.container}>
			<PlantlyButton title="Back to onboarding" onPress={toggleHadOnboarded} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.colors.white,
	},
});
