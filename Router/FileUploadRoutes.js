const express = require('express');
const router = express.Router();
const FileUploadController = require('../Controller/FileUploadController');

router.post('/add', FileUploadController.uploadFile);
router.get('/find',FileUploadController.getallfile)
router.delete('/find/:id',FileUploadController.deleatfile)

module.exports = router;