import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import analyticsApi from '../../api/analyticsApi';
import moment from 'moment';
import styles from './Details.styled';

const Details = ({route}) => {
  const style = styles();
  const [review, setReviews] = useState([]);

  useEffect(() => {
    if (route.params) {
      const {filter_type, filter_value} = route.params;
      analyticsApi.getReview({filter_type, filter_value}).then(res => {
        setReviews(res.data.data);
      });
    }
  }, [route.params]);

  return (
    <View style={style.container}>
      <FlatList
        data={review}
        renderItem={({item}) => (
          <View style={style.flatListInnerView}>
            <Text style={style.text}>Title: {item.review_title}</Text>
            <Text style={style.text}>Author: {item.guest_name}</Text>
            <Text style={style.text}>
              Creation Date: {moment(item.creation_date).format('MM.DD.YYYY')}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Details;
