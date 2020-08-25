import React, { useState, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Axios from 'axios';
import { globalStyle } from '../../public/styles';

export default function EditProductScreen(props) {

   const product = props.route.params.product;

  const [id,setId] = useState('')
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Mobile');
  const [inStock, setInStock] = useState('yes');
  const [quantity, setQuantity] = useState('');

  console.log(props.route.params)
  useEffect(() => {

    if(product !== null && product !== undefined){
        setId(product.id)
        setName(product.name)
        setPrice(product.price)
        setCategory(product.category)
        setQuantity(product.quantity)
        setInStock(product.inStock)
    }

  },[])


  const editProduct = () => {

    var prodObj = {
      name,
      price,
      category,
      quantity,
      inStock
    }
    
      Axios.put('http://localhost:3000/product/'+id, prodObj)
        .then(response => {
          if (response.status === 200) {
            props.route.params.editProd();
            alert('Product Updated')
            props.navigation.pop();
          }
        }).catch(err => {
          console.log(err)
          alert('Try again later')
        })

  }

  return (<View style={globalStyle.container}>
    <Text style={globalStyle.headerStyle}>Edit Product</Text>

    <TextInput style={globalStyle.inputBoxStyle} value={name} placeholder="enter product name" autoFocus onChangeText={data => setName(data)}></TextInput>
   
    <TextInput style={globalStyle.inputBoxStyle} value={price} placeholder="enter product price" keyboardType='numeric' onChangeText={value => setPrice(value)}></TextInput>
   
    <TextInput style={globalStyle.inputBoxStyle} value={quantity} placeholder="enter product quantity" keyboardType='numeric' onChangeText={value => setQuantity(value)}></TextInput>
   

    <Picker style={globalStyle.pickerStyle}
      selectedValue={category}
      onValueChange={currentCategory => setCategory(currentCategory)}>
      <Picker.Item label="Mobile" value="Mobile" />
      <Picker.Item label="Laptop" value="Laptop" />
      <Picker.Item label="Trouser" value="Trouser" />
      <Picker.Item label="Tshirt" value="Tshirt" />
    </Picker>

    <Picker style={globalStyle.pickerStyle}
      selectedValue={inStock}
      onValueChange={stock => setInStock(stock)}>
      <Picker.Item label="Yes" value="Yes" />
      <Picker.Item label="No" value="No" />
    </Picker>

    <TouchableOpacity>
      <Text style={globalStyle.addBtnStyle} onPress={editProduct}>Update Product</Text>
    </TouchableOpacity>


  </View>);
};