async function loadComponent(id, file) {
  const html = await fetch(file).then((res) => res.text());
  document.getElementById(id).innerHTML = html;
}

// load main layout components
loadComponent("sidebar", "./components/sidebar.html");
loadComponent("navbar", "./components/navbar.html");
