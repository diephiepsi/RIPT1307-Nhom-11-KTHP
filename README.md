# Diễn đàn Hỏi Đáp Sinh viên (Q&A)

Nền tảng hỏi đáp học thuật kiểu StackOverflow dành cho **sinh viên/giảng viên** và trang **quản trị viên**.

## Công nghệ

- **Frontend**: React + TypeScript + Redux Toolkit + Ant Design + TinyMCE + Axios + LocalStorage
- **Backend**: Node.js (Express) + TypeScript + Prisma ORM (MySQL) + JWT + Nodemailer
- **Database**: MySQL

## Cấu trúc thư mục

- `backend/`: API + Prisma (MySQL)
- `frontend/`: React SPA

## Chạy dự án

### 1) Backend

Tạo file `.env` từ `.env.example`:

- `backend/.env`

Sau đó:

```bash
cd backend
yarn
yarn prisma:generate
yarn prisma:migrate
yarn dev
```

Backend chạy ở `http://localhost:4000/api`.

### 2) Frontend

Tạo file `.env` từ `.env.example`:

- `frontend/.env`

Sau đó:

```bash
cd frontend
yarn
yarn dev
```

Frontend chạy ở `http://localhost:5173`.

## Chức năng đã scaffold

- **Sinh viên/giảng viên**: đăng ký/đăng nhập, đăng câu hỏi (TinyEditor), tag, bình luận, vote, tìm kiếm & lọc tag
- **Quản trị viên**: danh sách bài, xóa bài, danh sách user, thêm user, khóa user, reset mật khẩu (gửi email)
- **Email**: gửi mail khi có bài đăng mới / có bình luận mới (cấu hình SMTP)

