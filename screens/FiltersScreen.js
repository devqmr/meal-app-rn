import rect from React;
import { View, StyleSheet, Text, Button } from 'react-native';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Filter Screen</Text>
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

export default FiltersScreen;