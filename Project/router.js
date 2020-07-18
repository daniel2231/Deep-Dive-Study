let express = require('express');
let router = express.Router();
const viewPath = './views/';

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'index.html', { root: __dirname });
});

router.get(`/${id}`, (req, res) => {
    res.sendFile(viewPath + `${id}.html`, {root: __dirname});
})

module.exports = router;
