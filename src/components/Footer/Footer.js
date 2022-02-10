import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Responsável Técnico - Antônio Paulo - CRF PB - 5901
      </Text>
      <Text style={styles.texto}>Ⓒ 2022 - Todos Os Direitos Reservados</Text>
      <Text style={[styles.texto, styles.dev]}>
        Aplicativo desenvolvido por
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: 150,
          justifyContent: "space-around",
        }}
        onPress={() => {
          Linking.openURL("http://api.whatsapp.com/send?phone=5583987964994");
        }}
      >
        <FontAwesome5 name="whatsapp" size={18} color="white" />
        <Text style={{ color: "white" }}>Jhonathan Pinheiro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(22, 22, 63, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  texto: {
    color: "white",
    paddingTop: 10,
  },
  dev: {
    paddingTop: 25,
  },
});
