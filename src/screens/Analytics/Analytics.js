import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import analyticsApi from '../../api/analyticsApi';
import CustomPieChartAndText from '../../components/CustomPieChartAndText/CustomPieChartAndText';
import styles from './Analytics.styled';

const Analytics = ({navigation}) => {
  const style = styles();
  const [reviewDistribution, setReviewDistribution] = useState([]);

  useEffect(() => {
    analyticsApi.getReviewDistribution().then(res => {
      setReviewDistribution(res.data.data);
    });
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={Object.keys(reviewDistribution)}
        renderItem={({item}) => (
          <CustomPieChartAndText
            title={item}
            data={reviewDistribution[item]}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Analytics;
