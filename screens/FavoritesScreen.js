import rect from React;
import { View, StyleSheet, Text, Button } from 'react-native';

const FavoritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Favorites Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;