const model = require('../models/students')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getAll(req, res, next) {
  model.getAll()
    .then(function(data) {
      res.status(200).send({
        data
      })
    })
    .catch(next)
}

function getOne(req, res, next) {
  model.getOne(parseInt(req.params.studentId))
    .then(function(data) {
      if (data) {
        return res.status(200).send({
          data
        })
      } else {
        throw {
          status: 404,
          message: 'Student Not Found'
        }
      }
    })
    .catch(next)
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  getAllInstructors,
  checkIfStudentExists
}