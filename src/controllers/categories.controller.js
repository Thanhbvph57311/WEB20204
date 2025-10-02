import Categories from "../models/categories";

export const getAllCategories = async (req, res) => {
  try {
    const getAll = await Categories.find();
    return res.status(200).json({ data: getAll });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const getById = async (req, res) => {
  try {
    const postId = await Categories.findById(req.params.id);
    if (!postId) {
      return res.status(404).json({
        message: "Không tìm thấy id sách phù hợp!",
      });
    }
    console.log(postId);
    return res.status(200).json({
      message: "Sản phẩm cần tìm:",
      data: postId,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};

export const createCategory = async (req, res) => {
  try {
    const { title, content } = req.body;

    const createCategory = await Categories.create(req.body);

    return res.status(201).json({
      message: "Thêm thành công",
      data: createCategory,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
export const updateCategory = async (req, res) => {
  console.log("Params:", req.params);
  console.log("Body:", req.body);

  try {
    const updateCategory = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updateCategory)
      return res.status(404).json({ message: "Không tìm thấy bài viết" });

    return res
      .status(200)
      .json({ message: "Sửa thành công", data: updateCategory });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Có lỗi", error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const deleteCategory = await Categories.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: "true",
      message: `Dữ liệu vừa xoá:`,
      data: deleteCategory,
    });
  } catch (error) {
    return res.status(400).json("Có lỗi");
  }
};
