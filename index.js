import inquirer from "inquirer";
import fs from "fs";
import information from "./infopage.js";
const quenstion =[
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?"
    },{
        type:"input",
        name:"description",
        message:"Please provide a description of your project"
    },{
        type:"input",
        name:"installation",
        message:"Please provide installation instructions"
    },{
        type:"input",
        name:"usage",
        message:"Please provide usage information"
    },{
        type:"input",
        name:"contribution",
        message:"Please provide contribution guidelines"
    },{
        type:"input",
        name:"test",
        message:"Please provide test instructions"
    },{
        type:"list",
        name:"license",
        message:"Please select a license",
        choices: [   "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",]
    },{
        type:"input",
        name:"username",
        message:"Please provide your GitHub username"
    },{
        type:"input",
        name:"email",
        message:"Please provide your email address"
    }
  ];

  const answer =  await inquirer.prompt(quenstion);

  const newinfo = information(answer);
  fs.writeFile('README.md', newinfo, (err) =>
    err? console.log(err) : console.log('Your file is created Successfully!')
  );