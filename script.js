$(document).ready(function(){
    $("h1, p, a").addClass("animate__animated animate__fadeIn")

    setTimeout(function() {
        $("h1, p, a").removeClass("animate__animated animate__flash");
    }, 5000);  // 4s animation duration
});
