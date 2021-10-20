const express = require("express")

const promoRouter = express.Router()

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promortoins: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promortoins');
})
.delete((req, res, next) => {
    res.end('Deleting all promortoins');
})

//with id
promoRouter.route('/:promoId')
.get((req,res,next) => {
    res.end('Will send details of the promotions: ' + req.params.promoId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put((req, res, next) => {
  res.write('Updating the promortoins: ' + req.params.promoId + '\n');
  res.end('Will update the promortoins: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promortoins: ' + req.params.promoId);
})

module.exports = promoRouter;
