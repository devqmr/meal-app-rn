import React from 'react';
import { View, StyleSheet, Text, Button, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'


const CategoriesMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

    return (
        <View style={styles.screen}>
            <Text>The Categories Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate('MealDetail' + { catId });
            }} />
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