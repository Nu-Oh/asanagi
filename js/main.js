console.log("main.js読み込み確認");

  $(function () {
    console.log("jQuery実行確認");

  });

$(function () {
  
  console.log("readyイベント発火");

    // ハンバーガーメニュー
    $(".toggle_btn").on("click", function () {
      $("header").toggleClass("open");
    });

    $("nav a, .btn-reserve").on("click", function () {
      $("header").removeClass("open");
    });

    // stayのアーチ
    const swiper = new Swiper('.stay-slider .swiper', {
      loop: true,               // ループ有効
      speed: 800,               // 切り替えスピード（ミリ秒）
      centeredSlides: true,     // アクティブなスライドを中央に
      slidesPerView: 1.5,       // 前後のスライドを少し見せる（画面幅に合わせて調整）
      effect: 'creative',       // クリエイティブエフェクトを有効化
      creativeEffect: {
        limitProgress: 3,       // 前後何枚までエフェクトを計算するか
        prev: {
          // 左側に消えていくスライドの動き
          translate: ['-110%', '30%', -90], // [X軸, Y軸, Z軸(奥行き)]
          rotate: [0, 0, -10],               // [X軸, Y軸, Z軸の回転角度]
          origin: 'center bottom',           // 回転の軸を画像の下中央に
        },
        next: {
          // 右側から現れるスライドの動き
          translate: ['110%', '30%', -90],  // [X軸, Y軸, Z軸(奥行き)]
          rotate: [0, 0, 10],                // [X軸, Y軸, Z軸の回転角度]
          origin: 'center bottom',           // 回転の軸を画像の下中央に
        }
      }
    });

    // cafeのスライドアニメーション
    $(".cafe-items").slick({
    // 矢印非表示
    arrows: false,
    // 中央揃え？両端見切れ状態になる
    centerMode: true,
    // センターモードの時、見切れたコンテンツの幅をpxや％で指定できる
    centerPadding: "2%",
    // １スライダーの表示数
    slidesToShow: 5,
    // 自動再生
    autoplay: true,
    // 自動再生のスピード（ミリ秒設定：1000ミリ秒＝1秒）
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          centerPadding: "2%",
          slidesToShow: 3,
        },
      },
    ],
  });

    // farmtimeのスライドアニメーション
    $(window).scroll(function () {
    $(".farmtime-item--left").each(function () {
      // ページの一番上からどれだけスクロールしたかどうか
        var scroll = $(window).scrollTop();
      // ページの一番上から要素までの距離
        var target = $(this).offset().top;
      // ブラウザの画面の高さ
        var windowHeight = $(window).height();
        if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("farmtime-ani");
        }
    });
    });
    $(window).scroll(function () {
    $(".farmtime-item--right").each(function () {
      // ページの一番上からどれだけスクロールしたかどうか
        var scroll = $(window).scrollTop();
      // ページの一番上から要素までの距離
        var target = $(this).offset().top;
      // ブラウザの画面の高さ
        var windowHeight = $(window).height();
        if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("farmtime-ani");
        }
    });
    });

    // スクロールアニメーション
    $('a[href^="#"]').click(function () {
      // クリックしたaタグのリンクを取得
      let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
      let target = $(href == "#" || href == "" ? "html" : href);
      // ページトップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
      // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
      $("html, body").animate({ scrollTop:position }, 1000, "swing");
      // urlが変化しないようにfalseを返す
      return false;
    });
});