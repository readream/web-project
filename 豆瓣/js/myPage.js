var write = document.getElementById('write')
var mask = document.getElementById('mask')
var diary = document.getElementById('diary')
var close = document.getElementById('close')
var submit = document.getElementById('submit')
//点击写日记按钮遮罩层和表单出现
write.onclick = function () {
  mask.style.display = 'block'
  diary.style.display = 'block'
  diaryPosition(diary)
  maskPosition()
}
//触发滚动条和改变窗口大小黑色背景依旧全覆盖
window.onscroll = function () {
  if (diary.style.display == 'none') { return; }
  maskPosition();
}
window.onsize = function () {
  if (diary.style.display == 'none') { return; }
  addjustPosition(diary);
  if (mask.style.display == 'none') { return; }
  maskPosition();
}
close.onclick = function () {
  hide(diary)
  hide(mask)
}
submit.onclick = function () {
  hide(diary)
  hide(mask)
}
//弹窗位置调整
function diaryPosition(obj) {
  console.log(document.documentElement.clientWidth, document.documentElement.clientHeight)
  console.log(obj.offsetWidth, obj.offsetHeight)
  obj.style.left = (document.documentElement.clientWidth - obj.offsetWidth) / 2 + "px";
  obj.style.top = (document.documentElement.clientHeight - obj.offsetHeight) / 2 + 100 + "px";
}
//遮罩层背景定位
function maskPosition() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  mask.style.width = Math.max(document.body.offsetWidth, document.documentElement.clientWidth) + 'px';
  mask.style.height = Math.max(document.body.offsetHeight, document.documentElement.clientHeight) + scrollTop + 'px';
}
