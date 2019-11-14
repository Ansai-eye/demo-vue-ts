export default class CommonUtilsWX {
  /**
  * 获取规划路线的状态集合
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


  /**
 *  按照传入格式，格式化时间
 *  formatDate(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *  formatDate(new Date(),"yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 * @param {object} date 需要格式化的时间
 * @param {string} fmt 时间格式
 * @todo hello
 * @author jcs
 */
  request (o, callback) {
    //TODO:xxxx
  }
}