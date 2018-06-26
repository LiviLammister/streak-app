import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Dashboard } from './dashboard'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})

class Root extends Component {
    _renderScene() {
        return <Dashboard />
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderScene()}
            </View>
        )
    }
}

export default Root;