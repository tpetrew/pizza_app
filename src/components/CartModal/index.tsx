import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import MiniItemCard from '../MiniItemCard';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const darkColor = '#1E1D32';


const CartModal = ({closeCart}) => {

    const [payVariant, setPayVariant] = useState('apple');
    
    return (
        <View style={styles.container}>
            <View style={{ width: 35, height: 4, backgroundColor: '#c8c8c8', borderRadius: 10, marginTop: 10 }} />
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => closeCart()}>
                        <View style={styles.backButton}>
                            <Entypo style={{ marginLeft: 2 }} color={darkColor} size={18} name={'chevron-left'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.checkOut}>Checkout</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.clearAll}>Clear all</Text>
                </View>
            </View>
            <View style={{ width: WIDTH * 0.92, height: 1, backgroundColor: '#1E1D32', opacity: 0.1 }} />
            <Text style={styles.headersText}>Items</Text>
            <MiniItemCard />
            <MiniItemCard />
            <MiniItemCard />
            <View style={styles.totalWrapper}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalValueText}>$ 175,40</Text>
            </View>
            <View style={{ width: WIDTH * 0.92, height: 1, backgroundColor: '#1E1D32', opacity: 0.1 }} />
            <Text style={styles.headersText}>Pay with</Text>
            <TouchableHighlight underlayColor={'transparent'} onPress={() => setPayVariant('apple')}>
            <View style={styles.payVariant}>
                <View style={styles.payVariantImageWrapper}>
                    <Fontisto color={'#000'} size={30} name={'apple-pay'} />
                </View>
                <Text style={styles.payVariantText}>Apple Pay</Text>
                <View style={payVariant === 'apple' ? styles.payVariantActive : styles.payVariantInActive}></View>
            </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'transparent'} onPress={() => setPayVariant('card')}>
            <View style={styles.payVariant}>
                <View style={styles.payVariantImageWrapper}>
                    <Image style={styles.payVariantImage} source={require('../../images/mc_symbol_opt_73_3x.png')}/>
                </View>
                <Text style={{...styles.payVariantText, opacity: 0.5}}>**** **** **** 7634</Text>
                <View style={payVariant === 'card' ? styles.payVariantActive : styles.payVariantInActive}></View>
            </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: WIDTH,
        height: HEIGHT * 0.87,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    header: {
        paddingVertical: 25,
        width: WIDTH,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    backButton: {
        width: 38,
        height: 38,
        backgroundColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },

    checkOut: {
        textAlign: 'center',
        fontFamily: 'Urbanist-Black',
        color: darkColor,
        fontSize: 22,
        fontWeight: '700',
    },

    clearAll: {
        textAlign: 'right',
        fontFamily: 'Urbanist-Black',
        color: darkColor,
        opacity: 0.5,
        fontSize: 16,
        fontWeight: '600',
    },

    headersText: {
        marginTop: 20,
        marginBottom: 8,
        width: WIDTH * 0.92,
        textAlign: 'left',
        fontFamily: 'Urbanist-Black',
        color: darkColor,
        fontSize: 18,
        fontWeight: '700',
    },

    totalWrapper: {
        marginBottom: 15,
        paddingVertical: 10,
        width: WIDTH * 0.92,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    totalValueText: {
        fontFamily: 'Urbanist-Black',
        color: darkColor,
        fontSize: 18,
        fontWeight: '700',
    },

    totalText: {
        fontFamily: 'Urbanist-Black',
        color: darkColor,
        fontSize: 16,
        fontWeight: '600',
    },

    payVariant: {
        marginTop: 13,
        backgroundColor: '#FBFDFF',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WIDTH * 0.92,
        height: 60,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },

    payVariantText: {
        width: WIDTH*0.63,
        textAlign: 'left',
        fontFamily: 'Urbanist-Black',
        color: darkColor,
        fontSize: 17,
        fontWeight: '600',
    },

    payVariantImageWrapper: {
        width: WIDTH*0.13,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    payVariantImage: {
        width: 55,
        height: 35,
    },

    payVariantActive: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: darkColor,
    },

    payVariantInActive: {
        width: 20,
        height: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#c4c4c4',
    }
})

export default CartModal;