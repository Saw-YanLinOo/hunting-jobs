import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { images, icons, COLORS, SIZES } from "../constants";
import { HeaderBtn, NearbyJob, PopularJob, Welcome } from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              onPressed={() => {}}
            />
          ),
          headerRight: () => (
            <HeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              onPressed={() => {}}
            />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <PopularJob />
          <NearbyJob />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
