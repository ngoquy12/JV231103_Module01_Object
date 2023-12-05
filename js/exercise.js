const users = [];

const products = [];

const carts = [];

let choose;

do {
  choose = +prompt("Mời bạn nhập lựa chọn");

  switch (choose) {
    case 1:
      const userId = +prompt("Nhập id: ");
      const userName = prompt("Nhập tên user: ");
      const email = prompt("Nhập email: ");
      const password = prompt("Nhập mật khẩu: ");

      // Tạo đối tượng user
      const user = {
        userId: userId,
        userName: userName,
        email: email,
        password: password,
        createdAt: new Date().toISOString().split("T")[0],
      };

      // Thê phần đối tượng user vào mảng
      users.push(user);
      break;
    case 2:
      const productId = +prompt("Nhập id sản phẩm: ");
      const productName = prompt("Nhập tên sản phẩm: ");
      const price = +prompt("Nhập giá: ");

      // Tạo đối tượng product
      const product = {
        productId: productId,
        productName: productName,
        price: price,
        createdAt: new Date().toISOString().split("T")[0],
      };

      // Thêm đối tượng product vào mảng
      products.push(product);
      break;

    case 3:
      const cartId = +prompt("Nhập id cart: ");
      const proId = +prompt("Nhâp id của sản phẩm: ");
      const uId = +prompt("Nhập id của user: ");
      const quantity = +prompt("Nhập số lượng: ");

      // Tạo đối tượng cart
      const cart = {
        cartId: cartId,
        productId: proId,
        userId: uId,
        quantity: quantity,
      };

      // Thêm đối tượng cart vào trong mảng
      carts.push(cart);
      break;

    case 4:
      for (let i = 0; i < users.length; i++) {
        console.log("user: ", users[i]);
      }
      break;
    case 5:
      for (let i = 0; i < products.length; i++) {
        console.log("product: ", products[i]);
      }
      break;
    case 6:
      for (let i = 0; i < carts.length; i++) {
        console.log("art: ", carts[i]);
      }
      break;
    case 7:
      // Biến lưu trữ tổng giá tiền
      let total = 0;

      // Lặp qua từ phần tử của mảng carts
      for (let i = 0; i < carts.length; i++) {
        // Lấy ra id của product từ mảng carts
        const productId = carts[i].productId;

        // Tìm kiếm product theo id
        const findProduct = products.find((pro) => pro.productId === productId);

        // Cộng dồn giá tiền
        // Tổng = Giá trị trước đó + giá sản phẩm * số lượng
        total = total + findProduct.price * carts[i].quantity;
      }

      console.log("Tổng số tiền của giỏ hàng: ", total);

      break;

    default:
      break;
  }
} while (choose !== 8);
