import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, StyleSheet, Text, Dimensions, Image, TouchableHighlight } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PreviousOrder = () => {
    return (
        <View style={styles.previousOrderWrapper}>
            <View>
                <Text style={styles.previousOrderText}>Previous order</Text>
                <Text style={styles.previousOrderDateText}>September 30th</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                    style={{
                        fontFamily: 'Urbanist-Black',
                        color: '#1E1D32',
                        fontSize: 13,
                        fontWeight: '600',
                        opacity: 0.6,
                        marginRight: 5,
                    }}>4 items</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../../images/2.png')}
                        style={{ borderRadius: 30, width: 30, height: 30, borderWidth: 2, borderColor: '#fff' }}
                    />
                    <Image
                        source={require('../../images/3.png')}
                        style={{ borderRadius: 30, width: 30, height: 30, borderWidth: 2, borderColor: '#fff', marginLeft: -10, }}
                    />
                    <Image
                        source={require('../../images/1.png')}
                        style={{ borderRadius: 30, width: 30, height: 30, borderWidth: 2, borderColor: '#fff', marginLeft: -10, }}
                    />
                    <Image
                        source={require('../../images/4.png')}
                        style={{ borderRadius: 30, width: 30, height: 30, borderWidth: 2, borderColor: '#fff', marginLeft: -10, }}
                    />
                    <View style={{ backgroundColor: '#1E1D32', borderRadius: 30, width: 30, height: 30, borderWidth: 2, borderColor: '#fff', marginLeft: -10, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo style={{ marginLeft: 2 }} color={'#fff'} size={18} name={'chevron-right'} />
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    previousOrderWrapper: {
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#e7e7e7',
        marginTop: -15,
        zIndex: 10,
        width: WIDTH * 0.9,
        height: 75,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 14,
    },

    previousOrderText: {
        fontFamily: 'Urbanist-Black',
        color: '#1E1D32',
        fontSize: 14,
        fontWeight: '600',
    },

    previousOrderDateText: {
        fontFamily: 'Urbanist-Black',
        color: '#1E1D32',
        fontSize: 13,
        fontWeight: '600',
        opacity: 0.5,
    },
})

export default PreviousOrder;