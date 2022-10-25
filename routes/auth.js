const router = require('express').Router()
const res = require('express/lib/response')
const user = require('../models/user')
const user = require('../models/user')

router.post('/register', async(req, res) =>{
   const user = new User({
    name: req.body.name,
    address: req.body.address,
    lastname: req.body.lastname,
    age: req.body.age,
    password: req.body.password
   })
   try {
    const saveUser = await user.save()
    res.json({
        error: null,
        data: 'datos'
    })

   } catch (error) {
    res.status(400).json({error})
   }
})

  

module.exports = router