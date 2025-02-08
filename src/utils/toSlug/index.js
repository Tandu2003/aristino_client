const toSlug = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng "-"
    .replace(/[^a-z0-9-]/g, "") // Xóa ký tự đặc biệt
    .replace(/-+/g, "-") // Xóa dấu "-" trùng
    .trim();
};

export default toSlug;
