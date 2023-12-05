const products = [];

/**
 * Thêm mới sản phẩm vào mảng
 * Auth: NVQUY(05/12/2023)
 */
const handleAddProduct = () => {
  let productId = +prompt("Nhập id sản phẩm: ");
  let productName = prompt("Nhập tên sản phẩm: ");
  let price = prompt("Nhập giá sản phẩm: ");
  let image = prompt("Nhập ảnh sản phẩm: ");
  let description = prompt("Nhập chi tiết sản phẩm: ");

  // Tạo đối tượng product
  const newProduct = {
    productId: productId,
    productName: productName,
    price: price,
    image: image,
    description: description,
    createdAt: new Date().toISOString().split("T")[0],
  };

  // Push đối tượng vào trong mảng
  products.push(newProduct);
};

/**
 * Hiển thị danh sách sản phẩm
 * Auth: NVQUY(05/12/2023)
 */
const handleLoadData = () => {
  if (products.length === 0) {
    console.log("Không có sản phẩm nào!!!");
  } else {
    products.forEach((item) => console.log(item));
  }
};

/**
 * Tìm kiếm sản phẩm theo tên
 * @returns Trả thông tin một sản phẩm nếu tìm thấy
 * Auth: NVQUY(05/12/2023)
 */
const handleSearchByName = () => {
  // Lấy tên sản phẩm từ client
  const searchValue = prompt("Nhập tên sản phẩm cần tìm kiếm: ");

  // Tìm kiếm sản phẩm trong mảng
  const findProduct = products.find((pro) => pro.productName === searchValue);

  // Kiểm tra kết quả trả về
  if (!findProduct) {
    return `Không tìm thấy sản phẩm ${searchValue}`;
  } else {
    return findProduct;
  }
};

/**
 * Sắp xếp danh sách sản phẩm theo giá
 * @param {*} type Lựa chọn tăng dần hoặc giảm dần theo giá
 * Auth: NVQUY(05/12/2023)
 */
const handleSortByPrice = (type) => {
  // Sắp xếp sản phẩm theo giá
  if (type === "down") {
    // Sắp xếp giảm dần
    products.sort((a, b) => {
      return b.price - a.price;
    });
  } else {
    // Sắp xếp tăng dần
    products.sort((a, b) => {
      return a.price - b.price;
    });
  }

  // Gọi hàm để hiển thị dữ liệu
  handleLoadData();
};

/**
 * Lọc những sản phẩm có giá >= 100000
 * @returns Mảng các sản phẩm thỏa mãn điều kiện và thông báo "Không có sản phẩm nào" nếu không thỏa mãn điều kiện
 */
const handleFiterByPrice = () => {
  // Lọc các sản phẩm có giá lớn hoặc bằng 100000
  const filterProductByPrice = products.filter((pro) => pro.price >= 100000);

  // Kiểm tra kết quả trả về
  if (filterProductByPrice.length === 0) {
    return "Không có sản phẩm nào";
  } else {
    return filterProductByPrice;
  }
};

// Bài 2:
const users = [];

/**
 * Validate địa chỉ email
 * @param {*} email Email nhập từ phía client
 * @returns Trả về một chuỗi định dạng nếu email hợp lệ, không trả về dữ liệu nếu email không hợp lệ
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * Kiểm tra dữ liệu đầu vào
 * @param {*} email Email lấy từ người dùng
 * @param {*} password Mật khẩu lấy từ người dùng
 * @returns [] nếu dữ liệu hợp lệ, Mảng các lỗi nếu dữ liệu không hợp lệ
 */
const validateData = (email, password) => {
  // Gắn cờ để theo dõi trạng thái hợp lệ của dữ liệu
  let error = [];

  if (!validateEmail(email)) {
    error.push("Email không đúng định dạng");
  }

  if (password.length < 8) {
    error.push("Mật khẩu phải lớn hơn 8 ký tự.");
  }

  if (error.length > 0) {
    return error;
  } else {
    return [];
  }
};

/**
 * Thêm mới dữ liệu
 * @returns
 */
const createUser = () => {
  // Lấy dữ liệu từ phía client
  let userId = +prompt("Nhập id của user: ");
  let userName = prompt("Nhập tên: ");
  let gender = prompt("Nhập giới tính: ");
  let address = prompt("Nhập địa chỉ: ");
  let email = prompt("Nhập địa chỉ email: ");
  let password = prompt("Nhập mật khẩu: ");

  // Tạo đối tượng user
  const newUser = {
    userId: userId,
    userName: userName,
    gender: gender,
    address: address,
    email: email,
    password: password,
    createdAt: new Date().toISOString().split("T")[0],
  };

  // Bắt validate dữ liệu đầu vào
  let isValid = validateData(email, password);

  if (isValid.length > 0) {
    console.log(isValid);
  } else {
    // Thêm đối tượng user vào trong mảng
    users.push(newUser);
  }
};

/**
 * Hiển thị danh sách user
 * Auth: NVQUY(05/12/2023)
 */
const handleLoadUser = () => {
  if (users.length === 0) {
    console.log("Chưa có tài khoản nào!!!");
  } else {
    users.forEach((user) => console.log(user));
  }
};

/**
 * Tìm kiếm user theo tên
 * @param {*} userName Tên cần tìm kiếm lấy từ client
 * @returns Trả về mảng rỗng nếu không tìm thấy, Trả về mảng user nếu tìm thấy
 * Auth: NVQUY(05/12/2023)
 */
const handleSearchUser = (userName) => {
  // Tìm kiếm user trong mảng
  const findByUserName = users.filter((user) => user.userName === userName);

  // Kiểm tra kết quả trả về
  if (findByUserName.length === 0) {
    return "Không tìm thấy kết quả";
  } else {
    return findByUserName;
  }
};

const handleLogin = (email, password) => {
  if (!email || !password) {
    return "Email và mật khẩu không được phép để trống";
  } else {
    // Tìm kiếm user theo email
    const findUserByEmail = users.find((user) => user.email === email);

    if (!findUserByEmail) {
      return "Email hoặc mật khẩu không đúng";
    } else {
      if (
        findUserByEmail.email === email &&
        findUserByEmail.password === password
      ) {
        // Chuyển trang
        return "Đăng nhập thành công.";
      } else {
        return "Email hoặc mật khẩu không đúng";
      }
    }
  }
};
