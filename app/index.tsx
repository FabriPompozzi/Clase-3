import { Text, View } from "react-native";
import Contador from '@/components/counter'; // Import the missing component

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Contador/>
    </View>
  );
}
