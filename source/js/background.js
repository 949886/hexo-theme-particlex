!(function () {
  var density = (window.innerWidth + window.innerHeight) / 8,
    t = 0.2,
    a = 50,
    o = document.getElementById("background"),
    e = o.getContext("2d"),
    i = 1,
    r = void 0,
    d = void 0,
    h = [],
    y = void 0,
    x = void 0,
    position = { x: 0, y: 0, tx: 0, ty: 0, z: 5e-4 },
    u = !1;
  function c(n) {
    (n.x = Math.random() * r), (n.y = Math.random() * d);
  }
  function v() {
    (i = window.devicePixelRatio || 1),
      (r = window.innerWidth * i),
      (d = window.innerHeight * i),
      (o.width = r),
      (o.height = d),
      h.forEach(c);
  }
  !(function () {
    for (var a = 0; a < density; a++)
      h.push({ x: 0, y: 0, z: t + 0.8 * Math.random() });
  })(),
    v(),
    (function n() {
      e.clearRect(0, 0, r, d),
        (position.tx *= 0.95),
        (position.ty *= 0.95),
        (position.x += 0.7 * (position.tx - position.x)),
        (position.y += 0.7 * (position.ty - position.y)),
        h.forEach(function (n) {
          var o, e, i, h;
          (n.x += position.x * n.z),
            (n.y += position.y * n.z),
            (n.x += (n.x - r / 2) * position.z * n.z),
            (n.y += (n.y - d / 2) * position.z * n.z),
            (n.z += position.z),
            (n.x < -50 || n.x > r + a || n.y < -50 || n.y > d + a) &&
              ((o = n),
              (e = "z"),
              (i = Math.abs(position.tx)),
              (h = Math.abs(position.ty)),
              i > 1 &&
                h > 1 &&
                (e =
                  "h" ==
                  (i > h
                    ? Math.random() < Math.abs(position.x) / (i + h)
                      ? "h"
                      : "v"
                    : Math.random() < Math.abs(position.y) / (i + h)
                    ? "v"
                    : "h")
                    ? position.x > 0
                      ? "l"
                      : "r"
                    : position.y > 0
                    ? "t"
                    : "b"),
              (o.z = t + 0.8 * Math.random()),
              "z" === e
                ? ((o.z = 0.1),
                  (o.x = Math.random() * r),
                  (o.y = Math.random() * d))
                : "l" === e
                ? ((o.x = -3), (o.y = d * Math.random()))
                : "r" === e
                ? ((o.x = r + 3), (o.y = d * Math.random()))
                : "t" === e
                ? ((o.x = r * Math.random()), (o.y = -3))
                : "b" === e && ((o.x = r * Math.random()), (o.y = d + 3)));
        }),
        h.forEach(function (n) {
          e.beginPath(),
            (e.lineCap = "round"),
            (e.lineWidth = 3 * n.z * i),
            (e.strokeStyle = "rgba(102,175,239,.2)"),
            e.beginPath(),
            e.moveTo(n.x, n.y);
          var t = 2 * position.x,
            a = 2 * position.y;
          Math.abs(t) < 0.1 && (t = 0.5),
            Math.abs(a) < 0.1 && (a = 0.5),
            e.lineTo(n.x + t, n.y + a),
            e.stroke();
        }),
        requestAnimationFrame(n);
    })(),
    window.addEventListener("resize", v),
    // window.addEventListener("mousemove", function (n) {
    //   (u = !1),
    //     (function (n, t) {
    //       if ("number" == typeof y && "number" == typeof x) {
    //         var a = n - y,
    //           o = t - x;
    //         (position.tx = position.x + ((a / 8) * i * (u ? -1 : 1)))* 0.3,
    //           (position.ty = position.y + ((o / 8) * i * (u ? -1 : 1)))*0.1;
    //       }
    //       (y = n), (x = t);
    //     })(n.clientX, n.clientY);
    // }),
    window.addEventListener("mouseleave", function () {
      (y = null), (x = null);
    });

    setInterval(function(){
        position.ty += 2;
        position.tx += -0.75;
    },100);

})();
