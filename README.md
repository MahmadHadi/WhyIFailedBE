# 📘 WhyIFailed API

A simple RESTful API for sharing and managing failure stories to inspire learning and growth.\
This API allows users to **create**, **read**, **update**, **like**, and **delete** posts.

---

## 🌐 Base URL

```
{{base}}/api/post
```

Replace `{{base}}` with your actual server URL. Example:\
`http://localhost:5000/api/post`

---

## 📌 Endpoints

### 🔹 1. Create Post

**Method:** `POST`\
**URL:** `/create`\
**Description:** Creates a new post.

**Request Body:**

```json
{
  "HEADING": "Startup Collapse in 6 Months",
  "BODY": "My startup idea sounded perfect in my head, and I convinced two friends to join me. But we launched too soon without validating the market. Users didn’t connect with our product, and we ran out of money. We had to shut down. Painful, but now I value feedback more than assumptions.",
  "TAGS": ["Professional", "Startup", "Business"],
  "POST_ID": 1
}
```

---

### 🔹 2. List All Posts

**Method:** `GET`\
**URL:** `/list`\
**Description:** Fetches a list of all posts.

---

### 🔹 3. Get Single Post

**Method:** `GET`\
**URL:** `/1`\
**Description:** Returns a post by `POST_ID`.

---

### 🔹 4. Like a Post

**Method:** `PUT`\
**URL:** `/like/1`\
**Description:** Likes a post by `POST_ID`.

---

### 🔹 5. Update Post

**Method:** `PUT`\
**URL:** `/update/1`\
**Description:** Updates a post by `POST_ID`.

**Request Body:**

```json
{
  "POST_ID": 1,
  "HEADING": "updated Startup Collapse in 6 Months",
  "BODY": "My startup idea sounded perfect in my head, and I convinced two friends to join me. But we launched too soon without validating the market. Users didn’t connect with our product, and we ran out of money. We had to shut down. Painful, but now I value feedback more than assumptions.",
  "TAGS": ["Professional", "Startup", "Business"],
  "IMAGE": "",
  "LIKES": 1
}
```

---

### 🔹 6. Delete Post

**Method:** `DELETE`\
**URL:** `/delete/1`\
**Description:** Deletes a post by `POST_ID`.

---

## 📬 Postman Collection

Use the link below to import and test all the API endpoints via Postman:

🔗 [Click here to open Postman Collection](https://first-team-8035.postman.co/workspace/first-work-space~3953aa63-3490-44a2-9f25-81a118528346/collection/36485981-bcaf65e2-7fdf-4abc-882f-d8d561548c45?action=share\&source=collection_link\&creator=36485981)

---

## 🧑‍💻 Author

**Mohmmed Hadi Nayani**\
📌 GitHub: [@MohmmedHadi](https://github.com/MohmmedHadi)

---

## 🗪️ License

This project is open for educational and personal use only.

