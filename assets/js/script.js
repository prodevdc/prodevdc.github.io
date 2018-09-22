$(document).ready(() => {
    var particles = {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#faf900","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":155.83419241926586,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};
    particlesJS("particles-js",particles);
    $(".active").click(evt => {
        evt.preventDefault();
    });
    $("#switchMenubar").click(evt => {
        if(document.getElementById("menubar").style.width == "auto") {
            $("#switchMenubar i").attr("class","fa fa-angle-double-left");
            openNav();
        } else {
            $("#switchMenubar i").attr("class","fa fa-angle-double-right");
            closeNav();
        }
    });
});

function openNav() {
    $("#menubar li .text").get().forEach(el=>el.style.visibility = "visible");
    document.getElementById("menubar").style.width = "15%";
    document.getElementById("content").style.marginLeft = "15%";
}

function closeNav() {
    $("#menubar li .text").get().forEach(el=>el.style.display = "hidden");
    document.getElementById("menubar").style.width = "auto";
    document.getElementById("content").style.marginLeft = $("#menubar").width() + "px";
}