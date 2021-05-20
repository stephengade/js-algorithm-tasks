function checkYuGiOh(n) {
  n++;

if (Number.isNaN(n) && parseInt(n, 10) !== "number" || n === undefined && n === null) {
   let  changeOh = JSON.stringify(n);
    const iveChange = JSON.stringify(changeOh);
  return console.log("`" + `invalid parameter: ${iveChange}` + "`")
  } 
  
   

  let arr = new Array(n)
    .fill(null)
    .map((e, i) => i)
    .splice(1);

  arr = arr.map((n) => {

    if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0) {
      return "yu-gi-oh";
    }
    if (n % 2 === 0 && n % 3 === 0) {
      return "yu-gi";
    }
    if (n % 2 === 0 && n % 5 === 0) {
      return "yu-oh";
    }
    if (n % 2 === 0) {
      return "yu";
    }
    if (n % 3 === 0) {
      return "gi";
    }
    if (n % 5 === 0) {
      return "oh";
    }

    return n;
  });

  return console.log(arr);
  
}

checkYuGiOh(30);
checkYuGiOh("10");
checkYuGiOh("fizzbuzz is meh");
