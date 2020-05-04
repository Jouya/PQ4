
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function initMap() {
  // The location of Bowdoin Art Museum
  var museum = {lat: 43.908004, lng: -69.963760};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: museum});
  // The marker, positioned at Bowdoin Art Museum
  var marker = new google.maps.Marker({position: museum, map: map});
}