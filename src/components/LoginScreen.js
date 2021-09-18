import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("prashant@gmail.com");
    const [password, setPassword] = useState("Abcd");

    return (
        <View style={styles.mainView}>
            <Text style={styles.heading}>Login</Text>
            <KeyboardAvoidingView style={{ flex: 0.6 }}>
                <View style={styles.childView}>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput value={email} style={styles.fields} onChangeText={mail => setEmail(mail)}
                        placeholder="Enter your email" />
                </View>

                <View style={styles.childView}>
                    <Text style={styles.text}>Password: </Text>
                    <TextInput value={password} style={styles.fields} onChangeText={pass => setPassword(pass)}
                        placeholder="Enter your password" />
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Profile')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    keybrd: {

    },
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
    childView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    },
    fields: {
        borderColor: "#1B98F5",
        borderWidth: 3,
        borderRadius: 12,
        width: "60%",
        padding: 10,
        fontWeight: "bold"
    },
    btn: {
        borderColor: "#4DD637",
        borderWidth: 4,
        borderRadius: 15,
        width: "20%",
        alignItems: "center"
    }
})

export default LoginScreen;