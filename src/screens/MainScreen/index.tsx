import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, SafeAreaView, Image, TouchableHighlight, TextInput } from 'react-native';
import MainItemCard from '../../components/MainItemCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import PreviousOrder from '../../components/PreviousOrder';
import Modal from "react-native-modal";
import MiniBottomCart from '../../components/MiniBottomCart';
import CartModal from '../../components/CartModal';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const items = [
    {
        id: 0,
        name: 'Margarita',
        description: 'The history of pizza "Margarita" dates back to the end of the 19th century, when for the first time this dish was offered by the Neapolitan R. Esposito to King Ferdinand II and his charming wife Margarita. Since then, this dish has become a symbol of Italian cuisine, because by combining just a few simple products (Mozzarella, herbs and tomato), it was possible to get a truly inimitable taste. It is possible to order pizza around the clock by phone or on our website. Pizza delivery "Margarita" is carried out in the shortest possible time.',
        prices: [
            {
                size: 30,
                value: 35,
            },

            {
                size: 40,
                value: 50,
            }
        ],
        image: require('../../images/1.png')
    },

    {
        id: 1,
        name: 'Cold Cuts',
        description: 'Fans of meat dishes will appreciate the culinary masterpiece of our chefs called "Cold cuts". After all, there are four types of meat in its composition at once – bacon, beef, pork and even chicken breast. To make the dish more juicy, fresh tomatoes and excellent Mozzarella cheese are added to it. You can order pizza "Cold cuts" on our website or by phone around the clock. Pizza delivery "Cold cuts" is carried out in the shortest possible time.',
        prices: [
            {
                size: 30,
                value: 40,
            },

            {
                size: 40,
                value: 55,
            }
        ],
        image: require('../../images/2.png')
    },

    {
        id: 2,
        name: 'Barbecue 🌶️',
        description: 'The history of Barbecue pizza goes back to the American culinary culture, where Barbecue sauce has a special status. Its slightly tart and pronounced taste gives the pizza a unique aroma. Due to the presence of ham and chicken breast in the composition, the dish turns out to be high-calorie and surprisingly tasty. ',
        prices: [
            {
                size: 30,
                value: 40,
            },

            {
                size: 40,
                value: 55,
            }
        ],
        image: require('../../images/3.png')
    },

    {
        id: 3,
        name: 'Pizza 4 flavors',
        description: 'The combination of meat and mushrooms belongs to the classic options. Therefore, in order to get a more refined taste, our masters decided to combine four flavors at once – bacon, ham, chicken and mushrooms. All this taste splendor is emphasized by the tenderness of Mozzarella and the sharpness of jalapeno pepper. The result is a dish that can satisfy the most demanding gourmet. ',
        prices: [
            {
                size: 30,
                value: 40,
            },

            {
                size: 40,
                value: 55,
            }
        ],
        image: require('../../images/4.png')
    },

    {
        id: 4,
        name: 'Megapolis',
        description: 'Pizza sauce, mozzarella cheese, ham, bacon, bulgarian pepper ',
        prices: [
            {
                size: 30,
                value: 40,
            },

            {
                size: 40,
                value: 55,
            }
        ],
        image: require('../../images/5.png')
    },

    {
        id: 5,
        name: 'Bavaria',
        description: 'The end of the 19th century, when for the first time this dish was offered by the Neapolitan R. Esposito to King Ferdinand II and his charming wife Margarita. Since then, this dish has become a symbol of Italian cuisine, because by combining just a few simple products (Mozzarella, herbs and tomato), it was possible to get a truly inimitable taste. It is possible to order pizza around the clock by phone or on our website. Pizza delivery "Margarita" is carried out in the shortest possible time.',
        prices: [
            {
                size: 30,
                value: 40,
            },

            {
                size: 40,
                value: 55,
            }
        ],
        image: require('../../images/6.png')
    },
]

