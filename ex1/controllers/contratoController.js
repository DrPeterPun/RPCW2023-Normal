const Contratos = require('../models/contratos')

module.exports.list = () => {
    console.log("pedido de list")

    return Contratos.find().exec()
}

module.exports.lookup = (id) => {
    return Contratos.findById(id).exec()
}

module.exports.list_by_year = (year) => {
    return Contratos.find({"DataInicioContrato":1}).exec()
}

module.exports.list_by_instituicao = (inst) => {
    return Contratos.find({"NomeInstituicao":inst}).exec()
}

module.exports.list_cursos = () => {
    return Contratos.distinct("Curso").exec()
}

module.exports.list_instituicoes = () => {
    return Contratos.distinct("NomeInstituicao").exec()
}

module.exports.deleteid = (id) => {
    return Contratos.deleteOne({_id: id}).exec()
}

module.exports.insert = (contrato) => {
    return Contratos.insertOne(contrato).exec()
}
