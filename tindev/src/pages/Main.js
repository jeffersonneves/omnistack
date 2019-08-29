import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import logo from '../assets/logo.png';
import like from '../assets/like';
import dislike from '../assets/dislike';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Main(){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} />

            <View style={styles.cardsContainer} >
                <View style={styles.card}>
                    <Image source={{uri: 'https://avatars3.githubusercontent.com'}} />
                    <View style={styles.footer} >
                        <Text style={styles.name}></Text>
                        <Text style={styles.bio}></Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttons}>
                    <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Image source={dislike} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500
    },
    card: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    avatar: {
        flex: 1,
        height: 300
    },
    footer: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingVertical: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333'
    },
    bio: {
        fontSize: 14,
        color: '#999999',
        marginTop: 5,
        lineHeight: 18
    },
    logo: {
        marginTop: 30
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    buttons: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }

    }
});