# SwiftCart 🛒

A e-commerce storefront built using the Fake Store API.

## JavaScript questions

### 1) What is the difference between `null` and `undefined`?

জাভাস্ক্রিপ্টে এই দুইটার পার্থক্য হল:

১. Undefined:
ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো ভ্যালু অ্যাসাইন করা হয়নি। এটা ডিফল্ট অবস্থা। মেমোরিতে জায়গা আছে, কিন্তু ভেতরে কী আছে তা অজানা।

২. Null:
এটা ইচ্ছাকৃতভাবে সেট করা হয়। ভেরিয়েবলটি যে খালি বা সেখানে কোনো অবজেক্ট নেই, তা বোঝানোর জন্য প্রোগ্রামার নিজে এটি ব্যবহার করে।

### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

১. map() একটা নতুন অ্যারে তৈরি করে। অরিজিনাল অ্যারের প্রতিটি উপাদানের ওপর কোনো নির্দিষ্ট কাজ (Function) চালিয়ে সেই রেজাল্ট দিয়ে একটি নতুন অ্যারে রিটার্ন করে। অরিজিনাল অ্যারে অপরিবর্তিত থাকে।

২. forEach() কেবল অ্যারের প্রতিটি উপাদানের ওপর লুপ চালায়। এটা কোনো নতুন অ্যারে রিটার্ন করে না।

### 3) What is the difference between `==` and `===`?

জাভাস্ক্রিপ্টে এই দুই অপারেটরের প্রধান পার্থক্য হলো তারা কীভাবে ডেটা টাইপ চেক করে।

১. == (Loose Equality):
এটা শুধুমাত্র ভ্যালু বা মান সমান কি না তা পরীক্ষা করে। যদি দুই পাশের ডেটা টাইপ আলাদা হয়, তবে এটা নিজে থেকেই টাইপ কনভার্ট করে মিলিয়ে দেখার চেষ্টা করে।

২. === (Strict Equality):
এটা ভ্যালু এবং ডেটা টাইপ উভয়ই সমান কি না তা পরীক্ষা করে। কোনো অটোমেটিক টাইপ কনভার্সন এখানে হয় না। এটি অনেক বেশি নিরাপদ এবং নির্ভুল।

### 4) What is the significance of `async`/`await` in fetching API data?

জাভাস্ক্রিপ্টে async/await ব্যবহারের মূল গুরুত্ব হলো এসিনক্রোনাস (Asynchronous) কোডকে সিনক্রোনাস বা সাধারণ কোডের মতো সহজবোধ্য করা। এটা প্রমিজ (Promise) হ্যান্ডেল করার একটি আধুনিক পদ্ধতি। এতে কোড পড়তে সুবিধা হয় এবং দেখতেও গোছানো লাগে। এপিআই থেকে রেসপন্স না আসা পর্যন্ত await কি-ওয়ার্ড পরবর্তী লাইনের এক্সিকিউশন থামিয়ে রাখে। ফলে ডেটা আসার আগেই অন্য ফাংশন রান হওয়ার ভয় থাকে না।

### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

ভেরিয়েবলের অ্যাক্সেস করার ক্ষমতাকেই Scope বলে।

১. Global Scope:
কোডের একেবারে শুরুতে বা যেকোনো ফাংশনের বাইরে সবজায়গায় কাজ করে। পুরো প্রোগ্রামের যেকোনো জায়গা থেকে ব্যবহার করা যায়।

২. Function Scope:
শুধুমাত্র একটি ফাংশনের ভেতরে কাজ করে। ফাংশনের বাইরে এটা কাজ করে না। (var, let, const সবার জন্য প্রযোজ্য)

৩. Block Scope
কার্লি ব্রেসেস { } বা লুপ/কন্ডিশনের ভেতরে কাজ করে। শুধু ওই ব্লকের ভেতরেই সীমাবদ্ধ। (শুধুমাত্র let এবং const এর জন্য)

## 🛍️ API Endpoints

1. Get 🛍️ All Products

```bash
https://fakestoreapi.com/products
```

2. Get 🛍️ All Categories

```bash
https://fakestoreapi.com/products/categories
```

3. Get 🛍️ Products by Category

```bash
https://fakestoreapi.com/products/category/${category}
```

Example:

```bash
https://fakestoreapi.com/products/category/jewelery
```

4. Get 🛍️ Single Product Detail

```bash
https://fakestoreapi.com/products/${id}
```

Example:

```bash
https://fakestoreapi.com/products/1
```

## ⚡ Dynamic Features & Functionalities

1. Category Loading
   Load Product Categories dynamically on the UI (e.g., as filter buttons or a dropdown).

2. Category Click → Product Data
   On clicking a category: load products of that specific category.
   Display in a grid layout (e.g., 3 or 4 columns).

3. Card Contents
   Each product card must include:

- **Image** (from API)
- **Title** (truncated if too long)
- **Price** ($ value)
- **Category** (badge or text)
- **Rating** (Visualize stars or just show the number)
- **Details Button**
- **Add to Cart button**

4. Modal on "Details" Click
   Clicking the "Details" button on a card opens a modal with full product details:

- Full Title
- Full Description
- Price & Rating
- "Buy Now" or "Add to Cart" button in modal.

## 🧪 Challenges (Optional)

    1) Add to Cart Interaction
    Clicking "Add to Cart":
    - Adds the product to a Cart list/array.
    - Updates a Cart Count in the Navbar.
    - (Optional) Persist in LocalStorage.

    2) Cart Calculation
    Show a summary (maybe in a sidebar or a separate section/modal) that lists added items and calculates the **Total Price**.

    3) Remove from Cart
    Ability to remove an item from the cart and update the Total Price instantly.

    4) Loading Spinner
    Show a loading spinner or skeleton loader while fetching data from the API.

    5) Active State
    Highlight the currently selected category button.

🧰 Technology Stack:
HTML
CSS (Vanilla / Tailwind / DaisyUI)
JavaScript (Vanilla only, no frameworks like React/Vue for this assignment)

📌 Rules
✅ At least 5 meaningful commits
❌ No dummy text where real data can be shown.

## 🔗 Submission

- **Live Link :** YOUR_DEPLOYED_URL_HERE
- **GitHub Repository:** YOUR_REPO_URL_HERE

### 📅 Deadline For 60 marks: 17th February, 2026 (11:59 pm ⏱️)

- Note: There won't be any 50 or 30 marks submission deadline. Only 60 marks submission deadline. After 17th February, 2026 (11:59 pm ⏱️) no submission will be accepted.
