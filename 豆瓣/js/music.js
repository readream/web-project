window.onload = function () {
  // 轮播图
  var ads = document.getElementById('ads')
  var imgList = ads.getElementsByTagName('img')
  var dotList = ads.getElementsByTagName('ul')[1].getElementsByTagName('li')
  var index = 0
  var len = imgList.length
  var timer = null
  // 使用setInterval实现轮播
  timer = setInterval(autoPlay, 2000)
  //鼠标移入图片中停止轮播
  ads.onmouseenter = function () {
    clearInterval(timer)
  }
  ads.onmouseleave = function () {
    timer = setInterval(autoPlay, 2000)
  }
  //点击圆点切换图片
  for (var i = 0; i < len; i++) {
    (function (i) {
      dotList[i].onclick = function () {
        changePic(i)
      }
    })(i)
  }
  // 定义自动轮播函数
  function autoPlay() {
    index++
    if (index >= len) {
      index = 0
    }
    changePic(index)
    console.log('1111')
  }
  //定义图片切换函数
  function changePic(curIndex) {
    for (var i = 0; i < imgList.length; i++) {
      imgList[i].className = 'unshow'
      dotList[i].className = ''
    }
    imgList[curIndex].className = 'show'
    dotList[curIndex].className = 'active'
  }
  // 轮播图结束
  // 音乐人切换
  var singer = document.getElementById('singer')
  var fash = document.getElementById('fash1')
  var quik = document.getElementById('quik1')
  var div = singer.getElementsByTagName('div')
  fash.onclick = function () {
    quik.className = ''
    this.className = 'show1'
    div[0].className = 'show'
    div[1].className = ''
  }
  quik.onclick = function () {
    fash.className = ''
    this.className = 'show1'
    div[0].className = ''
    div[1].className = 'show'
  }
  //推荐
  var sen2 = document.getElementById("sen2");
  var sen3 = document.getElementById("sen3");
  var but1 = document.getElementById("but1");
  var but2 = document.getElementById("but2");
  but1.onclick = function () {
    this.style.background = "#80cfbb";
    but2.style.background = "#23ab88";
    sen3.className = "";
    sen2.className = "show";
  }
  but2.onclick = function () {
    this.style.background = "#80cfbb";
    but1.style.background = "#23ab88";
    sen2.className = "";
    sen3.className = "show";
  }

  //hot列表
  var li = document.getElementById("hot").getElementsByTagName("a");
  var lis = document.getElementById("hot-lis").getElementsByTagName("ul");

  for (var m = 0; m < lis.length; m++) {
    li[m].index = m;
    li[m].onclick = function () {
      for (var n = 0; n < lis.length; n++) {
        li[n].className = "";
        lis[n].className = "";
      }
      this.className = "sec";
      lis[this.index].className = "sec";
    }
  }
}
