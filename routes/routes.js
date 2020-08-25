import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../components/home/homeScreen';
import ProductDetailScreen from '../components/product/productdetailScreen';
import EditProductScreen from '../components/product/editProductScreen';
import AddProductScreen from '../components/product/addproductScreen';

const Stack = createStackNavigator();

const RoutesContainer = () =>{
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" screenOptions={{
            gestureEnabled:true,
            headerStyle:{
                backgroundColor:'#c6c6d2'
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Product" component={ProductDetailScreen}></Stack.Screen>
            <Stack.Screen name="Edit" component={EditProductScreen}></Stack.Screen>
            <Stack.Screen name="Add" component={AddProductScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RoutesContainer;