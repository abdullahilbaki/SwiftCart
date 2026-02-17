import {layout} from './theme.js';
const Footer = () => {
  return `
        <footer class="bg-[#1e2532] text-gray-400 py-12 px-6">
        <div class="${layout}">
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            
            <div class="space-y-4">
                <h2 class="text-4xl font-bold text-[#6366f1]">SwiftCart</h2>
                <p class="text-sm leading-relaxed max-w-xs">
                Your one-stop shop for all your fashion and lifestyle needs. Quality products, fast delivery, and excellent support.
                </p>
            </div>

            <div>
                <h3 class="text-white font-semibold uppercase tracking-wider mb-4 text-sm">Quick Links</h3>
                <ul class="space-y-3 text-sm">
                <li><a href="#" class="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" class="hover:text-white transition-colors">About</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-white font-semibold uppercase tracking-wider mb-4 text-sm">Support</h3>
                <ul class="space-y-3 text-sm">
                <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-white font-semibold uppercase tracking-wider mb-4 text-sm">Subscribe to our newsletter</h3>
                <p class="text-sm mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div class="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Enter your email" class="input input-bordered w-full bg-white text-gray-800 focus:outline-none" />
                <button class="btn border-none bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6">Subscribe</button>
                </div>
            </div>
            </div>

            <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-sm">© 2025 SwiftCart, Inc. All rights reserved.</p>
            
            <div class="flex gap-6 text-xl">
                <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i class="fa-regular fa-envelope"></i></a>
            </div>
            </div>

        </div>
        </footer>
    `;
};

const footerElement = document.getElementById('footer');
if(footerElement) {
    footerElement.innerHTML = Footer();
}