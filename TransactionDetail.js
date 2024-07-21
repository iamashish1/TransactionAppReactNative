import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

function TransactionDetailScreen({ route }) {
    const { transaction } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: transaction.icon }} style={styles.headerImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Transaction Detail</Text>
                <Text style={styles.price}>{transaction.price}</Text>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.location}>{transaction.location}</Text>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.date}>{transaction.date}</Text>
                <Text style={styles.label}>Entity:</Text>
                <Text style={styles.entity}>{transaction.entity}</Text>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.description}>{transaction.description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        paddingVertical: 20,
    },
    headerImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    detailsContainer: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#27ae60',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        marginBottom: 5,
    },
    location: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    date: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    entity: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default TransactionDetailScreen;
