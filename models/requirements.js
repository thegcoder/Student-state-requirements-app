const mongoose = require('./connection.js

const Requirements = mongoose.model('Requirements', RequirementSchema);

/*const RequirementsSchema = new mongoose.Schema({
  name: 'English/Language Arts'
  credits: 4
},
    name: String,
    credits: number
  });*/

  const RequirementsCollection = mongoose.model('English/Language Arts', RequirementsSchema)

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
