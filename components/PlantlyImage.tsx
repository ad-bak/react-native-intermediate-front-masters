import { Image, useWindowDimensions } from "react-native";

type Props = {
	imageUri?: string;
	size?: number;
};

export function PlantlyImage({ imageUri, size }: Props) {
	const { width } = useWindowDimensions();

	const imageSize = size || Math.min(width / 1.5, 400);

	return (
		<Image
			source={imageUri ? { uri: imageUri } : require("@/assets/plantly.png")}
			style={{ width: imageSize, height: imageSize }}
		/>
	);
}
