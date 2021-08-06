$(document).ready(()=>{

  $("#img-headerlogo").hover(()=>{
    $(this).animate({opacity: 1.0}, 200)
  })

  $("#img-familysportsandfitness").on("click", ()=>{
      document.location.href = "/index"
  })





  // Footer site map redirect set up for colored tabs on each page
  // Agreements
  $("#ul-footer1 li:nth-child(2)").on("click", ()=>{
    document.location.href = "/agreements" + "#" + 1
  })
  $("#ul-footer1 li:nth-child(3)").on("click", ()=>{
    document.location.href = "/agreements" + "#" + 2
  })
  $("#ul-footer1 li:nth-child(4)").on("click", ()=>{
    document.location.href = "/agreements" + "#" + 3
  })
  $("#ul-footer1 li:nth-child(5)").on("click", ()=>{
    document.location.href = "/agreements" + "#" + 4
  })

  // Services
  $("#ul-footer2 li:nth-child(2)").on("click", ()=>{
    document.location.href = "/services" + "#" + 1
  })
  $("#ul-footer2 li:nth-child(3)").on("click", ()=>{
    document.location.href = "/services" + "#" + 2
  })
  $("#ul-footer2 li:nth-child(4)").on("click", ()=>{
    document.location.href = "/services" + "#" + 3
  })
  $("#ul-footer2 li:nth-child(5)").on("click", ()=>{
    document.location.href = "/services" + "#" + 4
  })

  //Galleries
  $("#ul-footer3 li:nth-child(2)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 1
  })
  $("#ul-footer3 li:nth-child(3)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 2
  })
  $("#ul-footer3 li:nth-child(4)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 3
  })
  $("#ul-footer3 li:nth-child(5)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 4
  })
  $("#ul-footer3 li:nth-child(6)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 5
  })
  $("#ul-footer3 li:nth-child(7)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 6
  })
  $("#ul-footer3 li:nth-child(8)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 7
  })
  $("#ul-footer3 li:nth-child(9)").on("click", ()=>{
    document.location.href = "/galleries" + "#" + 8
  })
})
