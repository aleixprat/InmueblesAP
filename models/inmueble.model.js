const {model,Schema} = require('mongoose');

const inmuebleSchema = new Schema({
    piso: { type: String, required: true},
    letra: String,
    extension: Number,
    numero_de_habitacones: Number,
    alquilado: Boolean,
    nombre_propietario: { type: String, required: true},
    mail_de_contacto: { type: String, required: true},
}, 
{ 
    timestamps: true 
});

module.exports = model('inmueble',inmuebleSchema);