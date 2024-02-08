/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
// ProductDetailScreen.tsx


import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Carousel from '../../../components/carousel/components';
import StarRating from '../../../components/ratingStars/component';


type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

type ProductDetailScreenProps = {
    route: {
        params: {
            product: Product;
        };
    };
};

const _renderItem = ({ item, index }) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
}

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
    const { product } = route.params;
    const discountPercentage = product.discountPercentage;
    const salePrice = (product.price - (product.price * (discountPercentage / 100))).toFixed(2);

    return (
        <View style={styles.container}>
            <Carousel images={product.images} />
            <StarRating rating={product.rating} />
            <Text style={styles.subText}>{product.category}</Text>
            <Text style={styles.title}>{product.title} </Text>
            <View style={styles.rowContainer}>
                <Text style={styles.priceTag}>Price: </Text>
                <Text style={styles.discountedPrice}>${product.price}</Text>
                <Text style={styles.price}>${salePrice} </Text>
                <Text style={styles.discountText}>{product.discountPercentage}% off</Text>
            </View>
            <Text style={styles.subText}>{product.stock} left in stock</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical: 20,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black',

    },
    priceTag: {
        fontSize: 18,
        color: 'black',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',

    },
    rating: {
        fontSize: 16,
        color: 'black',

    },
    tinyLogo: {
        width: '100%',
        height: 120,
        marginRight: 10,
    },
    discountedPrice: {
        fontSize: 18,
        color: 'gray',
        marginRight: 10,
        textDecorationLine: 'line-through',
    },
    discountText: {
        fontSize: 14,
        color: 'green',
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    subText: {
        fontSize: 14,
        color: 'gray',
    },
});

export default ProductDetailScreen;
