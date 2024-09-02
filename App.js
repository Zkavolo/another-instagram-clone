import * as SplashScreen from "expo-splash-screen";
import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { Text, FlatList, RefreshControl } from "react-native";
import { SafeAreaView , SafeAreaProvider} from "react-native-safe-area-context";

import { createTamagui, TamaguiProvider } from "tamagui";
import { useState } from "react";
// import { RefreshControl } from "react-native-web";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Stories from "./src/components/Story/Stories";
import Feed from "./src/components/Feeds/Feed";
// import Feeds from "./src/components/Feeds/Feeds";
// import { Header } from "react-native/Libraries/NewAppScreen";

const tamaguiConfig = createTamagui(config);

SplashScreen.preventAutoHideAsync();

const App = () => {
  // @ts-ignore
  const [fontsLoaded, fontsError] = useFonts({
    // @ts-ignore
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    // @ts-ignore
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    // @ts-ignore
    "StyleScript-Regular": require("./assets/style/fonts/ttf/StyleScript-Regular.ttf"),
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onLayoutRootView = async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const ContentComponent = () => {
    return (
    <>
    {/* <Text style={{ fontFamily: "StyleScript-Regular"}}>Hello World</Text> */}
    <Header/>
    <Stories/>
    <Feed/>
    </>
    )
  }

  const onRefresh = () => {
    console.log("App: onRefresh")
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <StatusBar style="light" backgroundColor="black" />
        <FlatList data={[{}]} 
        renderItem={ContentComponent} 
        contentContainerStyle={{
          justifyContent: "flex-start",
          // flex: 1,
          backgroundColor: "white",
        }}
        onLayout={onLayoutRootView}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>
        }
        />
      </TamaguiProvider>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
