import React, { Component } from 'react'
import { View, Image, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Left, Thumbnail, Right, Button } from "native-base";
import { withNavigation } from 'react-navigation';
// import {  } from 'react-native-gesture-handler';

const dataList = [{ key: 'nknkknjjvjvj' }, { key: 'ghgjjjjhh' }, { key: 'ujguggigigiuggigigi' }, { key: '4' }]
const numColumns = 3;

const WIDTH = Dimensions.get('window').width;


class CardDetail extends Component {
    formData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRows = dataList.length - (totalRows * numColumns);

        while (totalLastRows !== 0 && totalLastRows !== numColumns) {
            dataList.push({ key: 'blank', empty: true })
            totalLastRows++
        }
        return dataList
    }

    handleNextEvolution = () => {
        alert("fsf");
    }

    handleBack = () => {
        this.props.navigation.navigate('Home');
    }
    _renderItem = ({ item, index }) => {
        let { itemStyles, itemText, itemInvisible } = styles

        if (item.empty) {
            return <View style={[itemStyles, itemInvisible]}></View>
        }
        return (
            <Button style={itemStyles}>
                <Text style={itemText}>{item.key}</Text>
            </Button>

        )

    }
    render() {
        let { imageStyles, boxContainer } = styles
        return (
            <Container>
                {/* <Header /> */}
                <Content padder>
                    <Card>
                        <CardItem header bordered style={{ backgroundColor: '#706c61' }}>
                            <Body>
                                <Text style={styles.textHeader}>001 - Pikachu</Text>
                                <Text note style={styles.subTextHeader}>NativeBase</Text>
                            </Body>
                        </CardItem>
                        <CardItem >
                            <Body>
                                <Image source={{ uri: "https://img.okeinfo.net/content/2019/03/11/326/2028300/developer-game-pokemon-go-raih-untung-rp35-triliun-T61uqEIjZl.jpg" }} style={imageStyles} />
                            </Body>
                        </CardItem>
                        <CardItem>
                            <View style={boxContainer}>
                                <FlatList
                                    data={this.formData(dataList, numColumns)}
                                    renderItem={this._renderItem}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={numColumns}
                                />
                            </View>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textEvolution}>Evolution</Text>
                        </CardItem>
                        <CardItem>

                            <Left>
                                {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}
                                <TouchableOpacity onPress={this.handleNextEvolution} style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image source={{ uri: 'https://img.okeinfo.net/content/2019/03/11/326/2028300/developer-game-pokemon-go-raih-untung-rp35-triliun-T61uqEIjZl.jpg' }} style={{ width: 50, height: 50, borderRadius: 50 }} />

                                    <Body>
                                        <Text style={styles.textSubEvolution}> 002 - NativeBase</Text>
                                    </Body>
                                </TouchableOpacity>
                                {/* </View> */}
                            </Left>

                        </CardItem>
                        <CardItem footer bordered>
                            <Body></Body>
                            <Right>
                                <Button onPress={this.handleBack} rounded style={styles.btnBack}
                                >
                                    <Text>
                                        Back
                                    </Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default withNavigation(CardDetail);
const styles = StyleSheet.create({
    boxContainer: {
        flex: 1,
    },
    imageStyles: {
        width: '100%',
        height: 150,
    },
    itemStyles: {
        backgroundColor: '#ededed',
        borderRadius: 25,
        height: 25,
        margin: 2,
        padding: 7
    },
    itemText: {
        color: '#000',
        fontSize: 13
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    btnBack: {
        backgroundColor: '#ededed',
        height: 30,
        padding: 8
    },
    textHeader: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff'
    },
    subTextHeader: {
        color: '#fff'
    },
    textEvolution: {
        color: '#706c61',
        fontSize: 20
    },
    textSubEvolution: {
        fontSize: 15,
        // flex: 1,
        // flexDirection: 'row'
    }
})