(function (psdw) {
  var dpr = 0,
    rem = 0,
    scale = 0;
  var htmlDOM = document.documentElement;
  dpr = window.devicePixelRatio;
  var htmlWidth = htmlDOM.clientWidth || document.body.clientWidth;;
  scale = htmlWidth / psdw;
  rem = psdw / 10 * scale;
  htmlDOM.style.fontSize = rem + 'px';
  htmlDOM.setAttribute('data-dpr', dpr)
})(750)