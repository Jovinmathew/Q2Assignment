/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = ({ images }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        resizeMode='contain'
                        source={{ uri: item }}
                        style={styles.image}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: -20,
        height: 200, // Adjust height as needed
    },
    image: {
        width,
        height: '100%', // Take full height of container
        resizeMode: 'cover',
    },
});

export default Carousel;
