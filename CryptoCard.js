import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CryptoCard = ({ coin }) => {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Image
                    source={{ uri: coin.image }}
                    style={styles.logo}
                />
                <View>
                    <Text style={styles.name}>
                        {coin.name} ({coin.symbol.toUpperCase()})
                    </Text>
                    <Text style={styles.price}>
                        💲{coin.current_price.toLocaleString()}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#555',
    },
});

export default CryptoCard;