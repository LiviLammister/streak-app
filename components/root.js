'use strict'

import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'

import { Dashboard } from './dashboard'
import { TaskList } from './task-list'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 30
//   }
// })

class Root extends Component {
  constructor () {
    super()
    this.state = {selectedTab: 'dashboard'}
  }
  render () {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'dashboard'}
          title={'Dashboard'}
          onPress={() => {
            this.setState({selectedTab: 'dashboard'})
          }}
        >
          <Dashboard />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'tasks'}
          title={'Tasks'}
          onPress={() => {
            this.setState({selectedTab: 'tasks'})
          }}
        >
          <TaskList />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default Root
