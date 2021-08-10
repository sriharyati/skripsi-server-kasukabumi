const router = require('express').Router();
const apiController = require('../controllers/apiController');
const { uploadSingle } = require('../middlewares/multer');
var cors = require("cors");
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
router.get('/landing-page', cors(corsOptions), apiController.landingPage);
router.get('/detail-page/:id', cors(corsOptions), apiController.detailPage);
router.post('/booking-page', cors(corsOptions), uploadSingle, apiController.bookingPage);
router.get('/testimonial-page', cors(corsOptions), apiController.testimonialPage);
router.post('/form-page', cors(corsOptions), uploadSingle, apiController.formPage);
module.exports = router;