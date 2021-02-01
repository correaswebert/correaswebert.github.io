const loader = document.querySelector(".loader");
const mainContent = document.getElementById("main-content");
const linkContent = document.getElementById("link-content");
let revealed = false;

const blogLinks = [
  { title: "Medium", url: "https://correaswebert.medium.com/" },
  { title: "DevTo", url: "https://dev.to/correaswebert" },
  { title: "Hashnode", url: "https://hashnode.com/@correaswebert" },
  { title: "Personal", url: "https://blog.swebert.codes" },
];

const socialLinks = [
  { title: "Twitter", url: "https://twitter.com/@correaswebert" },
  { title: "Instagram", url: "https://www.instagram.com/correaswebert/" },
  { title: "LinkedIn", url: "https://in.linkedin.com/in/correaswebert" },
];

const codeLinks = [
  { title: "Github", url: "https://github.com/correaswebert/" },
  { title: "Gitlab", url: "https://gitlab.com/correaswebert/" },
];

const creditLinks = [
  { title: "Fonts", url: "https://www.1001fonts.com/" },
  { title: "Icons", url: "https://www.flaticon.com/" },
  { title: "Background", url: "https://www.svgbackgrounds.com/" },
  { title: "Animations", url: "https://codepen.io/firestar300/pen/zLKZVZ" },
];

function populateLinks(content) {
  linkContent.innerHTML = `<button onclick="reveal('home')" class="close-button">&Cross;</button>`;

  switch (content) {
    case "blog":
      blogLinks.forEach((elem) => {
        linkContent.innerHTML += `<a class="link" href="${elem.url}">${elem.title}</a>`;
      });
      break;

    case "social":
      socialLinks.forEach((elem) => {
        linkContent.innerHTML += `<a class="link" href="${elem.url}">${elem.title}</a>`;
      });
      break;

    case "code":
      codeLinks.forEach((elem) => {
        linkContent.innerHTML += `<a class="link" href="${elem.url}">${elem.title}</a>`;
      });
      break;

    case "credit":
      creditLinks.forEach((elem) => {
        linkContent.innerHTML += `<a class="link" href="${elem.url}">${elem.title}</a>`;
      });
      break;

    default:
      break;
  }
}

function reveal(content) {
  loader.classList.add("loader--active");

  if (content !== "home") {
    populateLinks(content);
  }

  setTimeout(function () {
    loader.classList.remove("loader--active");
    if (revealed) {
      mainContent.style.display = "flex";
      linkContent.style.display = "none";
    } else {
      mainContent.style.display = "none";
      linkContent.style.display = "flex";
    }
    revealed = !revealed;
  }, 1000);
}
