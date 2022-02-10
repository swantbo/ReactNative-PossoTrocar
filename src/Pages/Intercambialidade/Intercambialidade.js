import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Intercambialidade() {
  return (
    <ScrollView>
      <Text style={{ textAlign: "center", fontSize: 20, padding: 10 }}>
        Intercambialidade de remédios equivalentes?
      </Text>
      <Text style={{ textAlign: "center", padding: 5 }}>
        Após a implantação da política dos medicamentos genéricos, a ANVISA
        estabeleceu regulamentos sanitários importantes. Os regulamentos eles
        atingiram não somente os medicamentos Genéricos, mas também os
        medicamentos similares. Com a finalidade de aprimorar e garantir a
        qualidade, eficácia e segurança dos medicamentos, abrangendo não somente
        os medicamentos novos, mas sim, todos os medicamentos que tiverem
        cadastro registros na ANVISA.
      </Text>

      <Text style={{ textAlign: "center", padding: 5 }}>
        Após a publicação da RDC 134/2003, ficou estabelecidos critérios no qual
        os medicamentos com registros existentes anterior a data de publicação,
        tiveram que adequar os medicamentos similares para sua comercialização
        em território brasileiro. A RDC mencionada ela obriga os detentores com
        registros de medicamentos a apresentarem os testes, estudos e
        comparativos de compatibilidade com os medicamentos de referência. Os
        testes/estudos comparativos com o medicamento de referência são:
        equivalência farmacêutica, bioequivalência/biodisponibilidade relativa
        (BD/BE) e perfil de dissolução, se aplicável ao fármaco e forma
        farmacêutica. A finalidade e objetivo principal das determinações é
        garantir a equivalência terapêutica entre o medicamento similar e o
        medicamento de referência.
      </Text>

      <Text style={{ textAlign: "center", padding: 5 }}>
        A RDC 58/2014 determinou a disponibilização da relação dos medicamentos
        similares, onde a população, profissional de saúde ou interessado pode
        realizar a consulta. A lista é atualizada de acordo com a atualização da
        Anvisa de acordo com os novos registros de medicamentos similares e suas
        respectivas renovações baseado em analises de estudos e comparativo.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
