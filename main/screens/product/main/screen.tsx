/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Product } from '../../../../App';
import ListItem from '../../../components/productTile/components';
import { useNavigation } from '@react-navigation/native';

/* eslint-disable prettier/prettier */
const MyFlatListScreen = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();


    const getProductsFromApi = () => {
        return fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => {
                setData(json.products);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        getProductsFromApi();
    }, []);

    const navigateToProductDetail = (product: Product) => {
        navigation.navigate('Product Details', { product });
    };

    const renderItem = ({ item }: { item: Product }) => (
        <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
            <ListItem item={item} />
        </TouchableOpacity>
    );

    return (


        <SafeAreaView style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="black" style={styles.loading} />
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        padding: 20,
        alignSelf: 'flex-start',
    },
});

export default MyFlatListScreen;
