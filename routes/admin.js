const router = require('express').Router()
const path = require('path')
const fs = require('fs')
require('dotenv').config()



router.route('/').get((req, res, err)=>{

    const basePath = process.env.BASE_PATH

    if(err){
        console.log(err)
    }

    const host = req.headers.host

    if(host === 'localhost:3000') {
        res.render(basePath + 'fsf-website-node/views/admin.ejs')
    }
    else {
        res.render(path.join('/var/app/current/views/admin.ejs'))
    }
})



module.exports = router