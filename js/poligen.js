function scrollToAnchor(aid){
        var aTag = $("#"+ aid);
            $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#linkHome").click(function() {
    scrollToAnchor('logoarea');
});

$("#linkAtividadesFuturas").click(function() {
    scrollToAnchor('atividadesFuturas');
});

$("#linkAtividadesPassadas").click(function() {
    scrollToAnchor('atividadesPassadas');
});

$("#linkHistorico").click(function() {
    scrollToAnchor('historico');
});

$("#linkQuemSomos").click(function() {
    scrollToAnchor('quemSomos');
});

$("#linkContato").click(function() {
    scrollToAnchor('contato');
});


$(document).ready(function(){
    $("#logo").removeClass("logoinit");
    $("#logo.lento").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ $("#logo").removeClass("lento");});
});
