import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, SafeAreaView, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MainItemCard = ({ item }) => {

    const [value, setValue] = useState(2);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={item.image}
                    />
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WIDTH * 0.55 }}>
                        <View>
                            {item.prices.map((price, key) => {
                                return (
                                    <View style={styles.sizeLine} key={key}>
                                        <MaterialCommunityIcons color={"#888"} name={'diameter-variant'} size={17} />
                                        <Text style={styles.sizeLineText}>{price.size}cm / <Text style={{ color: '#1E1D32' }}>$ {price.value}</Text></Text>
                                    </View>
                                )
                            })}
                        </View>
                        {value !== 0 ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.addButtonWhite}>
                                    <MaterialCommunityIcons color={"#1E1D32"} name={'minus'} size={22} />
                                </View>
                                <Text style={styles.valueText}>{value}</Text>
                                <View style={styles.addButtonWhite}>
                                    <MaterialCommunityIcons color={"#1E1D32"} name={'plus'} size={22} />
                                </View>

                            </View>
                            :
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <View style={styles.addButton}>
                                    <MaterialCommunityIcons color={"#fff"} name={'plus'} size={22} />
                                </View>

                            </View>
                        }

                    </View>
                </View>
            </View>
            <View style={{ width: WIDTH * 0.9, height: 1, backgroundColor: '#1E1D32', marginLeft: WIDTH * 0.05, opacity: 0.1 }} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageWrapper: {
        width: WIDTH * 0.4,
        height: WIDTH * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        // borderRadius: 200,
        width: WIDTH * 0.35,
        height: WIDTH * 0.35,
        shadowColor: "#1E1D32",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3,

        elevation: 10,
    },

    infoWrapper: {
        width: WIDTH * 0.6,
        height: WIDTH * 0.4,
    },

    description: {
        fontFamily: 'Urbanist-Black',
        fontSize: 12,
        fontWeight: '500',
        color: '#1E1D32',
        lineHeight: 18,
        opacity: 0.5,
        marginBottom: 15,
        width: WIDTH * 0.52,
    },

    name: {
        fontFamily: 'Urbanist-Black',
        marginTop: 13,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: '600',
        color: '#1E1D32',
    },

    sizeLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },

    sizeLineText: {
        fontFamily: 'Urbanist-Black',
        fontWeight: '700',
        color: '#888',
        marginLeft: 5,
    },

    addButton: {
        width: 35,
        height: 35,
        borderRadius: 30,
        backgroundColor: '#1E1D32',
        alignItems: 'center',
        justifyContent: 'center',
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

export default MainItemCard;
