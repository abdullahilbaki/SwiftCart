export const handleShowDetails = async (id) => {
  const modal = document.getElementById("product_details_modal");
  const content = document.getElementById("modal-content");

  if (!modal || !content) return;

  content.innerHTML = `
    <div class="flex flex-col items-center justify-center p-20">
      <span class="loading loading-spinner loading-lg text-indigo-600"></span>
    </div>`;
  modal.showModal();

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    content.innerHTML = `
      <div class="flex flex-col md:flex-row gap-8 p-6 md:p-10">
          <div class="w-full md:w-1/2 bg-slate-50 rounded-2xl p-10 flex items-center justify-center">
              <img src="${data.image}" class="max-h-80 object-contain mix-blend-multiply drop-shadow-xl" />
          </div>
          <div class="w-full md:w-1/2 flex flex-col">
              <span class="badge badge-primary badge-outline mb-4 uppercase font-bold tracking-widest text-xs">${data.category}</span>
              <h2 class="text-3xl font-extrabold text-slate-800 leading-tight mb-2">${data.title}</h2>
              <div class="flex items-center gap-2 mb-6 text-sm">
                  <i class="fa-solid fa-star text-warning"></i>
                  <span class="font-bold text-slate-700">${data.rating.rate}</span>
                  <span class="text-slate-400">(${data.rating.count} reviews)</span>
              </div>
              <p class="text-slate-500 leading-relaxed mb-8">${data.description}</p>
              <div class="mt-auto pt-6 border-t">
                  <div class="flex items-center justify-between">
                      <span class="text-4xl font-black text-slate-900">$${data.price}</span>
                      <button class="btn btn-primary bg-indigo-600 border-none px-8 rounded-xl shadow-lg">Add to Cart</button>
                  </div>
              </div>
          </div>
      </div>`;
  } catch (err) {
    content.innerHTML = `<div class="p-10 text-center text-error">Could not load product.</div>`;
  }
};

export const initModalListener = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.addEventListener("click", (e) => {
    const detailsBtn = e.target.closest(".details-btn");
    if (detailsBtn) {
      const productId = detailsBtn.getAttribute("data-id");
      handleShowDetails(productId);
    }
  });
};
