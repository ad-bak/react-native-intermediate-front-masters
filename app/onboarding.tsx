import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/PlantlyImage";
import { useFonts } from "expo-font";

export default function OnboardingScreen() {
	const router = useRouter();
	const toggleHadOnboarded = useUserStore((state) => state.toggleHadOnboarded);
	const [fontsLoaded] = useFonts({
		Caveat_400Regular: require("@expo-google-fonts/caveat/Caveat_400Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	const handleFinishOnboarding = () => {
		toggleHadOnboarded();
		router.replace("/");
	};

	return (
		<LinearGradient
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			colors={[
				theme.colors.green,
				theme.colors.appleGreen,
				theme.colors.limeGreen,
			]}
			style={styles.container}
		>
			<StatusBar style="light" />
			<View>
				<Text style={styles.heading}>Plantly</Text>
				<Text style={styles.tagline}>
					Keep Your Plants Healthy and Hydrated
				</Text>
			</View>
			<PlantlyImage />
			<PlantlyButton title="Let Me In!" onPress={handleFinishOnboarding} />
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		backgroundColor: theme.colors.white,
		paddingHorizontal: 8,
	},
	heading: {
		fontSize: 42,
		color: theme.colors.white,
		fontWeight: "bold",
		marginBottom: 12,
		textAlign: "center",
	},
	tagline: {
		fontSize: 34,
		color: theme.colors.white,
		textAlign: "center",
		fontFamily: "Caveat_400Regular",
	},
});
