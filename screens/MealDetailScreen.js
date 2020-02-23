import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationDate => {
    const mealId = navigationDate.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id == mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='VAV' iconName='ios-star' onPress={() => {
                console.warn("fav fav fav");

            }} />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;