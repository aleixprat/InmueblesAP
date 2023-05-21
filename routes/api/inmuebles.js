const router = require('express').Router();
const Inmueble = require('../../models/inmueble.model');

//Consultar todos los inmuebles
router.get("/", async (req,res) => {
    try {
        const allInmuebles = await Inmueble.find();
        res.json(allInmuebles);
    } catch(err) {
        res.json({ fatal: err.message });
    }
});

//Creación de un inmueble
router.post("/", async (req,res) => {
    try {
        const createdInmueble = await Inmueble.create(req.body);
        res.json(createdInmueble);
    } catch (err) {
        res.json({ fatal: err.message });
    }
});

//Actualziar por ID de inmbueble
router.put("/:inmuebleID", async (req,res) => {
    const inmuebleID = req.params.inmuebleID;
    try {
        const updatedInmueble = await Inmueble.findByIdAndUpdate(inmuebleID,  req.body, { new: true });
        res.json(updatedInmueble);
    } catch (err) {
        res.json({ fatal: err.message });
    }
});

//Borrar un inmueble por su ID
router.delete("/:inmuebleID", async (req,res) => {
    const inmuebleID = req.params.inmuebleID;
    try {
        const deletedInmueble = await Inmueble.findByIdAndDelete(inmuebleID);
        if (!deletedInmueble) {
            return res.json({ fatal: `El inmueblecon el id "${inmuebleID}" no existe` });
        }
        res.json({
            _id : inmuebleID,
            message: "Se ha borrado correctamente"
        });
    } catch (err) {
        res.json({ fatal: err.message });
    }
});
module.exports = router;