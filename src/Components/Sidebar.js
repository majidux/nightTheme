import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableHighlight} from 'react-native';
import dataSidebar from './DataSidebar';
import dataSidebar2 from './DataSidebar2';

export default class Sidebar extends Component {
    
    render() {
        
        return (
            
            
            <View style={styles.sideBar}>
                <View>
                    <View>
                        <View style={styles.titleMenu}>
                            <Text>MENU</Text>
                        </View>
                        {dataSidebar.map((item, i) =>
                            <View key={i} style={[styles._item, item.selected ? styles.selectedBg : null]}>
                                <View style={styles.pictureStyle}>
                                    <Image
                                        source={item.image}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={item.selected ? styles.blueColor : styles.notSelected}>{item.name}</Text>
                                </View>
                            </View>
                        )
                        }
                    </View>
                    <View>
                        <View style={styles.titleMenu}>
                            <Text>GROUPS</Text>
                        </View>
                        {dataSidebar2.map((item, i) =>
                            <View key={i} style={[styles._item, item.selected ? styles.selectedBg : null]}>
                                <View style={styles.pictureStyle}>
                                    <Image
                                        source={item.image}
                                    />
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={item.selected ? styles.blueColor : styles.notSelected}>{item.name}</Text>
                                </View>
                            </View>
                        )
                        }
        
        
                        <View style={styles._item}>
                            <View style={styles.pictureStyle}>
                                <Image
                                    source={require('../Assets/image/add.png')}
                                />
                            </View>
                            <View style={styles.itemText}>
                                <Text style={styles._add}>Add group</Text>
                            </View>
                        </View>
    
    
                    </View>
                </View>
                <View style={styles._item}>
                    <View style={styles.pictureStyle}>
                        <Image
                            source={require('../Assets/image/moon.png')}
                        />
                    </View>
                    <View style={styles.itemText}>
                        <Text style={styles.notSelected}>Dark Mode</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideBar: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRightColor: '#f5f5f5',
        borderRightWidth: 2,
        justifyContent: 'space-between',
    },
    _item: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: 40,
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
    },
    itemText: {
        marginLeft: 20,
        
    },
    titleMenu: {
        paddingLeft: 20,
        // backgroundColor: 'blue',
        paddingVertical: 19,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    blueColor: {
        color: '#0073eb',
        
    },
    selectedBg: {
        backgroundColor: '#edf3fc',
        borderLeftColor: '#0073eb',
        borderLeftWidth: 4,
        paddingLeft: 36,
    },
    notSelected: {
        color: 'black'
    },
    _add: {
        color: '#b5b6b5'
    }
});