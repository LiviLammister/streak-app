import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// import { Dashboard } from './dashboard';
import { TaskList } from './task-list';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    }
})

class Root extends Component {
    _renderScene = () => { // eslint-disable-line
        return <TaskList />
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
