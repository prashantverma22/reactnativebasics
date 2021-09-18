import React from 'react';
import { View, Text } from 'react-native';

const DeepLinking = ({ route }) => {

    const { itemId } = route.params;

    return (
        <View>
            <Text>Deep Linking</Text>
            <Text>{itemId}</Text>
        </View>
    );
}

export default DeepLinking;