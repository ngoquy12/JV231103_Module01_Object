const array = [1, 2, 3, 4, 5, 6, 7, 8];

// Lọc ra những phần tử thỏa mãn / không thỏa mãn điều kiện
// Nó sẽ trả về một mảng mới chứa các giá trị thoả mãn điều kiện, nếu không có điều kiện nào thoả mãn thì sẽ trả mảng rỗng
// Hay ứng dụng trong trường hợp muốn xóa 1 pt khỏi mảng

// const filterNumber = array.filter((item, index) => {
//   console.log(`item: ${item} , index: ${index}`);
//   return item !== 1;
// });

//1.  const filterNumber = array.filter((arr) => arr !== 1); // Kết quả:  [2, 3, 4, 5, 6, 7, 8]
// const filterNumber = array.filter((arr) => arr > 5); // Kết quả:  [6, 7, 8]
// const filterNumber = array.filter((arr) => arr > 9); // Kết quả:  []

// Tìm kiếm một phàn tử trong mảng theo một điều kiện cụ thể => hàm find()
// Hay ứng dụng để tìm kiếm một phần tử duy nhất trong mảng
// Nó sẽ trả về một phần tử có trong mảng mà thỏa mãn điều kiện, nếu không có điều kiện nào thỏa mãn thì sẽ trả về undefined

// 2. const findNumber = array.find((arr) => arr === 2); // Kết quả: 2
// const findNumber = array.find((arr) => arr === 9); // Kết quả: undefined

// Lấy ra vị trí của một phần tử trong mảng nếu thỏa mãn điều kiện
// Hay ứng dụng trong trường hợp tìm kiếm vị trí của một phần tử trong mảng
// Nó trả về vị trí của phần tử trong mảng nếu thõa mãn điều kiện, trả về -1 nếu không thỏa mãn điều kiện

// 3.  const findIndex = array.findIndex((arr) => arr === 4); // Kết quả: 3
// const findIndex = array.findIndex((arr) => arr === 10); // Kết quả: -1

// Hàm làm thay đổi tất cả giá trị của phần tử trong mảng => fill()
// 4.  const fillArray = array.fill(10, 0, 5); // Kết quả: [10, 10, 10, 10,10,  6,  7,  8]

// Kiểm tra xem là tất cả các phần tử có trong mảng có thỏa mãn điều kiện không
// CHỉ cần có 1 điều kiện sai thì sẽ trả về false, tương đương như toán tử &&
// 5.  const checkAllCondition = array.every((arr) => arr >= 8); // Kết quả: false

// 6. Kiểm tra chỉ cần 1 điều kiện thoả mãn thì mảng sẽ nhận giá trị là true
// const checkSomeCondition = array.some((arr) => arr >= 10); // Kết quả: false

// 7. forEach()
array.forEach((value) => {
  console.log(`Phần tử trong mảng ${value}`);
});

// map(): được sử dụng để lặp qua các phần tử của mảng và trả về một mảng mới đã được chỉnh sửa
// có số lượng phần tử bằng với số lượng phần tử của mảng cũ

const users = [
  {
    userId: 1,
    userName: "A",
    age: 20,
  },
  {
    userId: 2,
    userName: "B",
    age: 21,
  },
  {
    userId: 3,
    userName: "C",
    age: 22,
  },
];

const htmls = users.map((value, index) => {
  return `
    <ul>
      <li>Số thứ tự: ${index}</li>
      <li>Họ và tên: ${value.userName}</li>
      <li>Tuổi: ${value.age}</li>
    </ul>
  `;
});

// 9. Reduce(): Hay được sử dụng để thực hiện các logic tính toán trong một mảng
const prices = [200, 400, 500, 1000, 780];

let total = 0; // Biến lưu trữ
for (let i = 0; i < prices.length; i++) {
  total += prices[i]; // Tiến hành lưu trữ giá trị của mảng mỗi lần lặp qua
}

// Cú pháp: array.reduce(callback, initialValue)

const totalPrice = prices.reduce((prevValue, currentValue) => {
  // Lần 1: prevValue: 0, currentValue: 200 => total = 200
  // Lần 2: prevValue: 200, currentValue: 400 => total = 600
  // Lần 3: prevValue: 600, currentValue: 500 => total = 1100
  // Lần 4: prevValue: 1100, currentValue: 1000 => total = 2100
  // Lần 5: prevValue: 2100, currentValue: 780 => total = 2880

  return prevValue + currentValue;
}, 0);

// Cách clone mảng
const numbers1 = [1, 2, 3, 4];
const arrCopy = [...numbers1, 5, 6, 7]; // spread operator

const obj1 = {
  name: "A",
  age: 22,
};

const obj2 = {
  address: "Hà Nội",
  gender: "Nam",
};

const mergeObj = { ...obj1, ...obj2 };

// Cách để truy xuất nhanh vào các thuộc tính trong đối tượng
// => destrutoring
const user = {
  name: "N",
  age: 22,
  address: "Hà Nội",
};

// let userName = user.name;
// let age = user.age;
// let address = user.address;

let { name, age, address } = user;

console.log(name, age, address);
