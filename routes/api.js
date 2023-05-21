const router= require('express').Router();

router.use('/inmuebles',require('./api/inmuebles'))

//Aviso por si solo se pone api
router.get('/', (req, res) => {
  //res.render('index', { title: 'Express' });
  console.log("hello");
  res.json({
    message: "Querias decir? http://localhost:3000/api/inmuebles"
  });
});

module.exports = router;