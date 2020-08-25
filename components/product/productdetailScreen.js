import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyle } from '../../public/styles';

export default function ProductDetailScreen(props) {
    console.log(props)
    const product = props.route.params.product;

    return (<View style={globalStyle.container}>
        <Text style={globalStyle.headerStyle}>Product Details</Text>
        <View style={compStyle.main}>
            <Image source={require('../../assets/product_image.jpg')} style={globalStyle.imageStyle}></Image>
            <View >
                <Text style={compStyle.detail}>1) Product Name : {product.name}</Text>
                <Text  style={compStyle.detail}>2) Product Quantity : {product.quantity}</Text>
                <Text  style={compStyle.detail}>3) Product Price : {product.price}</Text>
                <Text  style={compStyle.detail}>4) Product Category : {product.category}</Text>
                <Text  style={compStyle.detail}>5) Product in Stock : {product.inStock}</Text>
            </View>
        </View>

    </View>);
}

const compStyle = StyleSheet.create({
    main: {
        margin: 5
    },
    detail:{
        padding:5,
        fontWeight:'500'
    }
})