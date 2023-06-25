$(".card1").addClass("scale");
$(".card1").find(".tick").addClass("activeColor")
$(".card").on("click",function(){
    $(".scale").removeClass("scale")
    $(".activeColor").removeClass("activeColor")
    $(".activeColor2").removeClass("activeColor2")
    $(".activeColor3").removeClass("activeColor3")
    $(".activeColor4").removeClass("activeColor4")

    
    $(this).addClass("scale")
    $(this).find(".tick").addClass("activeColor")
    $(this).find(".standard-tick").addClass("activeColor2")
    $(this).find(".basic-tick").addClass("activeColor3")
    $(this).find(".mobile-tick").addClass("activeColor4")


})
$("#signOut").on("click",function(){
    
    window.location.href="index.html"
})
$("#btn").on("click",function(){
    
    window.location.href="login-page.html"
})