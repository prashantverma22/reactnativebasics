import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { types } from '../store/actions/actionType';

const ApiDetail = ({ route }) => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.api);

    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedId, setEditedId] = useState("");

    const { id } = route.params;

    useEffect(() => {
        dispatch({
            type: types.DISPLAY_API_DATA,
            payload: id
        })
    }, [])

    return (
        <View style={styles.mainView}>
            <Text style={styles.txt}>{userData?.userId}</Text>
            <Text style={styles.txt}>{userData?.title}</Text>
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.editBtn} onPress={() => setEditMode(true)}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => {
                    dispatch({
                        type: types.DELETE_API_DATA,
                        payload: id
                    })
                }}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="slide" style={styles.modalView} transparent={true} visible={editMode} onRequestClose={() => {
                setEditMode(!editMode);
            }}>
                <View style={styles.modalView}>
                    <TextInput editable={editMode}
                        style={styles.textInput}
                        onChangeText={(title) => setEditedTitle(title)}
                        placeholder="Enter title"
                    />
                    <TextInput editable={editMode}
                        style={styles.textInput}
                        onChangeText={(id) => setEditedId(id)}
                        placeholder="Enter id"
                    />
                    <TouchableOpacity style={styles.editBtn} onPress={() => {
                        dispatch({
                            type: types.UPDATE_API_DATA,
                            payload: {
                                item: userData,
                                editedTitle: editedTitle,
                                editedId: editedId
                            }
                        })
                        setEditMode(!editMode);
                    }}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelBtn} onPress={() => setEditMode(!editMode)}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        padding: 10
    },
    txt: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        padding: 5
    },
    cancelBtn: {
        width: 100,
        borderWidth: 3,
        borderColor: "#E21717",
        backgroundColor: "#E21717",
        padding: 10,
        borderRadius: 20,
        marginTop: 8,
        alignItems: "center"
    },
    editBtn: {
        width: 100,
        borderWidth: 3,
        borderColor: "#3DBE29",
        backgroundColor: "#3DBE29",
        padding: 10,
        borderRadius: 20,
        marginTop: 8,
        alignItems: "center"
    },
    btnView: {
        padding: 10,
        marginTop: 10,
        justifyContent: "space-between",
    },
    modalView: {
        backgroundColor: "white",
        padding: 50,
        borderRadius: 20,
        marginTop: 100,
        margin: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "70%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#0EB2BF"
    }
})

export default ApiDetail;