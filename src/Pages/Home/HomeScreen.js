import React from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import Redes from "../../components/Redes/Redes";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import medBackgroud from "../../assets/imagens/background-medicamento.png";
import Footer from "../../components/Footer/Footer";

export default function HomeScreen() {
  return (
    <SafeAreaView keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor="#16163F" />
      <ScrollView>
        <ImageBackground source={medBackgroud} style={style.background}>
          <NavBar />
          <Search />
          <Redes />
          <Footer />
        </ImageBackground>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  background: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  }
});