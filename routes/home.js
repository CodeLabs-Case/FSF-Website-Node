const router = require('express').Router()
const path = require('path')
const fs = require('fs')
require('dotenv').config()



router.route('/').get((req, res, err)=>{

    const basePath = process.env.BASE_PATH

    if(err){
        console.log(err)
    }

    // Check if the server is running in a local environment and render the proper path to file
    const host = req.headers.host

    if(host === 'localhost:3000') {
        res.render(basePath + 'fsf-website-node/views/home.ejs')
    }
    else {
        res.render(path.join('/var/app/current/views/home.ejs'))
    }
})



module.exports = router