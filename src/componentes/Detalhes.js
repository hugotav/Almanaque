import React from "react";
import { View, StyleSheet } from 'react-native'; 

import Texto from './../componentes/Texto';

export default function Detalhes({ descricao, nome}) {
    return <>
        <View style={estilos.caixa}> 
            <Texto style ={estilos.descricao}>{ descricao }</Texto>
            <Texto style ={estilos.nome}>{ nome }</Texto>
            
        </View>
    </>

}

const estilos = StyleSheet.create({  
    caixa: {
        //paddingVertical: 16,
        //marginHorizontal: 16,
        paddingBottom: 1,
        alignItems: "center",
        
    },
    nome: {
        color: "#464646",
        fontSize: 30,
        lineHeight: 42,
        fontWeight: "bold",
        marginTop: 50,
        
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 18,
        lineHeight: 26, 
        textAlign: "justify",
    }, 

})