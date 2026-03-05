require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "abdulkaiyummunshi",
  "id": 86400723,
  "node_id": "MDQ6VXNlcjg2NDAwNzIz",
  "avatar_url": "https://avatars.githubusercontent.com/u/86400723?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/abdulkaiyummunshi",
  "html_url": "https://github.com/abdulkaiyummunshi",
  "followers_url": "https://api.github.com/users/abdulkaiyummunshi/followers",
  "following_url": "https://api.github.com/users/abdulkaiyummunshi/following{/other_user}",
  "gists_url": "https://api.github.com/users/abdulkaiyummunshi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/abdulkaiyummunshi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/abdulkaiyummunshi/subscriptions",
  "organizations_url": "https://api.github.com/users/abdulkaiyummunshi/orgs",
  "repos_url": "https://api.github.com/users/abdulkaiyummunshi/repos",
  "events_url": "https://api.github.com/users/abdulkaiyummunshi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/abdulkaiyummunshi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdul Kaiyum Munshi ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 37,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2021-06-24T07:04:08Z",
  "updated_at": "2026-02-11T06:00:14Z"
}
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/twitter', (req, res) => {
    res.send("kaiyumdotcom")
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Code with Kaiyum</h2>")
})
app.get('/github', (req, res) =>{
    res.json(githubData)
})
app.listen(process.env.PORT, () =>{
    console.log(`Example app listening on port ${port}`)
})