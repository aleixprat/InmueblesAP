const router = require('express').Router();
const Inmueble = require('../../models/inmueble.model');

router.get("/", async (req,res) => {
    try {
        const allInmuebles = await Inmueble.find();
        res.json(allInmuebles);
    } catch(err) {
        res.json({ fatal: err.message });
    }
});

router.post("/", async (req,res) => {
    try {
        const createdInmueble = await Inmueble.create(req.body);
        res.json(createdInmueble);
    } catch (err) {
        res.json({ fatal: err.message });
    }
})

router.put("/inmuebleID", async (req,res) => {
    const inmuebleID = req.params.inmuebleID;
    console.log(inmuebleID);
    try {
        const updatedInmueble = await Inmueble.findByIdAndUpdate(inmuebleID);
        res.json(updatedInmueble);
    } catch (err) {
        res.json({ fatal: err.message });
    }
})

module.exports = router;