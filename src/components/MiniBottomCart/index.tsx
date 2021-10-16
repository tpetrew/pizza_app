import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MiniBottomCart = ({ closeCart }) => {
    return (
        <TouchableHighlight onPress={() => closeCart()}>
            <View style={styles.miniBottomCart}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../images/4.png')}
                            style={{ borderRadius: 30, width: 60, height: 60, borderWidth: 2, borderColor: '#fff' }}
                        />
                        <Image
                            source={require('../../images/5.png')}
                            style={{ borderRadius: 30, width: 60, height: 60, borderWidth: 2, borderColor: '#fff', marginLeft: -40, }}
                        />
                        <Image
                            source={require('../../images/1.png')}
                            style={{ borderRadius: 30, width: 60, height: 60, borderWidth: 2, borderColor: '#fff', marginLeft: -40, }}
                        />
                        <Image
                            source={require('../../images/6.png')}
                            style={{ borderRadius: 30, width: 60, height: 60, borderWidth: 2, borderColor: '#fff', marginLeft: -40, }}
                        />
                    </View>
                    <Text style={{
                        fontFamily: 'Urbanist-Black',
                        color: '#1E1D32',
                        fontSize: 16,
                        fontWeight: '600',
                        opacity: 0.6,
                        marginLeft: 10,
                    }}>4 items</Text>
                </View>
                <View style={{ marginTop: 30, height: 35, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', backgroundColor: '#1E1D32', paddingHorizontal: 13, borderRadius: 20 }}>
                    <Feather name={'shopping-bag'} color={"#fff"} size={16} />
                    <Text style={{
                        fontFamily: 'Urbanist-Black',
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: '800',
                        marginLeft: 10,
                    }}>$ 175,40</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    miniBottomCart: {
        width: WIDTH,
        height: 110,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
})

export default MiniBottomCart;