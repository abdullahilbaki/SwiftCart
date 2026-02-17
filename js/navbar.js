const NAV_ITEMS = ["Home", "Products", "About", "Contact"];

const Logo = () =>
  `<a class="btn btn-ghost text-2xl font-extrabold text-primary">SwiftCart</a>`;

const CartIcon = () =>
  `<a class="btn btn-ghost text-xl"><i class="fa-solid fa-cart-shopping"></i></a>`;

const ShowMenuItems = () => {
  return `
    <ul class="menu menu-horizontal px-1 text-lg">
      ${NAV_ITEMS.map((item) => `<li><a>${item}</a></li>`).join("")}
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
      ${NAV_ITEMS.map((item) => `<li><a>${item}</a></li>`).join("")}
    </ul>
    </div>
  `;
};

const Navbar = () => {
  return `
    <div class="navbar bg-base-100 shadow-sm">
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

const navElement = document.getElementById("navbar");

if (navElement) {
  navElement.innerHTML = Navbar();
}
