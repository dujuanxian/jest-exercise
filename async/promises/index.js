export function fetchData(data) {
  return Promise.resolve('async ' + data);
}

export function fetchDataWithError() {
  return Promise.reject('error');
}
