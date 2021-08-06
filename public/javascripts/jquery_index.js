$(document).ready(()=>{

  var mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 500,
    
  })

  // Initialize the size for the news div
  var cW = $("#div-content").css("width")
  var cH = $("#div-content").css("height")

  $(".news").css("width", cW)
  $(".news").css("height", cH)
  $(".news").css("width", "85%")
  $(".news").css("height", "75%")





  // Make the alert at the top of the page fade in and out every second
  setInterval(()=>{
    $("#div-buffer-alerts").animate({opacity: 0.25}, 1000, ()=>{
      $("#div-buffer-alerts").animate({opacity: 1.0}, 1000)
    })
  }, 2000)


  

  // Cause the news div to fade in and out when the mouse enters and leaves
  $(".news").mouseenter(()=>{
    $(".news").stop(true,true).animate({
      "opacity": 1}, 500)
  })
  $(".news").mouseleave(()=>{
    $(".news").stop(true,true).animate({
      "opacity": 0.5}, 500)
  })
  /*
  $(".objectName").event(()=>{
    $(".objectName").animate({
      "propertyX": valueX,
      "propertyY": valueY,
      "propertyZ:" valueZ}, 500)
  })
  */








  // Legacy code that is a good idea that wasn't implemented to the degree properly to meet the design goal
  // On monitors that are much wider than they are tall, the img inside of the div will have white margins on the ...
  // ... sides which looks odd. The idea here is to get that difference in size, the margins on the side, and add ...
  // ... them to the top and bottom as well
  // var divContent1 = $("#div-content1").css("width")
  // var imgMainpage = $("#img-mainpage").css("width")
  //
  // divContent1 = parseInt(divContent1, 10)
  // imgMainpage = parseInt(imgMainpage, 10)
  //
  // var delta = divContent1 - imgMainpage
  // var delta = delta / 2
  //
  // $("#img-mainpage").css("marginTop", delta)
  // $("#img-mainpage").css("marginBottom", delta)
})
