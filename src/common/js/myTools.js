const u = navigator.userAgent
let tools = {
  // 获取url参数
  getUrlParam(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let result = window.location.search.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
  },
  // 对象转换成数组
  transformArray(obj) {
    let arr = []
    for (let item in obj) {
      arr.push(obj[item])
    }
    return arr
  },
  navigator: {
    // 判断是否是微信浏览器
    isWechat() {
      if (u.indexOf('MicroMessenger') > -1) {
        console.log('wechat')
        return true
      } else {
        console.log('not wechat')
        return false
      }
    },
    // 判断是否是安卓
    isAndroid() {
      if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
        console.log('android')
        return true
      } else {
        console.log('not android')
        return false
      }
    },
    // 判断是否是IOS
    isIos() {
      if (u.match(/\(i[^]+( U)? CPU.+Mac OS X/)) {
        console.log('ios')
        return true
      } else {
        console.log('not ios')
        return false
      }
    },
    // 判断是否是IE
    isIE() {
      if (u.indexOf('Trident') > -1) {
        console.log('IE')
        return true
      } else {
        console.log('not IE')
        return false
      }
    },
    // 判断是否是移动端
    isMobile() {
      if (u.indexOf('Trident') > -1) {
        console.log('Mobile')
        return true
      } else {
        console.log('not Mobile')
        return false
      }
    },
    // 判断是否是PC
    isPC() {
      let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
      let flag = true
      for (let v = 0; v < Agents.length; v++) {
        if (u.indexOf(Agents[v]) > 0) {
          flag = false
          console.log('not PC')
          return flag
        }
      }
      console.log('PC')
      return flag
    }
  }
}

export default tools
