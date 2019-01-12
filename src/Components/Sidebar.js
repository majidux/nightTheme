import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Sidebar extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Sidebar</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
        backgroundColor:'lightgreen',
        borderRightColor:'grey',
        borderRightWidth:2,
    }
});