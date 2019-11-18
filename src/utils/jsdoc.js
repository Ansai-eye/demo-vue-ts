export default class CommonUtilsWX {
  /**
   * 发起网络请求
  * @author jcs
  * @date 2019/11/15 20:43
  * @param {object} o //请求参数对象
  * @param {string} o.host //请求url的域名，如http://xxx.xxx.com
  * @param {string} o.path //请求url的路径，如xxx/xxx
  * @param {object} o.query //请求url的查询段，根据对象中key，value拼成key1=value1&key2=value2的形式
  * @param {string} o.method //请求方法，如GET，POST等
  * @param {object} o.body //请求数据体，仅在method为POST时有效
  * @param {string} o.body.name //请求数据体，仅在method为POST时有效
  * @param {number} o.body.age //请求数据体，仅在method为POST时有效
  * @param {function(Error):void} callback 请求回调，请求成功时error为空
  */
  request (o, callback) {
    //TODO:xxxx
  }
}