import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function OnboardingScreen() {
	const router = useRouter();
	const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);

	const handleFinishOnboarding = () => {
		toggleHadOnboarded();
		router.replace("/");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Onboarding</Text>
			<PlantlyButton
				title="Finish Onboarding"
				onPress={handleFinishOnboarding}
			/>
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
	text: {
		fontSize: 24,
	},
});
