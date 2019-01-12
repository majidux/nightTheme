import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import dataSidebar from './DataSidebar';

export default class Sidebar extends Component {
    
    render() {
        
        let [item]=dataSidebar;
        return (
            
            
            <View style={styles.sideBar}>
                <View>
                    <View style={styles.titleMenu}>
                        <Text>MENU</Text>
                    </View>
                    {  dataSidebar.map((item,i) =>
                        <View key={i} style={[styles._item,item.selected ? styles.selectedBg : null]}>
                            <View>
                                <Image
                                    source={item.image}
                                />
                            </View>
                            <View style={styles.itemText}>
                                <Text style={item.selected ? styles.blueColor : null}>{item.name}</Text>
                            </View>
                        </View>
                    )
                    }
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
    },
    _item: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: 40,
        // justifyContent: 'center',
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
    blueColor:{
        color:'#0073eb',

    },
    selectedBg:{
        backgroundColor: '#edf3fc',
        borderLeftColor:'#0073eb',
        borderLeftWidth: 4,
    }
});