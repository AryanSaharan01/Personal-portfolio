
function Mobilenav() {
  var x = document.getElementById("myLinks");
  if (x.style.maxHeight === "0px" || x.style.maxHeight === "") {
    x.style.maxHeight = x.scrollHeight + "px";
  } else {
    x.style.maxHeight = "0px";
  }
}

document.querySelectorAll("#myLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    Mobilenav();
  });
});

// -------------SCROLL NAVBAR---------------------------
window.onscroll = function () {
  scrollFunction();
};

function scrollNavFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

//   --------------SMOOTH SCROLL---------------------------
function scrollToHome() {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToSkill() {
  document.getElementById("skill").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}

// -----------------SKILL WIDTHS-----------------------------
var widths = [1, 1, 1, 1, 1, 1]; // Initialize widths for each progress bar
var maxWidths = [75, 95, 89, 25, 50, 68]; // Set different maximum widths for each progress bar

function move(index) {
  if (widths[index] < maxWidths[index]) {
    var elem = document.getElementById("myBar" + (index + 1));
    var id = setInterval(frame, 10);
    function frame() {
      if (widths[index] >= maxWidths[index]) {
        clearInterval(id);
      } else {
        widths[index]++;
        elem.style.width = widths[index] + "%";
      }
    }
  }
}

function reset() {
  for (var i = 0; i < widths.length; i++) {
    widths[i] = 1;
    var elem = document.getElementById("myBar" + (i + 1));
    elem.style.width = widths[i] + "%";
  }
}

// ------------------THEME TOGGLE--------------------------------

let sidePanelOpen = false;

function toggleNav() {
  if (sidePanelOpen) {
    closeNav();
  } else {
    openNav();
  }
  sidePanelOpen = !sidePanelOpen;
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "500px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function setTheme(theme) {
  document.body.className = theme;
  closeNav();
  sidePanelOpen = false;
}
