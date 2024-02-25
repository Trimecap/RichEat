$(document).ready(function () {
    var footerHeight, heightDocument; // Declaración de variables en el ámbito global

    function scrollFooter(scrollY) {
        console.log(scrollY);
        console.log(footerHeight);

        if (scrollY >= footerHeight) {
            $("footer").css({
                bottom: "0px"
            });
        } else {
            $("footer").css({
                bottom: "-" + footerHeight + "px"
            });
        }
    }

    function adjustLayout() {
        var windowHeight = $(window).height();
        footerHeight = $("footer").height(); // Actualizar footerHeight
        heightDocument =
            windowHeight + $(".cubos-container").height() + footerHeight - 20;

        // Definir el tamaño del elemento para animar
        $("#scroll-animate, #scroll-animate-main").css({
            height: heightDocument + "px"
        });

        // Definir el tamaño de los elementos header y contenido
        $("header").css({
            height: windowHeight + "px",
            "line-height": windowHeight + "px"
        });

        $(".wrapper-parallax").css({
            "margin-top": windowHeight + "px"
        });

        scrollFooter(window.scrollY);
    }

    // Llamar a la función de ajuste de diseño al cargar la página
    adjustLayout();

    // Llamar a la función de ajuste de diseño al redimensionar la ventana
    $(window).resize(adjustLayout);

    // Al hacer scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        $("#scroll-animate-main").css({
            top: "-" + scroll + "px"
        });

        $("header").css({
            "background-position-y": 50 - (scroll * 100) / heightDocument + "%"
        });

        scrollFooter(scroll);
    });
});
