import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dashboard';
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Dashboard
                </Text>
            </View>
        )
    }
}

export default Dashboard;
