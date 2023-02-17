import * as React from 'react';
import {Text, View, StyleSheet,Image, ScrollView} from 'react-native';

export default function App() {
  return(
    
<ScrollView>
    <View style={style.container}>
    <Text style={style.titulo}>ANIMAIS QUE QUERO TER</Text>
    <Text style={style.subTitulo}>{'\n'} Pitbull </Text>
    <Image style={style.img} source={require("./assets/pitbull.png")}/>

    <Text style={style.subTitulo}> Gato pelado </Text>
    <Image style={style.img} source={require("./assets/gatop.png")}/>

    <Text style={style.subTitulo}> Hamster </Text>
    <Image style={style.img} source={require("./assets/hamster.png")}/>

    <Text style={style.subTitulo}> Porquinho da Índia</Text>
    <Image style={style.img} source={require("./assets/porquinho.png")}/>

    <Text style={style.subTitulo}>Salsicha</Text>
    <Image style={style.img} source={require("./assets/salsicha.png")}/>

    <Text style={style.subTitulo}> Mini cabra</Text>
    <Image style={style.img} source={require("./assets/mini.png")}/>
    </View>
    
</ScrollView>

  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B5E8F5",
  },

  titulo:{
    marginTop:40,
    marginBotton:5,
    fontSize:28,
    color:"#1B0EF5",
    fontWeight: "bold"
  },

  img:{
    width:250,
    height:200,
    borderRadius:20,
    marginBotton:40

  },
  subTitulo:{
    fontSize:20,
    marginTop:20,
    color: "#A80C93"
  }
})
