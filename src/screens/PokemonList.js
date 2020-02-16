import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const dataList = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '5' }, { key: '5' }]
const numColumns = 2;

const WIDTH = Dimensions.get('window').width;

// console.log(dataList);
class PokemonList extends Component {

    formData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRows = dataList.length - (totalRows * numColumns);

        while (totalLastRows !== 0 && totalLastRows !== numColumns) {
            dataList.push({ key: 'blank', empty: true })
            totalLastRows++
        }
        return dataList
    }

    handlePress = () => {
        this.props.navigation.navigate('PokemonDetail');
        // alert('test');
    }

    _renderItem = ({ item, index }) => {
        let { itemStyles, itemText, itemInvisible, boxTitle, boxTextTitle, imageStyles, subTextTitle } = styles

        if (item.empty) {
            return <View style={[itemStyles, itemInvisible]}></View>
        }
        return (

            <View style={itemStyles}>
                <TouchableOpacity

                    onPress={this.handlePress}>
                    <Image source={{ uri: "https://img.okeinfo.net/content/2019/03/11/326/2028300/developer-game-pokemon-go-raih-untung-rp35-triliun-T61uqEIjZl.jpg" }} style={imageStyles} />
                    <View style={boxTitle}>

                        <Text style={boxTextTitle}> 041 - Pikachu</Text>
                        <Text style={subTextTitle}>dfsfh</Text>

                    </View>
                </TouchableOpacity>

            </View >

        )

    }

    render() {
        let { container, textPokemon } = styles
        return (
            <View style={container}>
                <FlatList
                    data={this.formData(dataList, numColumns)}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>

        );
    }
}

export default PokemonList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    itemStyles: {
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column-reverse',
        margin: 3,
        height: WIDTH / numColumns
    },
    itemText: {
        color: '#fff',
        fontSize: 30
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    boxTitle: {
        backgroundColor: '#dff6f0',
        opacity: 0.8,
        height: 55,
        width: '100%',
        position: 'absolute',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center'
    },
    boxTextTitle: {
        fontSize: 18,
        marginLeft: 3,
    },
    subTextTitle: {

        fontSize: 13,
        marginLeft: 9,
        marginTop: -6
    },
    imageStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    textPokemon: {
        fontSize: 20,
        textAlign: 'center',
    }
}) 