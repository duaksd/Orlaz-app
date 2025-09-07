import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
import ExploreSection from "../components/ExploreSection";
import AttractionsSection from "../components/AttractionsSection";
import HowToGetSection from "../components/HowToGetSection";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <ExploreSection />
        <AttractionsSection />
        <HowToGetSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF" },
  scrollContent: { paddingBottom: 90 },
});
