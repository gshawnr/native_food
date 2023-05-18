import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 4,
    height: 200,
    marginBottom: 5,
    width: 250,
  },
  name: {
    fontWeight: "bold",
  },
});
