//swiper
new Swiper(".buy-big-thumnail .swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".buy-big-thumnail .swiper-pagination",
  //     clickable: true,
  //   },
  pagination: {
    el: ".buy-big-thumnail .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".buy-big-thumnail .swiper-prev",
    nextEl: ".buy-big-thumnail .swiper-next",
  },
});

//sequence
$(function () {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var el = document.querySelector(".canvas_wrap");
  var imgLength = 71;
  var imgSrc = "./images/seq/est01-seq/est01-";
  var imgFormat = ".png";
  var imgArray = [];
  var imageIterlator = 0;
  var scrollBody = $(".fix_motion");
  var scrollHeight;
  var scrollRealHeight;
  var winScrollTop;
  var sectionOffsetTop;
  var sectionScrollTop;
  var scrollPercent;
  var percent;
  var imgWidth;
  var imgHeight;

  function setProperty() {
    scrollHeight = scrollBody.height();
    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();
    sectionOffsetTop = scrollBody.offset().top;
    sectionScrollTop = winScrollTop - sectionOffsetTop;
    scrollPercent = sectionScrollTop / scrollRealHeight;
    percent = scrollPercent * 100;
    imgWidth = 700;
    imgHeight = 700;
  }

  function setCanvas() {
    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }

  function bindEvent() {
    $(window).scroll(function () {
      setProperty();
      scrollFunc();
    });
  }

  function scrollFunc() {
    var sequence = Math.min(
      imgLength,
      Math.max(0, Number((imgLength * scrollPercent).toFixed(0)))
    );
    renderCanvas(sequence);
  }

  function renderCanvas(sequence) {
    ctx.clearRect(0, 0, imgWidth, imgHeight);
    ctx.drawImage(imgArray[sequence], 0, 0, imgWidth, imgHeight);
    // console.log(imgArray[sequence]);
  }

  function init() {
    el.appendChild(canvas);
    for (var i = 0; i <= imgLength; i++) {
      var img = new Image();
      var path = imgSrc + i + imgFormat;

      img.src = path;
      imgArray.push(img);

      img.onload = function () {
        imageIterlator += 1;

        if (imageIterlator === imgLength) {
          bindEvent();
          setProperty();
          setCanvas();
          scrollFunc();
        }
      };
    }
  }
  init();
});

$(function () {
  var scrollBody = $("body");
  var scrollHeight;
  var scrollRealHeight;
  var winScrollTop;
  var percent;

  const detailmain = document.querySelector(".detailmain-section");
  const filecover = document.querySelector(".registration-img");
  const blackbg = document.querySelector(".black-bg");
  function setProperty() {
    scrollHeight = scrollBody.height();
    scrollRealHeight = scrollHeight - $(window).height();
    winScrollTop = $(window).scrollTop();
    var scrollPercent = winScrollTop / scrollRealHeight;
    percent = scrollPercent * 100;
    console.log(percent);
    if ((percent > 5 && percent < 20) || percent > 80) {
      blackbg.style.background = "#000";
    } else blackbg.style.background = "transparent";

    if (percent == 0 || percent < 3) {
      filecover.classList.add("movY");
    } else filecover.classList.remove("movY");

    if (percent > 3) {
      filecover.classList.remove("movY");
    }
  }

  function motionM() {
    setProperty();
  }

  function init() {
    motionM();
  }

  $(window).scroll(function (e) {
    motionM();
  });

  init();
});
