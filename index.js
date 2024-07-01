console.log("Hello from Node");
const path = require("path");
var fs = require("fs");

// let filePath = "./file.txt";
// let fileDir = path.dirname(filePath);
// let fileName = path.basename(filePath);
// let fileExt = path.extname(filePath);
// let fileBase = path.basename(filePath, fileExt);

// let fileAbsPath = path.resolve("./newFile3.txt");
// console.log("File Abs Path: ", fileAbsPath);

// let folderAbsPath = path.resolve("./newDir/");
// console.log("Folder Abs Path: ", folderAbsPath);

// let newDir = path.join(folderAbsPath, "newFIletext.txt");

// fs.copyFile(fileAbsPath, newDir, function (err) {
//   if (err) throw err;
//   console.log("File copied successfully!");
// });

// console.log("Dir: ", fileDir);
// console.log("Name: ", fileName);
// console.log("Ext: ", fileExt);
// console.log("Base: ", fileBase);
// console.log("Abs Path: ", fileAbsPath);

// let old = fileAbsPath;
// let newPath = "/Users/aatmikpanse/dev/learnNode/newDir/file.txt";

// fs.renameSync(old, newPath, function (err) {
//   if (err) throw err;
//   console.log("File renamed successfully!");
// });

// //READ FILE
// try {
//   var data = fs.readFileSync("file.txt", "utf8");
//   console.log(data.toString());
// } catch (e) {
//   console.log("Error:", e.stack);
// }

// // WRITE FILE
// // fs.writeFile("file.txt", "data to 1 1 1 1", function (err) {
// //   if (err) throw err;
// //   console.log("Data written successfully!");
// // });

// // APPEND FILE
// let line = "data to 1 1 1 1";

// fs.appendFileSync("file.txt", "data to 2 2 2 2", function (err) {
//   if (err) throw err;
//   console.log("Data appended successfully!");
// });

// fs.appendFileSync("file.txt", `\n${line}`, function (err) {
//   if (err) throw err;
//   console.log("Data appended successfully!");
// });

// fs.mkdir("newDir", function (err) {
//   if (err) throw err;
//   console.log("Directory created successfully!");
// });

// fs.rmdir("newDir", function (err) {
//   if (err) throw err;
//   console.log("Directory deleted successfully!");
// });

// fs.renameSync("file321.txt", "newFile3.txt", function (err) {
//   if (err) throw err;
//   console.log("File renamed successfully!");
// });

// console.log("" + fs.readFileSync("file.txt", "utf8"));

// CDN - Content Delivery Network
// https://cdnjs.com/
// https://www.jsdelivr.com/
// https://unpkg.com/
// https://www.jsdelivr.com/

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log("Parsed URL: ", parsedUrl);

  res.setHeader("Content-Type", "text/html");
  res.write("<html><head></head><body>");
  if (parsedUrl.pathname === "/login") {
    fs.readFile("login.html", "utf8");
  } else {
    fs.readFile("index.html", "utf8");
  }
});

const port = 1212;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
