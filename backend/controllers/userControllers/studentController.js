const Student = require('../../models/userModels/studentModel');
const factory = require('../handleFactory');

exports.getAllStudents = factory.getAll(Student);
exports.getStudent = factory.getOne(Student);
exports.createStudent = factory.createOne(Student, 'Student');
exports.updateStudent = factory.updateOne(Student, 'Student');
exports.deleteStudent = factory.deleteOne(Student);
