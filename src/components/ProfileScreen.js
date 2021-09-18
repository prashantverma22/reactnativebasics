import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { types } from '../store/actions/actionType';

const Profile = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const userInfo = useSelector((state) => state.userData);
    console.log(userInfo);

    return (
        <View style={styles.mainView}>
            <Text style={styles.heading}> Welcome  {userInfo?.name} </Text>
            <Text style={styles.txt}>Your Details are as follows: </Text>
            <Text style={styles.txt}>Email:-- {userInfo?.email} </Text>
            <Text style={styles.txt}>Contact:-- {userInfo?.num}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Edit')}>
                <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
                dispatch({
                    type: types.CHECK_RED,
                    payload: {
                        name: "abc",
                        age: "22"
                    }
                });
            }}>
                <Text>Fetch</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.navigate('ApiData')
            }}>
                <Text>Display</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#E21717"
    },
    txt: {
        fontWeight: "bold",
        fontSize: 18
    },
    btn: {
        borderColor: "#4DD637",
        borderWidth: 4,
        borderRadius: 15,
        width: "20%",
        alignItems: "center",
        marginTop: 10
    }
})

export default Profile;