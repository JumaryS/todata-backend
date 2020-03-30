/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(names) {
  return names.text
}
const getCompleteness = function(completeness) {
  if(completeness.complete){
    return true
  }else{
    return false
  }
}
const getPriority = function(complete) {
  return complete.priority
}
const isComplete = function(completeness) {
  if(completeness.complete){
    return true
  }else{
    return false
  }
}
const isNotComplete = function(not){
return !not.complete
}
const isHighPriority = function(standards) {
    return standards.priority > 1 }
    


/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(name) {
  return name.map(getTodoName)
}
const priorities = function(priority) {
  return priority.map(getPriority)
}
const namesAndPriorities = function(both) {
  return both.map()
}
const justNotComplete = function(array) {
  return array.filter(isNotComplete)

}
const justComplete = function(array) {
  return array.filter(isComplete)
}
const priority2Only = function() {}
const priority1Only = function() {}



module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
