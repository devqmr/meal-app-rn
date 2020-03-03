import React, { useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = useSelector(state => state.meals.meals.find(meal => meal.id === mealId))
  const isFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);


  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isFav });
  }, [isFav])

  return (
    <ScrollView contentContainerStyle={styles.screen}>

      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.Image} />
      <View style={styles.mealRow}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.Header}>Ingredients</Text>
      <Text style={styles.Header}>{selectedMeal.HeaderButton}</Text>

      {
        selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))
      }
      <Text style={styles.Header}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const isFavorite = navigationData.navigation.getParam('isFav');
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={(isFavorite) ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1
  },
  Image: {
    width: '100%',
    height: 180
  },
  mealRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  Header: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width: '90%',

  }
});

export default MealDetailScreen;
