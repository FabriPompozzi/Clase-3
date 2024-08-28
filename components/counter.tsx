import { useState } from "react";
import {View,  Pressable, Text } from "react-native";

function Contador(){
    const [contador,setContador]=useState(0);
    const incrementar=()=>{
        setContador(contador+1);
    }
    const decrementar=()=>{
        setContador(contador-1);
    }
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Contador: {contador}</Text>
            <Pressable onPress={incrementar}><Text style={{ color: 'green' }}>Incrementar</Text></Pressable>
            <Pressable onPress={decrementar}><Text style={{ color: 'red' }}>Decrementar</Text></Pressable>
        </View>
    );
}
export default Contador;