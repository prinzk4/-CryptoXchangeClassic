import CryptoCard from './CryptoCard'; import React, { useEffect, useState } from 'react';
import {
View,
Text,
FlatList,
StyleSheet,
ActivityIndicator,
SafeAreaView,
} from 'react-native';

export default function App() {
const [cryptoData, setCryptoData] = useState([]);
const [loading, setLoading] = useState(true);

const fetchCryptoPrices = async () => {
try {
const response = await fetch(
'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
);
const data = await response.json();
setCryptoData(data);
setLoading(false);
} catch (error) {
console.error('Error fetching crypto data:', error);
setLoading(false);
}
};

useEffect(() => {
fetchCryptoPrices();
}, []);

const renderItem = ({ item }) => <CryptoCard coin={item} />;


return (
<SafeAreaView style={styles.container}>
<Text style={styles.header}>📈 CryptoXchange</Text>
{loading ? (
<ActivityIndicator size="large" color="#0000ff" />
) : (
<FlatList
data={cryptoData}
keyExtractor={(item) => item.id}
renderItem={renderItem}
/>
)}
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
paddingTop: 50,
paddingHorizontal: 20,
backgroundColor: '#f1f3f6',
flex: 1,
},
header: {
fontSize: 26,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 20,
},
card: {
backgroundColor: '#fff',
borderRadius: 10,
padding: 16,
marginBottom: 10,
elevation: 2,
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