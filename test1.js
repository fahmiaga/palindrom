const arr = [
  "092289",
  "992299",
  "12291",
  "982289",
  "22022022",
  "2301",
  "2013",
  "1001",
  "756564",
  "1011",
  "766567",
  "756546",
  "2002",
  "91019",
  "765567",
];

const result = [];

arr.map((array, i) => {
  const tempArr = array.split("").reverse().join("");
  if (arr[i] === tempArr) {
    result.push(array);
  }
});

console.log(result);
