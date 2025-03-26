// Set the date we're counting down to
var countDownDate = new Date("March 30, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hours">' + hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
    var z = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML =
            '<span id="day">' +
            days +
            "</span>" +
            '<span id="hours">' +
            hours +
            "</span>" +
            '<span id="minutes">' +
            minutes +
            "</span>" +
            '<span id="seconds">' +
            seconds +
            "</span>";
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "";
        var y = document.getElementsByClassName("demos");
        for (var i = 0; i < z.length; i++) {
            y[i].innerHTML = "";
        }
        // document.getElementById("after-expaier").setAttribute("id", "offer-expaier-text")
        var g = document.getElementsByClassName("after-expaier");
        for (var i = 0; i < z.length; i++) {
            g[i].classList.add("offer-expaier-text");
        }
        // document.getElementById("offer-expaier-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!!";
        var d = document.getElementsByClassName("offer-expaier-text-inner");
        for (var i = 0; i < z.length; i++) {
            d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        }
        // document.getElementById("offer-blur").style.filter = "blur(2px)"
        var t = document.getElementsByClassName("offer-blur");
        for (var i = 0; i < z.length; i++) {
            t[i].style.filter = "blur(2px)";
        }
    }
}, 1000);

$('.owl-carousel').owlCarousel({
    center: true,
    rtl: true,
    loop: true,
    slideBy: 3,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() >= 3000) {
        $('#top').css({
            'bottom': '30px'
        });
    } else {
        $('#top').css({
            'bottom': '-60px'
        });
    }
});

// این قسمت باید خارج از تابع اسکرول باشد
$('#top').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        'scrollTop': '0'
    }, 1000);
});
// $(document).ready(function () {
//     $('.login-site').click(function (e) {
//         e.preventDefault();
//         Swal.fire({

//             title: "ورود با موفقیت انجام شد",
//             // text: "You clicked the button!",
//             icon: "success"
//         });
//     });
// });

$(document).ready(function () {
    $(".login-form").submit(function (e) {
        e.preventDefault();

        let email = $("#exampleInputEmail1").val().trim();
        let password = $("#exampleInputPassword1").val().trim();

        if (email === "" || password === "") {
            // اضافه کردن ویبره برای موبایل
            if ("vibrate" in navigator) {
                navigator.vibrate(1000); // ویبره برای 500 میلی‌ثانیه
            }

            Swal.fire({
                icon: "error",
                title: "خطا!",
                text: "لطفاً همه فیلدها را پر کنید.",
                confirmButtonText: "باشه",
            });
        } else {
            // نمایش پیام موفقیت و رفرش صفحه بعد از کلیک روی دکمه تأیید
            Swal.fire({
                icon: "success",
                title: "ورود موفق!",
                text: "شما با موفقیت وارد شدید.",
                confirmButtonText: "باشه"
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(); // رفرش صفحه
                }
            });

            // خالی کردن فرم
            $(".login-form")[0].reset();
        }
    });
});

$(document).ready(function () {
    $('#show-pass').click(function () {
        if ($('.pass').attr('type') === "password") {
            $('.pass').attr("type", "text");
            $('#show-pass').removeClass('fa-eye-slash').addClass('fa-eye')

        } else {
            $('.pass').attr("type", "password")
            $('#show-pass').removeClass('fa-eye').addClass('fa-eye-slash')

        }
    });
});
$(document).ready(function () {
    $('.menu-btn').click(function (e) {
        e.preventDefault();
        $('#circle-menu').toggleClass("active")
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) { // وقتی کاربر 100 پیکسل اسکرول کرد
            $("#circle-menu").fadeIn(); // نمایش منو با افکت
        } else {
            $("#circle-menu").fadeOut(); // مخفی کردن منو
        }
    });
});
$(document).ready(function(){
    $('.close').click(function(){
        $('sabad-1').fadeOut();
    });
});







