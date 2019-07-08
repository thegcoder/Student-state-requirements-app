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
const StateSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true,
   unique: true
 },
 requirements:[],
 students: []
});


/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const StateCollection = mongoose.model('State', StateSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
 // Get All
 async function all(type) {
     let data = Promise.resolve(false);
     switch (type) {
         case 'states':
             data = await States.find({});
             return data;
             break;
         case 'students':
             data = await Students.find({});
             return data;
             break;
         case 'requirements':
             data = await Requirements.find({});
             return data;
             break;
         default:
             return data;
     }
 }

 // Create Operations
 async function create(type, object) {
     let data = Promise.resolve(false);
     switch (type) {
         case 'states':
             data = await States.create(object);
             return data;
             break;
         case 'students':
             data = await Students.create(object);
             return data;
             break;
         case 'requirements':
             data = await Requirements.create(object);
             return data;
             break;
         default:
             return data;
     }
 }

 // Read Operations
 async function read(type, id) {
     let data = Promise.resolve(false);
     switch (type) {
         case 'states':
             data = await States.findById(id);
             return data;
             break;
         case 'students':
             data = await Students.findById(id);
             return data;
             break;
         case 'requirements':
             data = await Requirements.findById(id);
             return data;
             break;
         default:
             return data;
     }
 }

 // Update Operations
 async function update(type, id, object) {
     let data = Promise.resolve(false);
     switch (type) {
         case 'states':
             data = await States.findByIdAndUpdate(id, object);
             return data;
             break;
         case 'students':
             data = await Students.findByIdAndUpdate(id, object);
             return data;
             break;
         case 'requirements':
             data = await Requirements.findByIdAndUpdate(id, object);
             return data;
             break;
         default:
             return data;
     }
 }

 // Delete Operations
 async function deleter(type, id) {
     let data = Promise.resolve(false);
     switch (type) {
         case 'states':
             data = await States.findByIdAndDelete(id);
             return data;
         case 'students':
             data = await Students.findByIdAndDelete(id);
             return data;
         case 'requirements':
             data = await Requirements.findByIdAndDelete(id);
             return data;
         default:
             return data;
     }
 }

 /**
  * 4. Export all the functions
  */
  module.exports = {
    all,
    create,
    read,
    deleter,
    remove
  }
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllStates,
  addState,
  updateState,
  deleteState
}
