import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { storeData } from '../store/actions/action';

const SignupScreen = () => {

    const [email, setEmail] = useState("prashant@gmail.com");
    const [name, setName] = useState("Prashant Verma");
    const [number, setNumber] = useState("9716451314");
    const [password, setPassword] = useState("Abcd");
    const [confirmPassword, setConfimPassword] = useState("Abcd");

    const navigation = useNavigation();
    const dispatch = useDispatch();

    //storing data in thr redux store
    const validateAndStoreData = () => {
        let info = {
            email: email,
            pass: password,
            num: number,
            name: name
        }
        dispatch(storeData(info));
        Alert.alert("Registered Successfully");
        navigation.navigate('Login');
    }

    return (
        <KeyboardAvoidingView style={{ flex: 0.8 }}>
            <View style={styles.mainView}>
                <Text style={styles.heading}>Sign Up</Text>

                <View style={styles.TextInput}>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput value={email} style={styles.fields} onChangeText={mail => setEmail(mail)}
                        placeholder="Enter your email" />
                </View>

                <View style={styles.TextInput}>
                    <Text style={styles.text}>Name: </Text>
                    <TextInput value={name} style={styles.fields} onChangeText={name => setName(name)}
                        placeholder="Enter your name" />
                </View>

                <View style={styles.TextInput}>
                    <Text style={styles.text}>Number: </Text>
                    <TextInput value={number} style={styles.fields} onChangeText={number => setNumber(number)}
                        placeholder="Enter your number" />
                </View>

                <View style={styles.TextInput}>
                    <Text style={styles.text}>Password: </Text>
                    <TextInput value={password} style={styles.fields} onChangeText={pass => setPassword(pass)}
                        placeholder="Enter your password" />
                </View>

                <View style={styles.TextInput}>
                    <Text style={styles.text}>Re-enter: </Text>
                    <TextInput value={confirmPassword} style={styles.fields} onChangeText={pass => setConfimPassword(pass)}
                        placeholder="Confirm Password" />
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => validateAndStoreData()}>
                    <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        color: "#0D0D0D",
        fontSize: 22,
        fontWeight: "bold"
    },
    TextInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 18,
        padding: 6,
    },
    fields: {
        borderColor: "#1B98F5",
        borderWidth: 3,
        borderRadius: 12,
        width: "60%",
        padding: 10,
        fontWeight: "bold"
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    },
    btn: {
        borderColor: "#4DD637",
        borderWidth: 4,
        borderRadius: 15,
        width: "20%",
        alignItems: "center"
    }
})

export default SignupScreen;