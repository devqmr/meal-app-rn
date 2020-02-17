import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CategoriesMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Meal Screen</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CategoriesMealScreen;