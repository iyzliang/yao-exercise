// 使用构造函数方案
function Youxi () {
  this.a = {
    qq: 1,
    ww: 12
  }
  this.HP = 0
  this.init()
}

Youxi.prototype.init = function () {
  this.HP = 100
}
Youxi.prototype.useQ = function () {
  this.HP = this.HP - this.a.qq
}
Youxi.prototype.useW = function () {
  this.HP = this.HP - this.a.ww
}
Youxi.prototype.useAdd = function () {
  this.HP = this.HP + 20
}
Youxi.prototype.getXue = function () {
  return this.HP
}