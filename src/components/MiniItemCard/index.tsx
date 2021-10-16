import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MiniItemCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../images/4.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.name}>Carbonara pasta</Text>
                <View style={styles.sizeLine}>
                    <MaterialCommunityIcons color={"#888"} name={'diameter-variant'} size={17} />
                    <Text style={styles.sizeLineText}>30cm / <Text style={{ color: '#1E1D32' }}>$ 40</Text></Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.addButtonWhite}>
                    <MaterialCommunityIcons color={"#1E1D32"} name={'minus'} size={22} />
                </View>
                <Text style={styles.valueText}>2</Text>
                <View style={styles.addButtonWhite}>
                    <MaterialCommunityIcons color={"#1E1D32"} name={'plus'} size={22} />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        width: WIDTH,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15,
        paddingLeft: 4,
    },

    imageWrapper: {
        width: WIDTH * 0.2,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        height: 60,
        width: 60,
        shadowColor: "#1E1D32",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },

    infoWrapper: {
        width: WIDTH * 0.48,
    },

    name: {
        fontFamily: 'Urbanist-Black',
        fontWeight: '700',
        color: '#111',
        fontSize: 16,
        opacity: 0.9,
    },

    sizeLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    sizeLineText: {
        fontFamily: 'Urbanist-Black',
        fontWeight: '700',
        color: '#888',
        marginLeft: 5,
    },

    addButtonWhite: {
        width: 35,
        height: 35,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
    },

    valueText: {
        width: 13,
        textAlign: 'center',
        fontFamily: 'Urbanist-Black',
        fontSize: 17,
        marginHorizontal: 8,
        fontWeight: '600',
        color: '#1E1D32',
    }
})

export default MiniItemCard;