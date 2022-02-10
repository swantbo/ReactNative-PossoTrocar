import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import LogoBranco from "../../assets/imagens/Logo-branco.png";

export default function Redes() {
  return (
    <View style={style.container}>
      <Image source={LogoBranco} style={style.image} />
      <View style={style.containerIcons}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.facebook.com/posso.trocar");
          }}
        >
          <FontAwesome
            style={style.icons}
            name="facebook"
            size={22}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.instagram.com/posso.trocar");
          }}
        >
          <AntDesign
            style={style.icons}
            name="instagram"
            size={22}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL("http://api.whatsapp.com/send?phone=5548991203535");
          }}
        >
          <FontAwesome5
            style={style.icons}
            name="whatsapp"
            size={22}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderTopColor: "white",
    borderTopWidth: 1,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    alignItems: "center",
    backgroundColor: "#16163F",
    padding: 10,
  },
  image: {
    width: 250,
    resizeMode: "contain",
  },
  icons: {
    margin: 15,
  },
  containerIcons: {
    flexDirection: "row",
  },
});
