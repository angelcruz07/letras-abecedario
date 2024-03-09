import React from "react";
import { StyleSheet, View, Text} from "react-native";
import theme from "../theme";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        backgroundColor: theme.colors.colorPrimary,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
})


export default function AppBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>AbcApp</Text>
            <Text style={{color:'white'}}>Da un click en la letra</Text>
        </View>
    )
}
