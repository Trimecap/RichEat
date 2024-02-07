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

        // Definindo o tamanho do elemento pra animar
        $("#scroll-animate, #scroll-animate-main").css({
            height: heightDocument + "px"
        });

        // Definindo o tamanho dos elementos header e conteúdo
        $("header").css({
            height: windowHeight + "px",
            "line-height": windowHeight + "px"
        });

        $(".wrapper-parallax").css({
            "margin-top": windowHeight + "px"
        });

        scrollFooter(window.scrollY);
    }

    // Chamando a função de ajuste de layout ao carregar a página
    adjustLayout();

    // Chamando a função de ajuste de layout ao redimensionar a janela
    $(window).resize(adjustLayout);

    // ao dar rolagem
    window.onscroll = function () {
        var scroll = window.scrollY;

        $("#scroll-animate-main").css({
            top: "-" + scroll + "px"
        });

        $("header").css({
            "background-position-y": 50 - (scroll * 100) / heightDocument + "%"
        });

        scrollFooter(scroll);
    };
});
