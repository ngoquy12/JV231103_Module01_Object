// Cú pháp khai báo

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.className = "JV231103";

// Khởi tạo đối tượng User
const user1 = new User("Lâm đẹp trai", "lam@gmail.com", "12345");
user1.readPost = "Đọc báo";

const user2 = new User("Nguyễn Văn A", "nva@gmail.com", "12345");
user2.manager = "Quản lý hệ thống";

console.log("user1:", user1);
console.log("user2:", user2);

// Viết chương trình yêu cầu người dùng nhập các lựa chọn
// 1. Nhập thông tin user: name, email, password và lưu vào trong mảng
// 2. In ta thông tin mảng người dùng ra bên ngoài
// 3. Nhập tên người dùng từ trình duyệt và tìm tiếm tên người đó có trong mảng không?
// 4. Thoát chươngg trình
// Các trường hợp còn lại thông báo là nhập sai lựa chọn

let choose;
const users = [];

const addUser = () => {
  const userNameValue = prompt("Nhập tên: ");
  const emailValue = prompt("Nhập email: ");
  const passwordValue = prompt("Nhập mật khẩu: ");

  // Khai báo đối tượng user
  const user = {
    userName: userNameValue,
    email: emailValue,
    password: passwordValue,
  };

  // Thêm phần tử vào cuối
  users.push(user);
};

/**
 * Đọc danh sách user
 * @param {*} array Mảng user
 */
const readUser = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log("Danh sách user: ", array[i]);
  }
};

/**
 * Hàm tiếm user theo tên
 * @param {*} inputValue Tên lấy từ người dùng
 * @param {*} array Mảng chứa danh sách user
 * @returns Tra về index nếu như tìm thấy user, -1 nếu không tìm thấy
 * Auth: NVQUY(04/12/22023)
 */
const handleSearch = (inputValue, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].userName === inputValue) {
      return i; // Trả về vị trí tìm thấy
    } else {
      return -1; // Nếu không tìm thấy
    }
  }
};

do {
  choose = +prompt("Mời bạn nhập lựa chọn: ");

  switch (choose) {
    case 1:
      // Gọi hàm addUser
      addUser();
      break;
    case 2:
      // Gọi hàm read User
      readUser(users);
      break;
    case 3:
      const nameSearch = prompt("Nhập tên tìm kiếm: ");

      // Biến lưu trữ giá trị trả về từ hàm handleSearch
      const result = handleSearch(nameSearch, users);
      if (result !== -1) {
        console.log(`${nameSearch} xuất hiện tại vị trí thứ ${result}`);
      } else {
        console.log(`Không tìm thấy tên ${nameSearch}`);
      }
      // for (let i = 0; i < users.length; i++) {
      //   if (users[i].userName === nameSearch) {
      //     console.log("Vị trí xuất hiện của phần tử: ", i);
      //     break;
      //   } else {
      //     console.log("Không tìm thấy tên");
      //   }
      // }
      break;

    default:
      break;
  }
} while (choose !== 4);

const getName = (param1, param2, callbackfunction) => {
  // Chờ cho pr1, pr2 xử lý xong

  // gọi callback
  callbackfunction();
};
