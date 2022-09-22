import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Texto from './Texto';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Item({item: { nome, imagem, diretor, ano, sinopse }}) {

    return <>
        <View style={estilos.item}>
            <Image source={imagem} style={estilos.imagem}/>    
            <Texto style={estilos.nome}>{ nome }</Texto>
            <Texto style={estilos.texto2}>{ diretor }</Texto>
            <Texto style={estilos.texto2}>{ ano }</Texto>
            <Texto style={estilos.texto2}>{ sinopse }</Texto>
        </View>
    </>

    

}

const estilos = StyleSheet.create({
    
    item: {
        //flexDirection: "row",
        borderBottomWidth: 1, //linha que separa a lista
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        //marginHorizontal: 16,
        alignItems: "center",
    },

    imagem: {
        width: "100%",
        height: 378 / 568 * largura,
        resizeMode: "contain",
        
    },

    nome: {
        fontSize: 20,
        lineHeight: 26,
        paddingVertical: 16,
        marginLeft: 11,
        color: "#464646",
        fontWeight: "bold",
    },

    texto2: {
        fontSize: 18,
        lineHeight: 26,
        paddingVertical: 6,
        marginLeft: 11,
        color: "#464646",
        textAlign: "justify",
    },

});