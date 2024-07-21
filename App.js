import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TransactionsScreen from './TransactionScreen';
import SummaryScreen from './SummaryScreen';
import TransactionDetailScreen from './TransactionDetail';
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const TransactionsStack = createStackNavigator();

function TransactionsStackScreen() {
  return (
    <TransactionsStack.Navigator>
      <TransactionsStack.Screen
        name="TransactionList"
        component={TransactionsScreen}
        options={{ title: 'Transaction List' }}
      />
      <TransactionsStack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
        options={{ title: 'Detail' }}
      />
    </TransactionsStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen

          name="Transactions"
          component={TransactionsStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => <AntDesign name="bars" size={24} color={props.color} />

          }}
        />
        <Tab.Screen
          name="Summary"
          component={SummaryScreen}
          options={{
            headerShown: true, title: 'Summary',
            tabBarIcon: (props) => <AntDesign name="info" size={24} color={props.color} />

          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
