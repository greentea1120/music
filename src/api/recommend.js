/*
 * @Author: Greentea
 * @Date: 2017-11-21 15:15:51
 * @Last Modified by: Greentea
 * @Last Modified time: 2017-11-21 16:29:07
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
