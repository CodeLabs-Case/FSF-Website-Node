$(document).ready(()=>{
  

  // For the indicator that tells the user what image they are on
  var indicators = ["/static/images/ONE.png",
                   "/static/images/TWO.png",
                   "/static/images/THREE.png"]

    // Set the weight room tab to be colored red first as it is was is shown at the document.ready
    $(".ul-gallerys li:nth-child(1)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")

  $(".ul-gallerys li:nth-child(1)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 8)
    $("#div-content2").css("z-index", 7)
    $("#div-content3").css("z-index", 6)
    $("#div-content4").css("z-index", 5)
    $("#div-content5").css("z-index", 4)
    $("#div-content6").css("z-index", 3)
    $("#div-content7").css("z-index", 2)
    $("#div-content8").css("z-index", 1)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")

  })
  $(".ul-gallerys li:nth-child(2)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 0)
    $("#div-content2").css("z-index", 8)
    $("#div-content3").css("z-index", 7)
    $("#div-content4").css("z-index", 6)
    $("#div-content5").css("z-index", 5)
    $("#div-content6").css("z-index", 4)
    $("#div-content7").css("z-index", 3)
    $("#div-content8").css("z-index", 2)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $(".ul-gallerys li:nth-child(3)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 1)
    $("#div-content2").css("z-index", 0)
    $("#div-content3").css("z-index", 8)
    $("#div-content4").css("z-index", 7)
    $("#div-content5").css("z-index", 6)
    $("#div-content6").css("z-index", 5)
    $("#div-content7").css("z-index", 4)
    $("#div-content8").css("z-index", 3)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $(".ul-gallerys li:nth-child(4)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 2)
    $("#div-content2").css("z-index", 1)
    $("#div-content3").css("z-index", 0)
    $("#div-content4").css("z-index", 8)
    $("#div-content5").css("z-index", 7)
    $("#div-content6").css("z-index", 6)
    $("#div-content7").css("z-index", 5)
    $("#div-content8").css("z-index", 4)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $(".ul-gallerys li:nth-child(5)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 3)
    $("#div-content2").css("z-index", 2)
    $("#div-content3").css("z-index", 1)
    $("#div-content4").css("z-index", 0)
    $("#div-content5").css("z-index", 8)
    $("#div-content6").css("z-index", 7)
    $("#div-content7").css("z-index", 6)
    $("#div-content8").css("z-index", 5)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $(".ul-gallerys li:nth-child(6)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 4)
    $("#div-content2").css("z-index", 3)
    $("#div-content3").css("z-index", 2)
    $("#div-content4").css("z-index", 1)
    $("#div-content5").css("z-index", 0)
    $("#div-content6").css("z-index", 8)
    $("#div-content7").css("z-index", 7)
    $("#div-content8").css("z-index", 6)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $(".ul-gallerys li:nth-child(7)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 5)
    $("#div-content2").css("z-index", 4)
    $("#div-content3").css("z-index", 3)
    $("#div-content4").css("z-index", 2)
    $("#div-content5").css("z-index", 1)
    $("#div-content6").css("z-index", 0)
    $("#div-content7").css("z-index", 8)
    $("#div-content8").css("z-index", 7)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $(".ul-gallerys li:nth-child(8)").on("click", ()=>{
    $(".ind").attr("src", indicators[0])

    $("#div-content1").css("z-index", 6)
    $("#div-content2").css("z-index", 5)
    $("#div-content3").css("z-index", 4)
    $("#div-content4").css("z-index", 3)
    $("#div-content5").css("z-index", 2)
    $("#div-content6").css("z-index", 1)
    $("#div-content7").css("z-index", 0)
    $("#div-content8").css("z-index", 8)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "1.0")
  })




  var weightRoomPictures = ["/static/images/gallery/WeightRoom1_compressed.jpg",
                            "/static/images/gallery/WeightRoom2_compressed.jpg?v=",
                            "/static/images/gallery/WeightRoom3_compressed.jpg?v="]

  var functionalFitnessPictures = ["/static/images/gallery/FunctionalFitness1_compressed.jpg",
                                   "/static/images/gallery/FunctionalFitness2_compressed.jpg",
                                   "/static/images/gallery/FunctionalFitness3_compressed.jpg"]

  var cardioPictures = ["/static/images/gallery/Cardio1_compressed.jpg",
                        "/static/images/gallery/Cardio2_compressed.jpg",
                        "/static/images/gallery/Cardio3_compressed.jpg"]

  var ladiesOnlyPictures = ["/static/images/gallery/LadiesOnly1_compressed.jpg",
                            "/static/images/gallery/LadiesOnly2_compressed.jpg",
                            "/static/images/gallery/LadiesOnly3_compressed.jpg"]

  var courtsPictures = ["/static/images/gallery/Courts1_compressed.JPG",
                        "/static/images/gallery/Courts2_compressed.JPG",
                        "/static/images/gallery/Courts3_compressed.JPG"]

  // One for now
  var poolPictures = ["/static/images/gallery/Pool_compressed.jpg"]

  var westWingPictures = ["/static/images/gallery/WestWing1_compressed.jpg",
                          "/static/images/gallery/WestWing2_compressed.jpg",
                          "/static/images/gallery/WestWing3_compressed.jpg"]

  var club180Pictures = ["/static/images/gallery/Club1801_compressed.jpg",
                          "/static/images/gallery/Club1802_compressed.jpg",
                          "/static/images/gallery/Club1803_compressed.jpg"]


  // Weight Room - Event handler syntax version 1
  $(".arrow_left1").click(()=>{
    var src = $(".img1").attr("src")
    var ind = $(".ind").attr("src")
    if(src == weightRoomPictures[0]){
      $(".img1").attr("src", weightRoomPictures[2])
    }
    if(src == weightRoomPictures[1]){
      $(".img1").attr("src", weightRoomPictures[0])
    }
    else if(src == weightRoomPictures[2]){
      $(".img1").attr("src", weightRoomPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right1").click(()=>{
    var src = $(".img1").attr("src")
    var ind = $(".ind").attr("src")
    if(src == weightRoomPictures[0]){
      $(".img1").attr("src", weightRoomPictures[1])
    }
    else if(src == weightRoomPictures[1]){
      $(".img1").attr("src", weightRoomPictures[2])
    }
    else if(src == weightRoomPictures[2]){
      $(".img1").attr("src", weightRoomPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // Elite Room - Event handler syntax version 2, the rest are also version 2
  $(".arrow_left2").on("click", ()=>{
    var src = $(".img2").attr("src")
    var ind = $(".ind").attr("src")
    if(src == functionalFitnessPictures[0]){
      $(".img2").attr("src", functionalFitnessPictures[2])
    }
    else if(src == functionalFitnessPictures[1]){
      $(".img2").attr("src", functionalFitnessPictures[0])
    }
    else if(src == functionalFitnessPictures[2]){
      $(".img2").attr("src", functionalFitnessPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right2").on("click", ()=>{
    var src = $(".img2").attr("src")
    var ind = $(".ind").attr("src")
    if(src == functionalFitnessPictures[0]){
      $(".img2").attr("src", functionalFitnessPictures[1])
    }
    else if(src == functionalFitnessPictures[1]){
      $(".img2").attr("src", functionalFitnessPictures[2])
    }
    else if(src == functionalFitnessPictures[2]){
      $(".img2").attr("src", functionalFitnessPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // Cardio
  $(".arrow_left3").on("click", ()=>{
    var src = $(".img3").attr("src")
    var ind = $(".ind").attr("src")
    if(src == cardioPictures[0]){
      $(".img3").attr("src", cardioPictures[2])
    }
    else if(src == cardioPictures[1]){
      $(".img3").attr("src", cardioPictures[0])
    }
    else if(src == cardioPictures[2]){
      $(".img3").attr("src", cardioPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right3").on("click", ()=>{
    var src = $(".img3").attr("src")
    var ind = $(".ind").attr("src")
    if(src == cardioPictures[0]){
      $(".img3").attr("src", cardioPictures[1])
    }
    else if(src == cardioPictures[1]){
      $(".img3").attr("src", cardioPictures[2])
    }
    else if(src == cardioPictures[2]){
      $(".img3").attr("src", cardioPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // Ladies Only
  $(".arrow_left4").on("click", ()=>{
    var src = $(".img4").attr("src")
    var ind = $(".ind").attr("src")
    if(src == ladiesOnlyPictures[0]){
      $(".img4").attr("src", ladiesOnlyPictures[2])
    }
    else if(src == ladiesOnlyPictures[1]){
      $(".img4").attr("src", ladiesOnlyPictures[0])
    }
    else if(src == ladiesOnlyPictures[2]){
      $(".img4").attr("src", ladiesOnlyPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right4").on("click", ()=>{
    var src = $(".img4").attr("src")
    var ind = $(".ind").attr("src")
    if(src == ladiesOnlyPictures[0]){
      $(".img4").attr("src", ladiesOnlyPictures[1])
    }
    else if(src == ladiesOnlyPictures[1]){
      $(".img4").attr("src", ladiesOnlyPictures[2])
    }
    else if(src == ladiesOnlyPictures[2]){
      $(".img4").attr("src", ladiesOnlyPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // Courts
  $(".arrow_left5").on("click", ()=>{
    var src = $(".img5").attr("src")
    var ind = $(".ind").attr("src")
    if(src == courtsPictures[0]){
      $(".img5").attr("src", courtsPictures[2])
    }
    else if(src == courtsPictures[1]){
      $(".img5").attr("src", courtsPictures[0])
    }
    else if(src == courtsPictures[2]){
      $(".img5").attr("src", courtsPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right5").on("click", ()=>{
    var src = $(".img5").attr("src")
    var ind = $(".ind").attr("src")
    if(src == courtsPictures[0]){
      $(".img5").attr("src", courtsPictures[1])
    }
    else if(src == courtsPictures[1]){
      $(".img5").attr("src", courtsPictures[2])
    }
    else if(src == courtsPictures[2]){
      $(".img5").attr("src", courtsPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // Pool
  $(".arrow_left6").on("click", ()=>{
    var src = $(".img6").attr("src")
    var ind = $(".ind").attr("src")
    if(src == poolPictures[0]){
      $(".img6").attr("src", poolPictures[2])
    }
    else if(src == poolPictures[1]){
      $(".img6").attr("src", poolPictures[0])
    }
    else if(src == poolPictures[2]){
      $(".img6").attr("src", poolPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right6").on("click", ()=>{
    var src = $(".img6").attr("src")
    var ind = $(".ind").attr("src")
    if(src == poolPictures[0]){
      $(".img6").attr("src", poolPictures[1])
    }
    else if(src == poolPictures[1]){
      $(".img6").attr("src", poolPictures[2])
    }
    else if(src == poolPictures[2]){
      $(".img6").attr("src", poolPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // West Wing
  $(".arrow_left7").on("click", ()=>{
    var src = $(".img7").attr("src")
    var ind = $(".ind").attr("src")
    if(src == westWingPictures[0]){
      $(".img7").attr("src", westWingPictures[2])
    }
    else if(src == westWingPictures[1]){
      $(".img7").attr("src", westWingPictures[0])
    }
    else if(src == westWingPictures[2]){
      $(".img7").attr("src", westWingPictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right7").on("click", ()=>{
    var src = $(".img7").attr("src")
    var ind = $(".ind").attr("src")
    if(src == westWingPictures[0]){
      $(".img7").attr("src", westWingPictures[1])
    }
    else if(src == westWingPictures[1]){
      $(".img7").attr("src", westWingPictures[2])
    }
    else if(src == westWingPictures[2]){
      $(".img7").attr("src", westWingPictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })


  // Club 180
  $(".arrow_left8").on("click", ()=>{
    var src = $(".img8").attr("src")
    var ind = $(".ind").attr("src")
    if(src == club180Pictures[0]){
      $(".img8").attr("src", club180Pictures[2])
    }
    else if(src == club180Pictures[1]){
      $(".img8").attr("src", club180Pictures[0])
    }
    else if(src == club180Pictures[2]){
      $(".img8").attr("src", club180Pictures[1])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[0])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[1])
    }
  })
  $(".arrow_right8").on("click", ()=>{
    var src = $(".img8").attr("src")
    var ind = $(".ind").attr("src")
    if(src == club180Pictures[0]){
      $(".img8").attr("src", club180Pictures[1])
    }
    else if(src == club180Pictures[1]){
      $(".img8").attr("src", club180Pictures[2])
    }
    else if(src == club180Pictures[2]){
      $(".img8").attr("src", club180Pictures[0])
    }

    if(ind == indicators[0]){
      $(".ind").attr("src", indicators[1])
    }
    else if(ind == indicators[1]){
      $(".ind").attr("src", indicators[2])
    }
    else if(ind == indicators[2]){
      $(".ind").attr("src", indicators[0])
    }
  })





  // Code for the footer site map links and tab color for cooresponding page
  // Extract the fragment
  var id = window.location.hash.substring(1)
  var offset = $("#div-buffer").offset().top
  offset = offset - 5

  if(id == 1){
    window.scrollTo({ top: offset, behavior: 'smooth' });
    $("#div-content1").css("z-index", 8)
    $("#div-content2").css("z-index", 7)
    $("#div-content3").css("z-index", 6)
    $("#div-content4").css("z-index", 5)
    $("#div-content5").css("z-index", 4)
    $("#div-content6").css("z-index", 3)
    $("#div-content7").css("z-index", 2)
    $("#div-content8").css("z-index", 1)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 2){
    window.scrollTo({ top: offset, behavior: 'smooth' });
    $("#div-content1").css("z-index", 0)
    $("#div-content2").css("z-index", 8)
    $("#div-content3").css("z-index", 7)
    $("#div-content4").css("z-index", 6)
    $("#div-content5").css("z-index", 5)
    $("#div-content6").css("z-index", 4)
    $("#div-content7").css("z-index", 3)
    $("#div-content8").css("z-index", 2)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 3){
    window.scrollTo({ top: offset, behavior: 'smooth' });
    $("#div-content1").css("z-index", 1)
    $("#div-content2").css("z-index", 0)
    $("#div-content3").css("z-index", 8)
    $("#div-content4").css("z-index", 7)
    $("#div-content5").css("z-index", 6)
    $("#div-content6").css("z-index", 5)
    $("#div-content7").css("z-index", 4)
    $("#div-content8").css("z-index", 3)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 4){
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // This will cause the scroll box to down, though only with fragments, more code for other case elsewhere
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(4)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 2)
    $("#div-content2").css("z-index", 1)
    $("#div-content3").css("z-index", 0)
    $("#div-content4").css("z-index", 8)
    $("#div-content5").css("z-index", 7)
    $("#div-content6").css("z-index", 6)
    $("#div-content7").css("z-index", 5)
    $("#div-content8").css("z-index", 4)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 5){
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // This will cause the scroll box to down, though only with fragments, more code for other case elsewhere
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(5)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );


    $("#div-content1").css("z-index", 3)
    $("#div-content2").css("z-index", 2)
    $("#div-content3").css("z-index", 1)
    $("#div-content4").css("z-index", 0)
    $("#div-content5").css("z-index", 8)
    $("#div-content6").css("z-index", 7)
    $("#div-content7").css("z-index", 6)
    $("#div-content8").css("z-index", 5)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 6){
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // This will cause the scroll box to down, though only with fragments, more code for other case elsewhere
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(6)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 4)
    $("#div-content2").css("z-index", 3)
    $("#div-content3").css("z-index", 2)
    $("#div-content4").css("z-index", 1)
    $("#div-content5").css("z-index", 0)
    $("#div-content6").css("z-index", 8)
    $("#div-content7").css("z-index", 7)
    $("#div-content8").css("z-index", 6)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 7){
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // This will cause the scroll box to down, though only with fragments, more code for other case elsewhere
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(6)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 5)
    $("#div-content2").css("z-index", 4)
    $("#div-content3").css("z-index", 3)
    $("#div-content4").css("z-index", 2)
    $("#div-content5").css("z-index", 1)
    $("#div-content6").css("z-index", 0)
    $("#div-content7").css("z-index", 8)
    $("#div-content8").css("z-index", 7)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }
  else if(id == 8){
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // This will cause the scroll box to down, though only with fragments, more code for other case elsewhere
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(6)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 6)
    $("#div-content2").css("z-index", 5)
    $("#div-content3").css("z-index", 4)
    $("#div-content4").css("z-index", 3)
    $("#div-content5").css("z-index", 2)
    $("#div-content6").css("z-index", 1)
    $("#div-content7").css("z-index", 0)
    $("#div-content8").css("z-index", 8)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "1.0")
  }
  else if(id == 9){
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // This will cause the scroll box to down, though only with fragments, more code for other case elsewhere
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(6)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 0)
    $("#div-content2").css("z-index", 1)
    $("#div-content3").css("z-index", 2)
    $("#div-content4").css("z-index", 3)
    $("#div-content5").css("z-index", 4)
    $("#div-content6").css("z-index", 5)
    $("#div-content7").css("z-index", 6)
    $("#div-content8").css("z-index", 7)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  }






  // For Galleries
  $("#ul-footer3 li:nth-child(2)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(1)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 8)
    $("#div-content2").css("z-index", 7)
    $("#div-content3").css("z-index", 6)
    $("#div-content4").css("z-index", 5)
    $("#div-content5").css("z-index", 4)
    $("#div-content6").css("z-index", 3)
    $("#div-content7").css("z-index", 2)
    $("#div-content8").css("z-index", 1)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(3)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(2)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 0)
    $("#div-content2").css("z-index", 8)
    $("#div-content3").css("z-index", 7)
    $("#div-content4").css("z-index", 6)
    $("#div-content5").css("z-index", 5)
    $("#div-content6").css("z-index", 4)
    $("#div-content7").css("z-index", 3)
    $("#div-content8").css("z-index", 2)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(4)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(3)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 1)
    $("#div-content2").css("z-index", 0)
    $("#div-content3").css("z-index", 8)
    $("#div-content4").css("z-index", 7)
    $("#div-content5").css("z-index", 6)
    $("#div-content6").css("z-index", 5)
    $("#div-content7").css("z-index", 4)
    $("#div-content8").css("z-index", 3)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(5)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(4)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 2)
    $("#div-content2").css("z-index", 1)
    $("#div-content3").css("z-index", 0)
    $("#div-content4").css("z-index", 8)
    $("#div-content5").css("z-index", 7)
    $("#div-content6").css("z-index", 6)
    $("#div-content7").css("z-index", 5)
    $("#div-content8").css("z-index", 4)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(6)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(5)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 3)
    $("#div-content2").css("z-index", 2)
    $("#div-content3").css("z-index", 1)
    $("#div-content4").css("z-index", 0)
    $("#div-content5").css("z-index", 8)
    $("#div-content6").css("z-index", 7)
    $("#div-content7").css("z-index", 6)
    $("#div-content8").css("z-index", 5)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(7)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(5)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 4)
    $("#div-content2").css("z-index", 3)
    $("#div-content3").css("z-index", 2)
    $("#div-content4").css("z-index", 1)
    $("#div-content5").css("z-index", 0)
    $("#div-content6").css("z-index", 8)
    $("#div-content7").css("z-index", 7)
    $("#div-content8").css("z-index", 6)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(8)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(5)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 5)
    $("#div-content2").css("z-index", 4)
    $("#div-content3").css("z-index", 3)
    $("#div-content4").css("z-index", 2)
    $("#div-content5").css("z-index", 1)
    $("#div-content6").css("z-index", 0)
    $("#div-content7").css("z-index", 8)
    $("#div-content8").css("z-index", 7)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "1.0")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "0.25")
  })
  $("#ul-footer3 li:nth-child(9)").on("click", ()=>{
    // Scroll up the page for the user
    window.scrollTo({ top: offset, behavior: 'smooth' });

    // Scroll box down to show selection
    var container = $('.ul-gallerys')
    var scrollTo = $('.ul-gallerys li:nth-child(5)')

    container.scrollTop(
        scrollTo.offset().top - container.offset().top + container.scrollTop()
    );

    $("#div-content1").css("z-index", 6)
    $("#div-content2").css("z-index", 5)
    $("#div-content3").css("z-index", 4)
    $("#div-content4").css("z-index", 3)
    $("#div-content5").css("z-index", 2)
    $("#div-content6").css("z-index", 1)
    $("#div-content7").css("z-index", 0)
    $("#div-content8").css("z-index", 8)

    $(".ul-gallerys li:nth-child(1)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(2)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(3)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(4)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(5)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(6)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(7)").css("opacity", "0.25")
    $(".ul-gallerys li:nth-child(8)").css("opacity", "1.0")
  })


  $("div[id^='div-content'] img[class^='img']").on("click", ()=>{
    var imglocation = $("div[id^='div-content'] img[class^='img']").offset().top
    imglocation = imglocation - 45
    window.scrollTo({top: imglocation, behavior: 'smooth'})
  })


})
