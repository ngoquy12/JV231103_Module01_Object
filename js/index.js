const products = [
  {
    id: 2,
    name: "Cà rốt",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/800/2018/11/16/ca-rot-154235899798180572311-crop-1542359010644581734138.jpg",
    price: 2000000,
  },
  {
    id: 3,
    name: "Táo",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.UatWKkXE4x8HbmaWEKq1DAHaGZ&pid=Api&P=0h=180",
    price: 2000000,
  },
];

const listItem = document.getElementById("listProduct");

const loadData = () => {
  const htmls = products.map((pro, i) => {
    return `
      <li class="cart">
        <image class="img-product" height="400" src=${pro.image}/>
        <h3>${pro.name}</h3>
        <p>${pro.price}</p>
        <button onclick="handleDelete(${pro.id})">Xóa</button>
      </li>
    `;
  });

  const html = htmls.join("");

  listItem.innerHTML = html;
};

loadData();

const handleDelete = (id) => {
  let newArr = products.findIndex((pro) => pro.id === id);
  products.splice(1, newArr);

  loadData();
};
