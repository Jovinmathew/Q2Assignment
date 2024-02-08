/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarRating = ({ rating }) => {
    const maxRating = 5;
    const filledStars = Math.floor(rating);
    const remainingStars = maxRating - filledStars;
    const stars = [];

    // Filled Stars
    for (let i = 0; i < filledStars; i++) {
        stars.push(<Text key={i} style={styles.star}>★</Text>);
    }

    // Remaining Stars
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<Text key={`empty-${i}`} style={styles.star}>☆</Text>);
    }

    return (
        <View style={styles.container}>
            {stars}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 20, // Adjust size as needed
        color: 'gold', // Adjust color as needed
    },
});

export default StarRating;
