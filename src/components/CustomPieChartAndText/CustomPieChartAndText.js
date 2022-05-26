import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import PieChart from 'react-native-pie-chart';
import styles from './CustomPieChartAndText.styled';
import Line from '../Line/Line';
import {screenNames, texts} from '../../utils/constantTexts';
import {normalizeText} from '../../utils/helperFunctions';

const CustomPieChartAndText = ({title, data, navigation}) => {
  const style = styles();
  const sliceColor = [
    '#F44336',
    '#2196F3',
    '#FFEB3B',
    '#4CAF50',
    '#FF9800',
    '#631C17',
    '#184D78',
    '#574F0F',
    '#155917',
    '#5C4119',
  ];

  return (
    <View style={style.container}>
      <Text style={style.text}>{normalizeText(title)}</Text>
      <View style={style.pieChartView}>
        <PieChart
          widthAndHeight={250}
          series={Object.values(data)}
          sliceColor={sliceColor}
        />
      </View>

      <View>
        <View style={style.tableTextView}>
          <Text style={style.tableText}>{texts.RESPONSE_VALUE}</Text>
          <Text style={style.tableText}>{texts.FREQUENCY}</Text>
        </View>
        <Line style={style.line} />
        <FlatList
          data={Object.keys(data)}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                style={style.tableTextView}
                onPress={() =>
                  navigation.navigate(screenNames.DETAILS, {
                    filter_type: title,
                    filter_value: item,
                  })
                }>
                <View>
                  <Text style={style.tableText}>{item}</Text>
                </View>

                <View style={style.frequencyTextView}>
                  <Text style={style.tableText}>{data[item]}</Text>
                </View>
              </TouchableOpacity>
              <Line style={style.line} />
            </>
          )}
        />
      </View>
    </View>
  );
};

export default CustomPieChartAndText;
