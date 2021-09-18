import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { storeData } from '../store/actions/action';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {

    const navigation = useNavigation();

    const userInfo = useSelector((state) => state.userData);

    const [editName, setEditName] = useState(userInfo.name);
    const [editEmail, setEditEmail] = useState(userInfo.email);
    const [editNumber, setEditNumber] = useState(userInfo.num);

    // console.log(userInfo);

    const dispatch = useDispatch();

    const validate = () => {
        let updatedInfo = {
            name: editName,
            email: editEmail,
            num: editNumber
        }
        dispatch(storeData(updatedInfo));
        Alert.alert("Edit Successful");
    }

    return (
        <View style={styles.mainView}>
            <Text style={styles.mainHeading}>Edit Profile</Text>
            <TextInput value={editEmail} style={styles.fields} onChangeText={email => setEditEmail(email)} />
            <TextInput value={editName} style={styles.fields} onChangeText={name => setEditName(name)} />
            <TextInput value={editNumber} style={styles.fields} onChangeText={num => setEditNumber(num)} />
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={validate}>
                    <Text style={styles.txt}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                    <Text style={styles.txt}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainHeading: {
        color: "#0D0D0D",
        fontSize: 22,
        fontWeight: "bold"
    },
    fields: {
        borderColor: "#1B98F5",
        borderWidth: 3,
        borderRadius: 12,
        width: "60%",
        padding: 10,
        marginTop: 15,
        fontWeight: "bold"
    },
    btn: {
        borderColor: "#4DD637",
        borderWidth: 4,
        borderRadius: 15,
        width: "30%",
        alignItems: "center",
        marginTop: 5,
        fontWeight: "bold"
    },
    btnView: {
        padding: 12
    },
    txt: {
        fontWeight: "bold",
        fontSize: 14
    }
})

export default EditProfileScreen;