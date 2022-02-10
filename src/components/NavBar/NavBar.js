import {
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import React from "react";
import Logo from "../../assets/imagens/Logo.png";
import Pharmacist from "../../assets/imagens/pharmacist.png";

export default function NavBar() {
  return (
    <SafeAreaView style={style.container} keyboardShouldPersistTaps="never">
      <Image source={Logo} style={style.imagem} />
      <TouchableOpacity
        style={style.imageContainer}
        onPress={() => {
          Linking.openURL("http://api.whatsapp.com/send?phone=5548991203535");
        }}
      >
        <Image source={Pharmacist} style={style.image} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
  imagem: {
    width: 150,
    height: 90,
    resizeMode: "contain",
  },
  imageContainer: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#F23838",
    width: 55,
    height: 55,
  },
  image: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    width: 53,
    height: 53,
  },
});
