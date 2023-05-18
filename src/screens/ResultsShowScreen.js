import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import yelp from "../apis/yelp";

export default ({ route }) => {
  const [result, setResult] = useState(null);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await yelp(`${route.params.id}`);
        const { data } = response;
        const { photos = [], name = "" } = data || {};

        setResult(data);
        setName(name);
        setImages(photos);
      } catch (err) {
        console.log("error fetching details", err);
      }
    })();
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={images}
        renderItem={({ item }) => {
          return <Image style={styles.images} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  images: {
    borderRadius: 4,
    height: 200,
    marginBottom: 5,
    // width: 250,
  },
});
