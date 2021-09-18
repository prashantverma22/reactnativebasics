import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, Button, Easing } from 'react-native'

const Animation = () => {

    const animateValue = new Animated.Value(0);

    const animate = () => {
        Animated.timing(animateValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
            easing: Easing.linear
        }).start()
    }

    useEffect(() => {
        animate()
    }, [])

    const marginLeft = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
    })

    const opacity = animateValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0]
    })

    const movingMargin = animateValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 300, 0]
    })

    const textSize = animateValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [18, 32, 18]
    })

    const rotateX = animateValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', '180deg', '0deg']
    })

    return (
        <View style={styles.mainView}>
            <Animated.View
                style={{
                    marginLeft,
                    height: 30,
                    width: 40,
                    backgroundColor: 'red'
                }} />
            <Animated.View
                style={{
                    opacity,
                    marginTop: 10,
                    height: 30,
                    width: 40,
                    backgroundColor: 'blue'
                }} />
            <Animated.View
                style={{
                    marginLeft: movingMargin,
                    marginTop: 10,
                    height: 30,
                    width: 40,
                    backgroundColor: 'orange'
                }} />
            <Animated.Text
                style={{
                    fontSize: textSize,
                    marginTop: 10,
                    color: 'green'
                }} >
                Animated Text!
            </Animated.Text>
            <Animated.View
                style={{
                    transform: [{ rotateX }],
                    marginTop: 50,
                    height: 68,
                    width: 80,
                    backgroundColor: 'black'
                }}>
                <Text style={{ color: 'white' }}>Hello from TransformX</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 150
    }
})

export default Animation