const MainScreen = () => {

    const [type, setType] = useState('pizza');
    const [searchValue, setSearchValue] = useState('');
    const [previousOrder, setPreviousOrder] = useState(true);
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const closeCart = () => {
        setIsCartVisible(!isCartVisible);
    }

    // class Cart {
    //     constructor(props) {
    //         this.
    //     }
    // }


    return (
        <View style={{ backgroundColor: '#FBFDFF', flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: '#FBFDFF' }} />
            <View style={styles.header}>
                <View style={styles.location}>
                    <Ionicons size={18} color={'#886629'} name={'location-outline'} />
                    <Text numberOfLines={1} style={{ color: '#fff', marginLeft: 3, width: 150, fontFamily: 'Urbanist-Black', }}>New York, 894 Broadway</Text>
                </View>
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/cf/b7/72/cfb7726724de982b0319330f8de63b5e.jpg' }}
                    style={styles.profileImage}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#FBFDFF', paddingBottom: 100, }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.searchWrapper}>
                        <TextInput
                            placeholderTextColor={'#999DA1'}
                            placeholder={'Search items'}
                            style={styles.searchInput}
                            onChangeText={(text) => setSearchValue(text)}
                        />
                        <AntDesign style={styles.searchIcon} color={'#D8DCE0'} size={24} name={'search1'} />
                        {previousOrder ? <PreviousOrder /> : null}
                    </View>
                    {/* TYPES \/\/\/\/\/\/\/\/\/\/\/*/}
                    <View style={styles.typesLine}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: WIDTH * 0.05 }}>
                            <TouchableHighlight underlayColor={'transparent'} onPress={() => setType('pizza')}>
                                <View style={type === 'pizza' ? styles.typeActive : styles.type}>
                                    <Text style={type === 'pizza' ? styles.typeTextActive : styles.typeText}>🍕 Pizza</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'transparent'} onPress={() => setType('salads')}>
                                <View style={type === 'salads' ? styles.typeActive : styles.type}>
                                    <Text style={type === 'salads' ? styles.typeTextActive : styles.typeText}>🥗 Salads</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'transparent'} onPress={() => setType('drinks')}>
                                <View style={type === 'drinks' ? styles.typeActive : styles.type}>
                                    <Text style={type === 'drinks' ? styles.typeTextActive : styles.typeText}>🍹 Drinks</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'transparent'} onPress={() => setType('deserts')}>
                                <View style={type === 'deserts' ? styles.typeActive : styles.type}>
                                    <Text style={type === 'deserts' ? styles.typeTextActive : styles.typeText}>🍰 Desserts</Text>
                                </View>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                    {/* CONTENT \/\/\/\/\/\/\/\/\/\/\/\/ */}
                    {
                        items.map((item) => {
                            return (
                                <MainItemCard item={item} key={item.id} />
                            )
                        })
                    }
                </View>
            </ScrollView>
            {isCartEmpty ? <MiniBottomCart closeCart={closeCart}/> : null}
            <Modal
                isVisible={isCartVisible}
                style={{ alignItems: 'center', margin: 0, padding: 0, justifyContent: 'flex-end' }}
                onSwipeComplete={() => setIsCartVisible(false)}
                swipeDirection="down"
            >
                <CartModal closeCart={closeCart}/>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: WIDTH,
        paddingHorizontal: WIDTH * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    },

    location: {
        height: 30,
        width: 200,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E1D32',
    },

    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    searchWrapper: {
        width: WIDTH,
        alignItems: 'center',
        marginBottom: 25,
    },

    searchInput: {
        zIndex: 100,
        backgroundColor: '#FBFDFF',
        width: WIDTH * 0.9,
        height: 50,
        paddingHorizontal: 15,
        fontFamily: 'Urbanist-Black',
        fontWeight: '600',
        fontSize: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e7e7e7',
    },

    searchIcon: {
        position: 'absolute',
        right: 35,
        top: 9,
    },


    typesLine: {
        paddingBottom: 10,
        flexDirection: 'row',
        width: WIDTH,
    },

    type: {
        marginRight: 5,
        height: 33,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },

    typeText: {
        fontFamily: 'Urbanist-Black',
        color: '#1E1D32',
        fontSize: 16,
        fontWeight: '600',
    },

    typeActive: {
        marginRight: 5,
        height: 33,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E1D32',
    },

    typeTextActive: {
        fontFamily: 'Urbanist-Black',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },


})

export default MainScreen;