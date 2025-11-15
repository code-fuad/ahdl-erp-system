async function loadComponent(id, file) {
  const html = await fetch(file).then((res) => res.text());
  document.getElementById(id).innerHTML = html;
}

// load main layout components
loadComponent("sidebar", "./components/sidebar.html");
loadComponent("navbar", "./components/navbar.html");

async function loadPage(page) {
  const html = await fetch(`./pages/${page}.html`).then((res) => res.text());
  document.getElementById("content-area").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  // default page
  loadPage("dashboard");

  // sidebar navigation
  document.querySelectorAll("#sidebar li").forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      loadPage(page);
    });
  });
});
