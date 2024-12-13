const buildTransactionFilter = (query, user) => {
  const { sender, startDate, endDate, minAmount, maxAmount } = query;
  const filter = {};

  // فلتر للمرسل إذا كان موجود
  if (sender) {
    filter.sender = new RegExp(sender, "i"); // البحث عن المرسل بشكل غير حساس للحروف
  }

  // فلتر للتاريخ إذا كان موجود
  if (startDate || endDate) {
    filter.createdAt = {}; // إذا كان هناك تاريخ بداية أو نهاية
    if (startDate) filter.createdAt.$gte = new Date(startDate); // إذا كان هناك تاريخ بداية
    if (endDate) filter.createdAt.$lte = new Date(endDate); // إذا كان هناك تاريخ نهاية
  }

  // فلتر للمبلغ إذا كان موجود
  if (minAmount || maxAmount) {
    filter.amount = {}; // إذا كان هناك مبلغ الحد الأدنى أو الأقصى
    if (minAmount) filter.amount.$gte = Number(minAmount); // إذا كان هناك مبلغ الحد الأدنى
    if (maxAmount) filter.amount.$lte = Number(maxAmount); // إذا كان هناك مبلغ الحد الأقصى
  }

  // فلتر للمستخدمين من نوع "Employee"
  if (user.role === "Employee") {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // تعيين الوقت ليبدأ من الساعة 12 صباحًا
    filter.createdAt = { $gte: today }; // فقط المعاملات التي أنشأت اليوم أو بعده
    filter.createdBy = user._id; // فقط المعاملات التي أنشأها الموظف
  }

  return filter;
};

module.exports = {
  buildTransactionFilter,
};
