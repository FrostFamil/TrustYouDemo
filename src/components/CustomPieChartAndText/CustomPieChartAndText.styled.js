import {StyleSheet} from 'react-native';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    pieChartView: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      fontSize: 17,
      fontWeight: '500',
      left: 12,
    },
    tableTextView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
    },
    tableText: {
      fontSize: 15,
      fontWeight: '500',
    },
    line: {
      marginTop: 10,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    frequencyTextView: {
      width: '21%',
    },
  });
};

export default styles;
