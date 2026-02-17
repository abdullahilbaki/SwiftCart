import { layout } from "./theme.js";

// const NAV_ITEMS = ["Home", "Products", "About", "Contact"];

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products.html" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
];

const Navbar = () => {
  return `
    <div class="navbar ${layout} border-b-1 border-gray-300">
      <div class="navbar-start">
        ${Logo()}
      </div>
      <div class="navbar-center hidden lg:flex">
        ${ShowMenuItems()}
      </div>
      <div class="navbar-end">
        ${CartIcon()}
        ${ShowMenuItemsMobile()}
      </div>
    </div>
  `;
};

const Logo = () =>
  `<a class="btn btn-ghost text-2xl font-extrabold text-primary">SwiftCart</a>`;

const CartIcon = () =>
  `<a class="btn btn-ghost text-xl"><i class="fa-solid fa-cart-shopping"></i></a>`;

const ShowMenuItems = () => {
  return `
    <ul class="menu menu-horizontal px-1 text-lg">
      ${NAV_ITEMS.map((item) => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
    </ul>
  `;
};

const ShowMenuItemsMobile = () => {
  return `
    <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden m-1">
      <i class="fa-solid fa-bars text-xl"></i>
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      ${NAV_ITEMS.map((item) => `<li><a href="${item.link}">${item.name}</a></li>`).join("")}
    </ul>
    </div>
  `;
};

const navElement = document.getElementById("navbar");
if (navElement) {
  navElement.innerHTML = Navbar();
}
