import { FlatList, StyleSheet } from "react-native";
import { theme } from "@/theme";
import { usePlantStore } from "@/store/plantsStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";

export default function App() {
	const plants = usePlantStore((state) => state.plants);
	const router = useRouter();

	const handleAddPlant = () => {
		router.navigate("/new");
	};

	return (
		<FlatList
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
			data={plants}
			renderItem={({ item }) => <PlantCard plant={item} />}
			ListEmptyComponent={() => (
				<PlantlyButton title="Add a plant" onPress={handleAddPlant} />
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	contentContainer: {
		paddingHorizontal: 16,
		paddingTop: 16,
	},
});
