import { ItemCard } from "./itemCard.js";

export const loadProducts = async (url, targetId) => {
  const grid = document.getElementById(targetId);
  if (!grid) return;

  try {
    const res = await fetch(url);
    const data = await res.json();
    grid.innerHTML = data.map((item) => ItemCard(item)).join("");
  } catch (err) {
    grid.innerHTML = "Error loading products.";
  }
};
