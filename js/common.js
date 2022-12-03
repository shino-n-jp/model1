$(function () {
  //hamburger

  //ハンバーガーをクリックした時
  $(".hamburger").on("click", function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });

  //メニューリンクをクリックした時
  $("#navi a").on("click", function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });

  // BBBが選ばれる理由 左
  $(".inview-slide-left").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらslide-leftクラスを追加
        $(this).stop().addClass("slide-left");
      }
    }
  );
  // BBBが選ばれる理由 右
  $(".inview-slide-right").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらslide-rightクラスを追加
        $(this).stop().addClass("slide-right");
      }
    }
  );

  // 受講生の声
  $(".inview-balloon").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらballoonクラスを追加
        $(this).stop().addClass("balloon");
      }
    }
  );
});

//ハンバーガーメニューの共通処理

function hamburger() {
  $(".hamburger").toggleClass("active");

  if ($(".hamburger").hasClass("active")) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $("#navi").addClass("active");
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $("#navi").removeClass("active");
  }
}
