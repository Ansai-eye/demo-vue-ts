import request from '../utils/request.js';
// get
export function get(params: any) {
  return request({
    url: '/api/getSomething',
  });
}

// post
export function post(params: any) {
  return request({
    url: '/api/postSomething',
    method: 'post',
    data: params,
  });
}
