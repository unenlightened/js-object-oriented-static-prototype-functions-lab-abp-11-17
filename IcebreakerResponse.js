function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return data.map(function(emails)){
    return new IcebreakerResponse(emails[0]);
  }
}
