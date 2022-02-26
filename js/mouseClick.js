
var a_idx = 0;

function getRandomColor(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("白老师威武!", "白老师霸气!", "小白是可爱的!", "白总是美丽的!", "白老师是爱笑的", "白女士是俏皮的", "然后我是喜欢白老师的","剩下的话以后再加！");
        var $w = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $w.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandomColor(255,0)},${getRandomColor(255,0)},${getRandomColor(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($w);
        $w.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $w.remove();
            });
    });
});