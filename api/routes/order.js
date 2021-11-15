const Order = require("../models/Order");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//tao ms san pham
//nguoi dung luon co gio hang cua rieng mk
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update sản phẩm
// chir quả trị viên ms có quyền lập đơn hàng
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET user Order
// tiếp nhận dữ liệu
//  cho phép 1 khác hàng được order nhiều đơn hàng
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL SP
//nhận đc tất cả các đơn đặt hàng thì đó phải là admin
// router.get("/", verifyTokenAndAdmin, async(req, res) => {
//     try {
//         const orders = await Order.find();
//         res.status(200).json(order)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
router.get("/show", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const orders = query
      ? await Order.find().sort({ _id: -1 }).limit(5)
      : await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//thống kê, nhận được doanh thu hàng tháng
// async(req, res) => phản hồi yêu cầu ko đồng bộ
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
	const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth },...(productId && {
		  products:{$elemMatch: {productId}},
	  }),
	  },
	},
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income); //gửi phản hồi thu nhập
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
