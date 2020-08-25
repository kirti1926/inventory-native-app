import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    addFormStyle: {
        margin: 5,
        width: "100%"
    },
    addBtnStyle: {
        color: '#007bff',
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        margin: 5,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
    deleteBtnStyle: {
        color: '#dc3545',
        backgroundColor: 'transparent',
        borderColor: '#dc3545',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        margin: 5,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    inputSearchBoxStyle: {
        padding: 12,
        margin: 5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    inputBoxStyle: {
        padding: 12,
        margin: 5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    imageStyle: {
        height: 150
    },
    card: {
        borderColor: 'rgba(0,0,0,.125)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: 'white',
        margin: 5
    },
    listItemStyle: {
        padding: 25,
    },
    listTextStyle: {
        fontWeight: "bold"
    },
    pickerStyle: {
        padding: 8,
        margin: 5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    textinvalidInput: {
        borderColor: 'red',
        padding: 12,
        margin: 5,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    textInvalid: {
        color: 'red',
        margin: 5
    },
    hidden: {
        display: 'none'
    },
    fixToText: {
        flexDirection: 'row',
        margin:5
    },
    btnMarginStyle:{
        paddingLeft:6
    },
    headerBtnStyle:{
        paddingRight:5
    }
})