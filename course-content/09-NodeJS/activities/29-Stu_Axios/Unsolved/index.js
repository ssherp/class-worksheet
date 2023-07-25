const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl)
    .then(function (response){
      const repoNames= response.data.map(repo=>repo.name);

      const repoNamesString=repoNames.join("/n")

      fs.writeFile("repos.txt",repoNamesString,(err)=>{
        if (err){
          console.error("error sav,erring file");
            } else{
              console.log(`successfully save ${repoNames.length} repositories to repos.txt`);
            }
      });
    })

  .catch(function(error){
    console.error("error fetching data from GitHuh API", error) 
   });
  });


