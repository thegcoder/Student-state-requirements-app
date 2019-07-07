const mongoose = require('./connection.js

const Requirements = mongoose.model('Requirements', RequirementSchema);

const RequirementSchema = new mongoose.Schema({
  name: {
      type: String,
      require: true,
      unique: true
  },
  description: String
})

/*const RequirementsSchema = new mongoose.Schema({
  name: 'English/Language Arts'
  credits: 4
},
    name: String,
    credits: number
  });*/

  async function all(type) {
      let data = Promise.resolve(false);
      switch (type) {
        case 'requirements':
            data = await Requirements.find({});
            return data;
            break;
        default:
            return data;
  }
  async function read(type, id) {
    let data = Promise.resolve(false);
    switch (type) {
      case 'requirements':
            data = await Requirements.findById(id);
            return data;
            break;
        default:
            return data;
    }
}

async function update(type, id, object) {
    let data = Promise.resolve(false);
    switch (type) {
      case 'requirements':
            data = await Requirements.findByIdAndUpdate(id, object);
            return data;
            break;
        default:
            return data;
    }
}







  function getRequirements() {
    return RequirementsCollection.find()
  }

  function addRequirement(requirementsObject) {
    return RequirementsCollection.create(requirementsObject)
  }

  function getRequirements(requirementsId) {
    return RequirementsCollection.findByRequirementId(requirementsId)
  }

  function updateRequirement(requirementsId, requirementsObject) {
    return RequirementsCollection.findByIdAndUpdate(requirementsId, requirements)
  }

  function deleteRequirements(requirementsId) {
    return RequirementsCollection.findByIdAndDelete(requirementsId)
  }
