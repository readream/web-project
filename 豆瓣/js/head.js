var download = document.getElementById('download')
var account = document.getElementById('account')
var downImg = document.getElementById('list').getElementsByTagName('img')[0]
var accountList = document.getElementById('list').getElementsByTagName('ul')[1]
var timer = null
// 显示函数
function show(obj) {
  obj.style.display = 'block'
}
// 隐藏函数
function hide(obj) {
  obj.style.display = 'none'
}
//滑过显示/隐藏下载客户端
download.onmouseenter = function () {
  show(downImg)
}
download.onmouseleave = function () {
  hide(downImg)
}
//滑过显示/隐藏账号信息
account.onmouseenter = function () {
  show(accountList)
}
account.onmouseleave = function () {
  timer = setTimeout(function () {
    hide(accountList)
  }, 1000)
}
accountList.onmouseenter = function () {
  clearTimeout(timer)
  show(accountList)
}
accountList.onmouseleave = function () {
  hide(accountList)
}
