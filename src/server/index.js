const express = require('express');

const PORT = 3000;

const app = express();

const friends = [
  {
    id: 0,
    name: 'Albert Einstein',
  },
  {
    id: 1,
    name: 'Sir Isaac Netwon',
  },
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) res.json(friend);
  else
    res.status(400).json({
      error: `Friend ${friendId} does not exist`,
    });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}...`);
});
