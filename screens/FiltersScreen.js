import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors'
import { setFilters } from '../store/actions/meals';
import DefaultText from '../components/DefaultText';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange} />
    </View>
  );
};


const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(true);
  const [isLactoseFree, setIsLactoseFree] = useState(true);
  const [isVegan, setIsVegan] = useState(true);
  const [isVegetarian, setIsVegetarian] = useState(true);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegan' state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
      <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />

    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingHorizontal:40,
    paddingVertical:15
  }
});

export default FiltersScreen;
