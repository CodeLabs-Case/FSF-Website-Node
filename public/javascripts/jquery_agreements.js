$(document).ready(()=>{
  var ulHeight = $(".ul-agreements").offset().top

  // Set the agreements tab to be colored red first as it is was is shown at the document.ready
  $(".ul-agreements li:nth-child(1)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")

$(".ul-agreements li:nth-child(1)").on("click", ()=>{
  $("#div-content1").css("z-index", 4)
  $("#div-content2").css("z-index", 3)
  $("#div-content3").css("z-index", 2)
  $("#div-content4").css("z-index", 1)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
})
$(".ul-agreements li:nth-child(2)").on("click", ()=>{
  $("#div-content1").css("z-index", 1)
  $("#div-content2").css("z-index", 4)
  $("#div-content3").css("z-index", 3)
  $("#div-content4").css("z-index", 2)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
})
$(".ul-agreements li:nth-child(3)").on("click", ()=>{
  $("#div-content1").css("z-index", 2)
  $("#div-content2").css("z-index", 1)
  $("#div-content3").css("z-index", 4)
  $("#div-content4").css("z-index", 3)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
})
$(".ul-agreements li:nth-child(4)").on("click", ()=>{
  $("#div-content1").css("z-index", 3)
  $("#div-content2").css("z-index", 2)
  $("#div-content3").css("z-index", 1)
  $("#div-content4").css("z-index", 4)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#FF1515")
})





// Code for the footer site map links and tab color for cooresponding page
// Extract the fragment
var id = window.location.hash.substring(1)

if(id == 1){
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 4)
  $("#div-content2").css("z-index", 3)
  $("#div-content3").css("z-index", 2)
  $("#div-content4").css("z-index", 1)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
}
else if(id == 2){
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 1)
  $("#div-content2").css("z-index", 4)
  $("#div-content3").css("z-index", 3)
  $("#div-content4").css("z-index", 2)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
}
else if(id == 3){
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 2)
  $("#div-content2").css("z-index", 1)
  $("#div-content3").css("z-index", 4)
  $("#div-content4").css("z-index", 3)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
}
else if(id == 4){
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 3)
  $("#div-content2").css("z-index", 2)
  $("#div-content3").css("z-index", 1)
  $("#div-content4").css("z-index", 4)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#FF1515")
}

// For Agreements
$("#ul-footer1 li:nth-child(2)").on("click", ()=>{
  // Scroll up the page for the user
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 4)
  $("#div-content2").css("z-index", 3)
  $("#div-content3").css("z-index", 2)
  $("#div-content4").css("z-index", 1)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
})
$("#ul-footer1 li:nth-child(3)").on("click", ()=>{
  // Scroll up the page for the user
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 1)
  $("#div-content2").css("z-index", 4)
  $("#div-content3").css("z-index", 3)
  $("#div-content4").css("z-index", 2)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
})
$("#ul-footer1 li:nth-child(4)").on("click", ()=>{
  // Scroll up the page for the user
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 2)
  $("#div-content2").css("z-index", 1)
  $("#div-content3").css("z-index", 4)
  $("#div-content4").css("z-index", 3)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#FF1515")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#EEEEEE")
})
$("#ul-footer1 li:nth-child(5)").on("click", ()=>{
  // Scroll up the page for the user
  window.scrollTo({ top: ulHeight, behavior: 'smooth' });
  $("#div-content1").css("z-index", 3)
  $("#div-content2").css("z-index", 2)
  $("#div-content3").css("z-index", 1)
  $("#div-content4").css("z-index", 4)

  $(".ul-agreements li:nth-child(1)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(2)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(3)").css("background-color", "#EEEEEE")
  $(".ul-agreements li:nth-child(4)").css("background-color", "#FF1515")
})

})
