function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(message){
  return new IcebreakerResponse(message);
}
