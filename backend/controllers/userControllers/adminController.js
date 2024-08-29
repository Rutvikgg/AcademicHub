const Admin = require('../../models/userModels/adminModel');
const ProductAdmin = require('../../models/userModels/productAdminModel');
const SystemAdmin = require('../../models/userModels/systemAdminModel');
const factory = require('../handleFactory');

exports.getAllAdmin = factory.getAll(Admin);
exports.getAdmin = factory.getOne(Admin);
exports.createAdmin = factory.createOne(Admin, 'Admin');
exports.updateAdmin = factory.updateOne(Admin, 'Admin');
exports.deleteAdmin = factory.deleteOne(Admin);

exports.getAllSystemAdmin = factory.getAll(SystemAdmin);
exports.getSystemAdmin = factory.getOne(SystemAdmin);
exports.createSystemAdmin = factory.createOne(SystemAdmin, 'SystemAdmin');
exports.updateSystemAdmin = factory.updateOne(SystemAdmin, 'SystemAdmin');
exports.deleteSystemAdmin = factory.deleteOne(SystemAdmin);

exports.getAllProductAdmin = factory.getAll(ProductAdmin);
exports.getProductAdmin = factory.getOne(ProductAdmin);
exports.createProductAdmin = factory.createOne(ProductAdmin, 'ProductAdmin');
exports.updateProductAdmin = factory.updateOne(ProductAdmin, 'ProductAdmin');
exports.deleteProductAdmin = factory.deleteOne(ProductAdmin);
