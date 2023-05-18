import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterByPrice = (criteria) => {
    return results.filter((item) => item.price === criteria);
  };

  return (
    <View style={styles.background}>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterByPrice("$")} title="Cost Effective" />
        <ResultsList results={filterByPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFF",
  },
  error: {
    color: "red",
  },
});

export default SearchScreen;
