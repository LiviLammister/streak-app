'use strict'

import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  taskListItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5,
    height: 175
  },
  name: { fontSize: 18 }
})

const TaskListItem = (props) => {
  return (
    <View style={styles.taskListItem}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  )
}

TaskListItem.propTypes = {
  name: PropTypes.string
}

export default TaskListItem
