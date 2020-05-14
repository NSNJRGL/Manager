import React from 'react';
import {View, StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const TopCalendar = () => {
  const locale = {
    name: 'mn',
    config: {
      weekdaysShort: 'Ня_Да_Mя_Лх_Пү_Ба_Бя'.split('_'),
    },
  };

  const datesBlacklist = [
    {
      start: moment().weekday(0),
      end: moment().subtract(1, 'days'),
    },
  ];

  return (
    <View style={styles.container}>
      <CalendarStrip
        style={styles.calendar}
        locale={locale}
        leftSelector={[]}
        rightSelector={[]}
        showMonth={false}
        markedDates={[
          {
            date: new Date(),
            dots: [{key: 0, color: 'red', selectedDotColor: 'blue'}],
          },
        ]}
        datesBlacklist={datesBlacklist}
        markedDatesStyle={styles.disabledDate}
        disabledDateNameStyle={styles.disabledLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    height: 80,
  },
  disabledDate: {
    backgroundColor: '#FA434A',
  },
  disabledLabel: {
    color: '#000000',
  },
});

export default TopCalendar;
