const generatePage = require("../src/template");
const { writeFile, copyFile } = require("../utils/generate-site");

const sampleAnswers = require("./answers");

writeFile(generatePage(sampleAnswers))
  .then((res) => {
    console.log(res);
    return copyFile();
  })
  .then((res) => {
    console.log(res);
    console.log("Done!");
  })
  .catch((err) => {
    console.log(err);
  });
