//----------Cloaks----------
//!!!READ THIS!!!
//This example does not save the page 
//title and favicon if the user changes pages. This simply shows how you would create a 
//cloaking system. To actually implement this, you would probably want to save the favicon 
//and title with localStorage and load it when the page is loaded.
const cloakImages = [//Favicon paths
  "/assets/img/drive.png",
  "/assets/img/classroom.png",
  "/assets/img/docs.png",
  "/assets/img/khanacademy.png",
  "/assets/img/canvas.ico",
];
function changeFavicon(newIconPath) {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon"; // Or "image/png" or "image/svg+xml"
  link.rel = "icon"; // Or "icon" for modern browsers
  link.href = newIconPath;
  document.getElementsByTagName("head")[0].appendChild(link);
}

function cloak(id) {
  if (id == cloakImages[0]) {//Google drive
    changeFavicon(cloakImages[0]);
    document.title = "Home - Google Drive";
  } else if (id == cloakImages[1]) {//Google classroom 
    changeFavicon(cloakImages[1]);
    document.title = "Home";
  } else if (id == cloakImages[2]) {//Google docs
    changeFavicon(cloakImages[2]);
    document.title = "Google Docs";
  } else if (id == cloakImages[3]) {//Khan academy 
    changeFavicon(cloakImages[3]);
    document.title = "Khan Academy | Free Online Courses, Lessons & Practice";
  } else if (id == cloakImages[4]) {//Canvas
    changeFavicon(cloakImages[4]);
    document.title = "Dashboard";
  }
}
