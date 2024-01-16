var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    const data = [
        {
          "user_id": "583c5484cb79a5fe593425a9",
          "email": "test1@test.com",
          "name": "test1@test.com",
          "given_name": "Hello1",
          "family_name": "Test1",
          "nickname": "test1",
          "last_ip": "94.121.168.53",
          "logins_count": 1,
          "created_at": "2016-11-28T16:00:04.209Z",
          "updated_at": "2016-11-28T16:00:47.203Z",
          "last_login": "2016-11-28T16:00:47.203Z",
          "email_verified": true
        }
    ]
    res.json(data);
});

router.post('/', function(req, res) {
    res.send('POST handler for /contact route.');
});

module.exports = router;