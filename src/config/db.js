import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // chuỗi kết nối MongoDB (sửa lại theo URI của bạn)
    const conn = await mongoose.connect(
      process.env.DB_HOST || "mongodb://localhost:27017/asm_nodejs"
    );

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // dừng server nếu kết nối lỗi
  }
};

export default connectDB;
