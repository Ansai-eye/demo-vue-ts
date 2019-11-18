// 为了方便，我们还需要定义一套固定的 axios 返回的格式
export interface AjaxResponse {
  code: number;
  data: any;
  message: string;
}
