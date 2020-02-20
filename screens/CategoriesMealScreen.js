import React from 'react';
import { View, StyleSheet, Text, Button, Platform, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';


const CategoriesMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);
    // const categoryMeals = MEALS.filter(meal => meal.categoryIds == catId)
    const categoryMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    const renderMealItem = meal => {
        return (<MealItem meal={meal.item} onPress={() => {
            props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                    mealId: meal.item.id
                }
            });
        }} />);
    }


    return (
        <View style={styles.screen}>
            <FlatList style={{ flex: 1 }} data={categoryMeals} keyExtractor={meal => meal.id} renderItem={renderMealItem}></FlatList>
        </View>
    );
};


CategoriesMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);
    return {
        headerTitle: selectedCategory.title,
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesMealScreen;