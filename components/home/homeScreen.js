import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { globalStyle } from '../../public/styles';


export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([])
  const [prevProduct, setPrevProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = () => {
    axios.get('http://localhost:3000/product')
      .then(res => {
        setProducts(res.data)
        setPrevProducts(res.data)
      })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={globalStyle.headerBtnStyle}>
          <Button onPress={() => { navigation.navigate('Add', { addProducts }) }} title="Add Product" />
        </View>
      ),
    });
  }, [])
  const addProducts = () => {
    fetchProducts()
  }

  const editProd = () => {
    fetchProducts()
  }

  const searchFilter = (value) => {
    if (value === '' || value === undefined || value === null)
      setProducts(prevProduct)
    else {

      let filterdData = products.filter(data => {
        return Object.values(data).join(" ").toLowerCase().match(event.target.value.toLowerCase())
      })

      if (filterdData.length === 0)
        setProducts(prevProduct)
      else
        setProducts(filterdData)
    }
  }


  const deleteProduct = (id) => {
    console.log('delete >>> ', id)
    axios.delete("http://localhost:3000/product/" + id)
      .then(response => {
        if (response.status === 200) {
          fetchProducts()
          alert('Product Deleted Successfully.')
        }
      })
      .catch(error => {
        console.log('delete prod error', error)
        alert('Please try again later.')
      })
  }
  return (<View style={globalStyle.container}>
    <Text style={globalStyle.headerStyle}>Inventory Management</Text>

    <TextInput style={globalStyle.inputSearchBoxStyle} placeholder="search product" onChangeText={value => searchFilter(value)}></TextInput>

    <ScrollView >

      {
        products.map(product => {
          return (
            <View key={product.id} style={globalStyle.card}>
              <TouchableOpacity onPress={() => { navigation.navigate('Product', { product: product }) }}>
                <Image source={require('../../assets/product_image.jpg')} style={globalStyle.imageStyle}></Image>
                <View style={globalStyle.listItemStyle}>
                  <Text style={globalStyle.listTextStyle}>Product Name : {product.name}</Text>
                  <Text style={globalStyle.listTextStyle}>Price : {product.price}</Text>
                </View>
              </TouchableOpacity>
              <View style={globalStyle.fixToText}>
                <View>
                  <Button onPress={() => { navigation.navigate('Edit', { editProd, product: product }) }} title="Edit"></Button>
                </View>
                <View style={globalStyle.btnMarginStyle}>
                  <Button id={product.id} onPress={() => deleteProduct(product.id)} title="Delete"></Button>
                </View>
              </View>

            </View>
          )
        })
      }
    </ScrollView>
  </View>);
};