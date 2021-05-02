# git-search-ts
Git search with typescript

Instructions:
- "git clone https://github.com/ErikKiralj/git-search-ts.git" in directory of your choice via CLI (VSCode terminal, GitBash etc.)
- switch branch to "origin/master"
- open terminal in root directory and run "npm install" command
- in the root directory create ".env" file
- open github.com and navigate to your profile settings, open developer settings and click personal access token and generate your token 
- save your token in the .env file under "REACT_APP_TOKEN"
- run "npm start" command

Project was started from scratch, no create-react-app. In the search bar you enter the username you want to look up on github.com, if it exists, it lists out user details (profile picture, username, email and link to github profile) on the left side, and user repositories and their details on the right side. Repository list can be sorted ascending and descending. Project is mobile responsive.
