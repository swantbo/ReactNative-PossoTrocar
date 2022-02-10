import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Api from "../../Api/lista-de-medicamentos-similares-intercambiaveis.json";

export default function Search() {
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);

  const Searching = () => {
    if (search !== "") {
      setSearching(true);
      const filterData = Api.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setResultadoPesquisa(filterData);
    } else {
      setSearching(false);
      console.log("deu ruim");
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.texto}>{!searching ?"Faça uma busca" : "Resultado da Busca"}</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={style.input}
          placeholder="Informe o nome do medicamento"
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={style.lupa}
          activeOpacity={0.5}
          onPress={Searching}
        >
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {searching ? (
          <View>
            {resultadoPesquisa == undefined ||
            resultadoPesquisa.length === 0 ? (
              <View style={{ backgroundColor: "white", padding: 5 }}>
                <Text style={{ color: "#4D5259" }}>
                  Parece que não conseguimos encontrar o que você está
                  procurando.
                </Text>
              </View>
            ) : (
              resultadoPesquisa.map((v, index) => (
                <HeaderSearch
                  key={index}
                  referencia={v.Referencia}
                  ativo={v.PrincipioAtivo}
                  intercambiavel={v.NomeComercial}
                  fabricante={v.Fabricante}
                  apresentacao={v.FormaFarmaceutica}
                  concentracao={v.Concentração}
                  data={v.Data}
                />
              ))
            )}
          </View>
        ) : (
          <View style={style.containerTexto}>
            <Text style={style.textoAnvisa}>
              Lista de medicamentos similares e seus respectivos medicamentos de
              referência, conforme RDC 58/2014.
            </Text>
            <Text style={style.textoAnvisa}>
              Atualizada até o diário oficial da união De 11/05/2020.
            </Text>
            <Text style={style.textoAnvisa}>
              Data da versão do arquivo da lista de medicamentos: 21/01/2022.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(22, 22, 63, 0.9)",
  },
  texto: {
    fontSize: 25,
    fontWeight: "900",
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 8,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  lupa: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#2ABEC6",
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  containerTexto: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  textoAnvisa: {
    paddingTop: 12,
    paddingBottom: 15,
    color: "white",
    textAlign: "center",
  },
});
