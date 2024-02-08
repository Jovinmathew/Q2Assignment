/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Product } from '../../../App';

type ListItemProps = {
    item: Product; // Assuming Product type is defined globally
};

const ListItem = ({ item }: ListItemProps) => {
    const thumbnail = item.thumbnail;
    return (
        <View style={styles.item}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: thumbnail,
                }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.brand}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.rating}>Rating: {item.rating}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: 'black',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
    rating: {
        fontSize: 14,
        color: 'blue',
    },
});

export default ListItem;
