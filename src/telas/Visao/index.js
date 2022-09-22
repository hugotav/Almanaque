import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from '../../componentes/Topo';
import Detalhes from '../../componentes/Detalhes';
import Item from '../../componentes/Item';


export default function Visor ({ topo, detalhes, itens }){

    return <>

        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            style = {estilos.lista}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style ={estilos.catalogo}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </> 
            }}
        />
        </>
            
}

const estilos = StyleSheet.create({

    titulo: {
        color: "#464646",
        fontWeight: "bold",
        //marginTop: 10, 
        //marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    
    lista: {
        paddingHorizontal: 16,
    },

});

