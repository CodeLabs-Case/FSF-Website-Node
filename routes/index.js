const router = require('express').Router()



router.use("/", require('./home.js'))
router.use("/agreements", require('./agreements.js'))
router.use("/services", require('./services.js'))
router.use("/galleries", require('./galleries.js'))
router.use("/admin", require('./admin.js'))



module.exports = router