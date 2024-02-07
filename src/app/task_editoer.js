function openNav() {
    document.getElementById("mysidebar").style.width = "290px";
    // document.getElementById("main").style.marginLeft = "290px";
}
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mysidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mysidebar").style.padding = "0";
}

function toggleContent(id) {
  var content = document.getElementById(id);
  if (content.style.display === 'block') {
      content.style.display = 'none';
  } else {
      content.style.display = 'block';
  }
}