const router = require('express').Router()
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    const host = req.headers.host

    if(host === 'localhost:3000') {
        res.render('C:/Users/davis/OneDrive/Documents/Development/ProJavaScript/fsf-website-node/views/admin.ejs')
    }
    else {
        res.render(path.join('/var/app/current/views/admin.ejs'))
    }
})



module.exports = router