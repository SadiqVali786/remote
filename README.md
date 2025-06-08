# 🐾 Next.js Fun API Project

This project showcases two simple and useful features built with **Next.js App Router** and **Server Actions**:

1. 🐱 Random Cat Fact App
2. 🔢 Prime Number Checker API

---

## 1. 🐱 Random Cat Fact (Server Action with SSR Page)

Fetch random cat facts from [catfact.ninja](https://catfact.ninja/fact) using **Server Actions**.

### ⚙️ How It Works

- On form submission, a `GET` request is made to fetch a new cat fact.
- The response is **not cached** (`cache: "no-store"`).
- `revalidatePath("/")` ensures the UI is refreshed after fetching.

### 🖱️ Usage

1. Visit the homepage (`/`).
2. Click **"Get Cat Fact"**.
3. A new cat fact appears below the button.

### 🧠 Tech Stack

- **Next.js 13+ (App Router)**
- **Server Actions**
- **Tailwind CSS**

---

## 2. 🔢 Prime Number Checker API

A simple API that tells whether a number is prime or not.

### 📡 Endpoint

```json
### ✅ Example Request
GET /api/is-prime?number=YOUR_NUMBER

{
  "number": 7,
  "isPrime": true
}

### ❌ Invalid Request Example
GET /api/is-prime?number=hello

{
  "number": "hello",
  "isPrime": false,
  "error": "Invalid number"
}
```
