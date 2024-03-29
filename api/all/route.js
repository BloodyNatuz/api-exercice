var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    const data = [
        {
          "user_id": "583c3ac3f38e84297c002546",
          "email": "test@test.com",
          "name": "test@test.com",
          "given_name": "Hello",
          "family_name": "Test",
          "nickname": "test",
          "last_ip": "94.121.163.63",
          "logins_count": 15,
          "created_at": "2016-11-28T14:10:11.338Z",
          "updated_at": "2016-12-02T01:17:29.310Z",
          "last_login": "2016-12-02T01:17:29.310Z",
          "email_verified": true
        },
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