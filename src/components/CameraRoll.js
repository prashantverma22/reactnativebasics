import React, { useEffect, useState } from 'react';

import {
    View,
    Image,
    Button,
    Text,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    FlatList
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';

const Camera = () => {

    const [photo, setPhoto] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        askPermission();
        getImagesFromGallery();
    }, [page])

    //permission for accessing the device's gallery
    const askPermission = async () => {
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Permission Required',
                    message: 'Permission required for aceessing the Gallery!',
                },
            );
            if (result !== 'granted') {
                console.log('Access to pictures was denied');
                return;
            }
        }
    }

    //fetching images from device's gallery
    const getImagesFromGallery = () => {
        CameraRoll.getPhotos({
            first: 10 + page,
            assetType: 'Photos',
        })
            .then(res => {
                setPhoto(res.edges);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //loading more pictures as we scroll down the page
    const loadMoreData = () => {
        setPage(page + 10);
    }

    const renderItemFunction = ({ item, index }) => {
        return (
            <View style={styles.flatlistView}>
                <Image source={{ uri: item.node.image.uri }} style={styles.img} />
            </View>
        );
    }

    return (
        <View style={styles.mainView}>
            <FlatList data={photo} style={styles.flatList}
                renderItem={renderItemFunction}
                keyExtractor={(item, index) => item.node.image.uri}
                onEndReachedThreshold={0}
                onEndReached={loadMoreData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        justifyContent: "center",
        alignItems: "center"
    },
    flatList: {
        width: 400,
        height: 800
    },
    flatlistView: {
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 200,
        height: 200
    }
})

export default Camera;