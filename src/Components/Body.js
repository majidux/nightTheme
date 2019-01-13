import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Picker} from 'react-native';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state={
            language:''
        }
    }
    render() {
        return (
            <View style={styles.body}>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 120 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="All courses" value="All courses" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: 4,
        backgroundColor:'pink'
    }
});