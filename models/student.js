/*
 * Place all functions, classes, and/or DB schemas here for a single
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database.
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */

/* Step 2
 *
 * TODO: create model schema
 * NOTE: skip this if you are not using mongoose
 *
 */
 const StudentSchema = new mongoose.Schema({
      name: {
          type: String,
          required: true
      }
  });
/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const StudentCollection = mongoose.model('Student', StudentSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *

 */
 async function all(type) {
    let data = Promise.resolve(false);
    switch (type) {
      case 'students':
            data = await Students.find({});
            return data;
            break;
            case 'students':
            data = await Students.create(object);
            return data;
            break;

  async function read(type, id) {
      let data = Promise.resolve(false);
      switch (type) {
      case 'students':
            data = await Students.findById(id);
            return data;
            break;

function getStudentByStudentId(studentId) {
  return StudentCollection.find({studentId: studentId})
}

function addStudent(studentObject) {
  return StudentCollection.create(studentObject)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getStudentByStudentId,
  addStudent
}
