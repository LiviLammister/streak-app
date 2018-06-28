'use strict'

import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'

import { Dashboard } from './dashboard'
import { TaskListScreen } from './task-list'
import { CalendarScreen } from './calendar'

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
          <TaskListScreen />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'calendar'}
          title={'Calendar'}
          onPress={() => {
            this.setState({selectedTab: 'calendar'})
          }}
        >
          <CalendarScreen />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

export default Root
