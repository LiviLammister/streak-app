import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView
} from 'react-native'
import { Calendar } from 'react-native-calendars'

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1
  }
})

class CalendarScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Calendar
          style={styles.calendar}
          current={'2012-05-16'}
          markingType={'multi-period'}
          markedDates={{
            '2012-05-16': {
              periods: [
                { startingDay: true, endingDay: false, color: '#5f9ea0' },
                { startingDay: true, endingDay: false, color: '#ffa500' }
              ]
            },
            '2012-05-17': {
              periods: [
                { startingDay: false, endingDay: true, color: '#5f9ea0' },
                { startingDay: false, endingDay: true, color: '#ffa500' },
                { startingDay: true, endingDay: false, color: '#f0e68c' }
              ]
            },
            '2012-05-18': {
              periods: [
                { startingDay: true, endingDay: true, color: '#ffa500' },
                { color: 'transparent' },
                { startingDay: false, endingDay: false, color: '#f0e68c' }
              ]
            }
          }}
          hideArrows={false}
        />
      </ScrollView>
    )
  }

  onDayPress = ({dateString}) => {
    this.setState({
      selected: dateString
    })
  }
}

export default CalendarScreen
