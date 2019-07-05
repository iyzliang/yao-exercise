// 使用闭包方案
function youxi () {
  var a = {
    qq: 1,
    ww: 12
  }
  function init () {
    a.HP = 100
  }
  function useQ () {
    a.HP = a.HP - a.qq
  }
  function useW () {
    a.HP = a.HP - a.ww
  }
  function add (xue) {
    a.HP = a.HP + 20
  }
  function getxue () {
    return a.HP
  }
  init()
  return {
    useQ: useQ,
    useW: useW,
    useAdd: add,
    getXue: getxue
  }
}
var app1 = document.querySelector('.app1>p')
var app2 = document.querySelector('.app2>p')
var a = youxi()
var b = youxi()
function BtnA (key) {
  a[key]()
  app1.innerHTML = a.getXue()
}
function BtnB (key) {
  b[key]()
  app2.innerHTML = b.getXue()
}
BtnA('getXue')
BtnB('getXue')