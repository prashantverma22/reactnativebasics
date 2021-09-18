import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ApiData = () => {

    const dataFromApi = useSelector((state) => state.apiData);
    console.log(dataFromApi);

    const navigation = useNavigation();

    return (
        <View style={styles.mainView}>
            <Text style={styles.heading}>List of Data in API</Text>
            <FlatList data={dataFromApi} renderItem={
                ({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ApiDetail', {
                            id: item.id
                        })
                    }}>
                        <View style={styles.apiView}>
                            <Text style={styles.txt}>{item.id} </Text>
                            <Text style={styles.txt}>{item.title} </Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    apiView: {
        flexDirection: "row",
        padding: 16,
    },
    txt: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    },
    heading: {
        fontSize: 20,
        color: "red",
        fontWeight: "bold"
    }
})

export default ApiData;