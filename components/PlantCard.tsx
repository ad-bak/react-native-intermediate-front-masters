import { StyleSheet, View, Text } from "react-native";
import { theme } from "@/theme";
import { PlantlyImage } from "./PlantlyImage";
import { PlantType } from "@/store/plantsStore";

export function PlantCard({ plant }: { plant: PlantType }) {
	return (
		<View style={styles.plantCard}>
			<PlantlyImage size={100} />
			<View style={styles.details}>
				<Text numberOfLines={1} style={styles.plantName}>
					{plant.name}
				</Text>
				<Text style={styles.subtitle}>
					Water every {plant.wateringFrequencyDays} days
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	plantCard: {
		flexDirection: "row",
		shadowColor: theme.colors.black,
		backgroundColor: theme.colors.white,
		borderRadius: 6,
		padding: 12,
		marginBottom: 12,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	details: {
		padding: 14,
		justifyContent: "center",
	},
	plantName: {
		fontSize: 18,
		marginBottom: 4,
	},
	subtitle: {
		color: theme.colors.grey,
	},
});
