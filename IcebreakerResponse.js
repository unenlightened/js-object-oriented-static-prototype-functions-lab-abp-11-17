function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
    return new IcebreakerResponse(email);
  })
}

let email = IcebreakerResponse.BatchCreate(emails);
