import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from './TransactionScreen';
function SummaryScreen() {
    const spendingAmounts = transactions.map(transaction => (transaction.price));

    const totalTransactions = spendingAmounts.length;
    const totalBalance = spendingAmounts.reduce((total, amount) => total + amount, 0);
    const highSpending = Math.max(...spendingAmounts);
    const lowSpending = Math.min(...spendingAmounts);

    const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <View style={styles.summaryContainer}>
                <Text style={styles.label}>Total Number of Transactions:</Text>
                <Text style={styles.amount}>{totalTransactions}</Text>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={styles.label}>Total Balance:</Text>
                <Text style={styles.amount}>{formatCurrency(totalBalance)}</Text>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={styles.label}>Highest Spending Amount:</Text>
                <Text style={styles.amount}>{formatCurrency(highSpending)}</Text>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={styles.label}>Lowest Spending Amount:</Text>
                <Text style={styles.amount}>{formatCurrency(lowSpending)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    summaryContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginBottom: 5,
    },
    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#27ae60',
    },
});

export default SummaryScreen;
