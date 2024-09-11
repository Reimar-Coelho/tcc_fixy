const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    complemento: {
        type: String
    },
    cidade: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);