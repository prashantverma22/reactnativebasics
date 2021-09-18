import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import MapView, { Callout, Marker, Overlay, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

const MapScreen = () => {

    const markers = [
        {
            latitude: 28.522993,
            longitude: 77.207346,
            title: "PVR"
        },
        {
            latitude: 28.527659,
            longitude: 77.211641,
            title: "Hospital",
        },
        {
            latitude: 28.523531,
            longitude: 77.209470,
            title: "School",
        },
        {
            latitude: 28.528847,
            longitude: 77.218922,
            title: "Mall",
        }
    ]

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    const [showModal, setShowModal] = useState(false);

    //to fetch the current location
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((location) => {
            setLat(location.coords.latitude)
            setLong(location.coords.longitude)
        }),
            (error) => {
                console.log(error)
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
    }

    useEffect(() => {
        getCurrentLocation();
        searchAddress();
    }, [])

    Geocoder.init("AIzaSyCrw411NCNlRyN9zE4H1ZqQvuFglBaiOyk");

    const searchAddress = () => {
        Geocoder.from("Pyramid", {
            southwest: { lat: 36.05, lng: -115.25 },
            northeast: { lat: 36.16, lng: -115.10 }
        })
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
            })
            .catch(error => console.warn(error));
    }

    return (
        <>

            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 28.524578,
                        longitude: 77.206612,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121
                    }}>

                    <Overlay
                        image="https://image.shutterstock.com/image-vector/pin-icon-vector-location-symbol-260nw-1723824118.jpg"
                        bounds={[
                            [28.5498053, 77.2077701],
                            [28.5528210, 77.2139490]
                        ]}
                    />

                    <Marker draggable
                        coordinate={{ latitude: lat, longitude: long }}
                        title="My Home">

                        <Callout onPress={() => setShowModal(true)}>
                            <View>
                                <Text>Home</Text>
                            </View>
                        </Callout>

                    </Marker>

                    {
                        markers.map((marker, index) =>
                        (
                            <Marker coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                                title={marker.title}
                                pinColor="#1B98F5"
                                key={index}>

                            </Marker>
                        )
                        )
                    }

                </MapView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    setShowModal(!showModal)
                }} >
                <View style={styles.modal}>
                    <Text>Home Location</Text>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    modal: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
        marginTop: 150,
        margin: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MapScreen;