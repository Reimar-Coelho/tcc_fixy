const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

ClienteSchema.pre('save', async function(next) {
    if (!this.isModified('senha')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);