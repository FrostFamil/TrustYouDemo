import axios from 'axios';

const BASE_URL =
  'https://front-end-technical-test-api.integration.eu.cloud.trustyou.net';

const getReviewDistribution = async () => {
  const url = `${BASE_URL}/review-distribution`;
  const data = await axios.get(url).catch(err => {
    return err;
  });

  return data;
};

const getReview = async ({
  filter_type = 'guest_type',
  filter_value = 'family',
}) => {
  const url = `${BASE_URL}/reviews?filter_type=${filter_type}&filter_value=${filter_value}`;
  const data = await axios.get(url).catch(err => {
    return err;
  });

  console.log(url);
  return data;
};

export default {
  getReviewDistribution,
  getReview,
};
