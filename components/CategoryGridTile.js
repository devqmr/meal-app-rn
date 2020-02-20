import React from 'react';
import { View, Text, StyleSheet, Button, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
    let TouchableOs = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableOs = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem} >
            <TouchableOs
                style={{ flex: 1 }}
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableOs>
        </View>)
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: "right"
    }

});

export default CategoryGridTile;