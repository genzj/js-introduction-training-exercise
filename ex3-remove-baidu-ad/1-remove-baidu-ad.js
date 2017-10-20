(function () {
  var l=document.getElementById('content_left');
  var ad = [];

  for (var i = 0; i < l.childElementCount; i++) {
    var ele = l.children[i];

    if (ele.tagName !== 'DIV') continue;
    else if (ele.classList.contains('result')) continue;
    else if (ele.classList.contains('result-op')) continue;

    ad.push(ele)
  }

  ad.forEach(function (ele) { l.removeChild(ele) })
})();
