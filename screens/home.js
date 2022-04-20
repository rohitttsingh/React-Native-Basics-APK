import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class home extends screens {

    render() {
        return (
            <View>
                <Text>This is the home screen</Text>
                <Button title="Settings" onPress={() => this.props.navigation.navigate('SettingScreen')} />
            </View>
        )
    }
}

export default Home
