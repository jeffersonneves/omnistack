const express = require('express');

const router = express.Router();

const DevController = require('./controller/DevController');
const LikeController = require('./controller/LikeController');
const DislikeController = require('./controller/DislikeController');

router.post('/devs', DevController.store);
router.post('/devs/:devId/likes', LikeController.store);
router.post('/devs/:devId/dislikes', DislikeController.store);

router.get('/devs', DevController.index);

module.exports = router;