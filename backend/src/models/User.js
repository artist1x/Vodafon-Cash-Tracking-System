const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Employee"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// هذا الكود سيتأكد من تشفير كلمة المرور قبل حفظها في قاعدة البيانات
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // إذا لم تتغير كلمة المرور، لا حاجة للتشفير

  try {
    const salt = await bcrypt.genSalt(10); // تعيين Salt
    this.password = await bcrypt.hash(this.password, salt); // تشفير كلمة المرور
    next(); // بعد التشفير، استكمل عملية الحفظ
  } catch (error) {
    next(error); // في حالة حدوث خطأ
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password); // استخدام bcrypt لمقارنة كلمة المرور المدخلة بالمخزنة
};

module.exports = mongoose.model("User", userSchema);
