import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <ImageBackground
                    source={{ uri: props.meal.imageUrl }}
                    style={styles.bgImage} >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {props.meal.title}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                <Text>
                    {props.meal.duration}m
                </Text>
                <Text>
                    {props.meal.complexity}
                </Text>
                <Text>
                    {props.meal.affordability}
                </Text>
            </View>
        </View>)
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    }
});

export default MealItem;