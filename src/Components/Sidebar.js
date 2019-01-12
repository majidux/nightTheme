import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <View style={styles.className}>
                <View>
                    <View style={styles.titleMenu}>
                        <Text>MENU</Text>
                    </View>
                    <View style={styles._item}>
                        <View>
                            <Image
                                source={require('../Assets/image/result.png')}
                            />
                        </View>
                        <View style={styles.itemText}>
                            <Text>My Courses</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor: 'lightgreen',
        borderRightColor: '#f5f5f5',
        borderRightWidth: 2,
    },
    _item: {
        flexDirection: 'row',
        backgroundColor: 'red',
        height: 40,
        // justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40
    },
    itemText:{
        marginLeft: 20
    },
    titleMenu:{
        paddingLeft: 20,
        backgroundColor:'blue',
        paddingVertical: 20,
        justifyContent: 'center',
        // alignItems: 'center'
    }
});