import { useEffect } from "react";
import { FlatList, Text, View, Image } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  const id = navigation.getParam("id");

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ height: 100, width: 100 }} />
        )}
      />
    </View>
  );
}
