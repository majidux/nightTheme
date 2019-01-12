import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {style} from './style';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerStyle}>
                <View style={styles.left}>
                    <View style={styles.logoView}>
                        <Image
                            source={require('../Assets/image/logo.png')}
                            style={styles._image}
                        />
                    </View>
                    <View style={styles.titleView}>
                        <Text style={styles.titleStyle}>Courses</Text>
                    </View>
                </View>
                <View style={[styles.right,style.flexRow]}>
                    <View style={style.flexRow}><Text>Search</Text></View>
                    <View style={style.flexRow}><Text>Bell</Text></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row'
    },
    left: {
        // backgroundColor: 'red',
        borderRightColor: '#f5f5f5',
        borderRightWidth: 2,
        borderBottomColor:'#f5f5f5',
        borderBottomWidth:2,
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        // backgroundColor: 'blue',
        flex: 4,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    _image: {
        width: 40,
        height: 40
    },
    titleStyle:{
        fontSize:23,
        fontWeight: 'bold',
        color:'black'
    },
    titleView:{
        flex:3,
        // backgroundColor:'red'
    },
    logoView:{
        flex:1,
        // backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});