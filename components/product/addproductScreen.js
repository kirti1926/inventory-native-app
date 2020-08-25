import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Picker, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Axios from 'axios';
import { globalStyle } from '../../public/styles';

export default function AddProductScreen(props) {

  console.log(props)

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Mobile');
  const [inStock, setInStock] = useState('yes');
  const [quantity, setQuantity] = useState('');

  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const handleNameChange = (value) => {
    console.log(value)
    if (value === "" || value === null || value === undefined) {
      setNameError('Product name is required')
    } else {
      setNameError(null)
      setName(value)
    }
  }
  const handlePriceChange = (value) => {
    if (value === "" || value === null || value === undefined || value === 0) {
      setPriceError('Product price is required')
    } else {
      setPriceError(null)
      setPrice(value)
    }
  }

  const handleQuantityChange = (value) => {
    if (value === "" || value === null || value === undefined || value === 0) {
      setQuantityError('Product quantity is required')
    } else {
      setQuantityError(null)
      setQuantity(value)
    }
  }


  const formValidation = () => {
    if (nameError === null && priceError === null && quantityError === null) {
      return true
    }
    else
      return false
  }



  const addProduct = () => {

    var prodObj = {
      name,
      price,
      category,
      quantity,
      inStock
    }
    let valid = formValidation()
    console.log(valid,nameError,priceError,quantityError)
    if (!valid)
      alert('Please provide name,price and quantity')
    else {
      Axios.post('http://localhost:3000/product', prodObj)
        .then(response => {
          if (response.status === 201) {
            props.route.params.addProducts(prodObj);
            alert('Product Added')
            props.navigation.pop();
          }
        }).catch(err => {
          console.log(err)
          alert('Try again later')
        })
    }

  }
  return (<View style={globalStyle.container}>
    <Text style={globalStyle.headerStyle}>Add Product</Text>

    <TextInput style={globalStyle.inputBoxStyle, nameError ? globalStyle.textinvalidInput : globalStyle.inputBoxStyle} placeholder="enter product name" autoFocus onChangeText={value => handleNameChange(value)}></TextInput>
    <Text style={(nameError !== null) ? globalStyle.textInvalid : globalStyle.hidden}>{nameError}</Text>

    <TextInput style={globalStyle.inputBoxStyle, priceError ? globalStyle.textinvalidInput : globalStyle.inputBoxStyle} placeholder="enter product price" keyboardType='numeric' onChangeText={value => handlePriceChange(value)}></TextInput>
    <Text style={(priceError !== null) ? globalStyle.textInvalid : globalStyle.hidden}>{priceError}</Text>

    <TextInput style={globalStyle.inputBoxStyle, quantityError ? globalStyle.textinvalidInput : globalStyle.inputBoxStyle} placeholder="enter product quantity" keyboardType='numeric' onChangeText={value => handleQuantityChange(value)}></TextInput>
    <Text style={(quantityError !== null) ? globalStyle.textInvalid : globalStyle.hidden}>{quantityError}</Text>


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
      <Text style={globalStyle.addBtnStyle} onPress={addProduct}>Add Product</Text>
    </TouchableOpacity>


  </View>);
};