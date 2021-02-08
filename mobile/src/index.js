import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        <View styles={styles.container} >
            <Text style={styles.title}> Hello GoStack</Text> 
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },

    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    },
});