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
                <View style={[styles.right, style.flexRow]}>
                    <View style={[style.flexRow, style.marginLeft60]}>
                        <Image
                            source={require('../Assets/image/search.png')}
                            style={{width:17,height:17}}
                        />
                        <Text style={styles.searchText}>Search...</Text>
                    </View>
                    <View style={[style.flexRow, style.marginRight60, styles.icons]}>
                        <View>
                            <Image
                                source={require('../Assets/image/bell.png')}
                            />
                        </View>
                        <View style={styles.rightLogos}>
                            <View>
                                <Image
                                    source={require('../Assets/image/Nlogo.png')}
                                />
                            </View>
                            <View>
                                <Image
                                    source={require('../Assets/image/down-arrow.png')}
                                    style={{width:12,height:12}}
                                />
                            </View>
                        </View>
                    </View>
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
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 2,
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        // backgroundColor: 'blue',
        flex: 4,
        // width:1020,
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginHorizontal: 40
    },
    _image: {
        width: 40,
        height: 40
    },
    titleStyle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    titleView: {
        flex: 3,
        // backgroundColor:'red'
    },
    logoView: {
        flex: 1,
        // backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        alignItems: 'center',
        // backgroundColor: 'red',
        width: 120,
        justifyContent: 'space-between'
    },
    rightLogos:{
        justifyContent:'space-between',
        alignItems:'center',
        width:75,
        flexDirection:'row'
    },
    searchText:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    }
});