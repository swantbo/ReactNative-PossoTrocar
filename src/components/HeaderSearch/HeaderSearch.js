import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function HeaderSearch(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerReferencia}>
        <FontAwesome5 name="hand-holding-medical" size={14} color="#F23838" />
        <Text style={{ color: "white", fontSize: 18, paddingLeft: 5 }}>
          Referência: {props.referencia}
        </Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.containerTexto}>
          <View style={styles.containerTexto2}>
            <FontAwesome5 name="flask" size={14} color="#F23838" />
            <Text style={styles.texto}>Princípio Ativo</Text>
          </View>
          <Text>{props.ativo}</Text>
        </View>
        <View style={styles.containerTexto}>
          <View style={styles.containerTexto2}>
            <FontAwesome5 name="redo" size={14} color="#F23838" />
            <Text style={styles.texto}>Intercambiável</Text>
          </View>
          <Text>{props.intercambiavel}</Text>
        </View>
        <View style={styles.containerTexto}>
          <View style={styles.containerTexto2}>
            <FontAwesome5 name="kaaba" size={14} color="#F23838" />
            <Text style={styles.texto}>Fabricante</Text>
          </View>
          <Text style={{textAlign: "center"}}>{props.fabricante}</Text>
        </View>
        <View style={styles.containerTexto}>
          <View style={styles.containerTexto2}>
            <FontAwesome5 name="pills" size={14} color="#F23838" />
            <Text style={styles.texto}>Apresentação</Text>
          </View>
          <Text style={{textAlign: "center"}}>{props.apresentacao}</Text>
        </View>
        <View style={styles.containerTexto}>
          <View style={styles.containerTexto2}>
            <FontAwesome5 name="equals" size={14} color="#F23838" />
            <Text style={styles.texto}>Concentração</Text>
          </View>
          <Text>{props.concentracao}</Text>
        </View>
        <View style={styles.containerTexto}>
          <View style={styles.containerTexto2}>
            <FontAwesome5 name="calendar-alt" size={14} color="#F23838" />
            <Text style={styles.texto}>Data Inclusão</Text>
          </View>
          <Text>{props.data}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  container2: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerReferencia: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    backgroundColor: "#16163F",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTexto: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "50%",
    height: 80,
    borderBottomColor: "#F4F4F4",
    borderBottomWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerTexto2: {
    flexDirection: "row"
  },
  texto: { color: "#4D5259", paddingLeft: 5 },
});
