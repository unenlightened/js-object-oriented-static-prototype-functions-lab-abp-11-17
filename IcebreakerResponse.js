function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return new IcebreakerResponse(emails);
}
