let fs = require("fs");

function readAsyncFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function showData(data) {
  console.log(data);
}
async function getData() {
  try {
    let v = await readAsyncFile();
    console.log(v);
  } catch (err) {
    console.log(err);
  }
}
getData();
