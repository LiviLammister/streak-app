'use strict'

import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

import { TaskListItem } from './index'

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    paddingTop: 22
  },
  headingText: {
    fontSize: 24,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2
  }
})

class TaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sections: [
        {
          title: 'Language',
          data: [
            { name: 'French', key: 1 },
            { name: 'Italian', key: 2 }
          ]
        },
        {
          title: 'Mindfulness',
          data: [
            { name: 'No-Waste', key: 3 },
            { name: 'Meditation', key: 4 }
          ]
        }
      ]
    }
  }

    _renderItem = ({ item }) => {
      return (
        <TaskListItem
          name={item.name}
        />
      )
    }

    _renderSectionHeader = ({ section }) => {
      return (
        <Text style={styles.headingText}>
          {section.title}
        </Text>
      )
    }

    render () {
      return (
        <View style={styles.taskList}>
          <SectionList
            sections={this.state.sections}
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
          />
        </View>
      )
    }
}

export default TaskList
