export default ($axios) => {
  return {
    getData: () => $axios.get('/api/get_index_data'),
    // 有参数的情况
    postData: data => $axios.post('/api/get_index_data', data),
    // ...your other api function
  }
}
