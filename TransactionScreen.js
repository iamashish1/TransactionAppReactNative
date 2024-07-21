import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';


function TransactionsScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
        >
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.entity}>{item.entity}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={transactions}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 10,
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    entity: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27ae60',
    },
});

export default TransactionsScreen;


export const transactions = [
    {
        id: '1',
        price: 120.50,
        location: 'Los Angeles, CA',
        date: '2024-07-15',
        entity: 'Coffee Shop',
        description: 'Latte and croissant'
        , icon: 'https://media.istockphoto.com/id/960924058/photo/cup-of-cappuccino-coffee-with-croissants.jpg?b=1&s=612x612&w=0&k=20&c=fVm5-FS-dGkWdOFiyCFBhSOILeE2pPVmrhz0_sfNjEs='
    },
    {
        id: '2',
        price: 45.00,
        location: 'San Francisco, CA',
        date: '2024-07-16',
        entity: 'Bookstore',
        description: 'Novel purchase'
        , icon: "https://media.istockphoto.com/id/1129874863/photo/books-on-display-in-the-corner-of-a-second-hand-bookstore.jpg?s=612x612&w=0&k=20&c=ez0PTZuEp8Vn5SFMSxOVggudvgsHFKsFKlAwObaXkuI="
    },
    {
        id: '3',
        price: 75.30,
        location: 'New York, NY',
        date: '2024-07-17',
        entity: 'Restaurant',
        description: 'Dinner with friends',
        icon: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
    },
    {
        id: '4',
        price: 200.00,
        location: 'Chicago, IL',
        date: '2024-07-18',
        entity: 'Electronics Store',
        description: 'Smartphone purchase',
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_3Gw5iuB47R1DzgtRNBQTB_BEodicfpO7A&s"
    },
    {
        id: '5',
        price: 32.99,
        location: 'Seattle, WA',
        date: '2024-07-19',
        entity: 'Grocery Store',
        description: 'Groceries',
        icon: "https://t4.ftcdn.net/jpg/04/29/82/93/360_F_429829305_hnlwKXMrdbiggNhIIQiuu3YxkAuNqJbN.jpg"
    },
    {
        id: '6',
        price: 150.00,
        location: 'Austin, TX',
        date: '2024-07-20',
        entity: 'Clothing Store',
        description: 'New jacket',
        icon: "https://www.shutterstock.com/image-photo/modern-fashion-store-front-downtown-600nw-2215294089.jpg"
    },
    {
        id: '7',
        price: 65.7,
        location: 'Miami, FL',
        date: '2024-07-21',
        entity: 'Fitness Center',
        description: 'Monthly membership',
        icon: "https://media.istockphoto.com/id/1316730217/photo/facade-of-fitness-club-entrance-with-treadmill-fitness-ball-and-other-exercise-equipments.jpg?s=612x612&w=0&k=20&c=SSFsQJJixALbLInZuHcmpFudl1ZiDQbZS4HHrVj73w0="
    },
    {
        id: '8',
        price: 27.50,
        location: 'Boston, MA',
        date: '2024-07-22',
        entity: 'Pharmacy',
        description: 'Medication',
        icon: "https://media.istockphoto.com/id/1472256245/photo/pharmacist-holding-a-prescription.webp?b=1&s=170667a&w=0&k=20&c=GPNJie9meHqyua5SuFzSQLMsIgHIvTxxjK1uAp6JDEE="
    },
];
