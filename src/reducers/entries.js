const reducer = (entry=[],action) => {
  switch(action.type) {
    case "FETCH":
      return action.payload  ;
    case "CREATE":
      return [...entry, action.payload];
      case "UPDATE":
return entry.map((ent)=>ent._id===action.payload._id?action.payload:ent)
case "DELETE":
  return entry.filter((en)=>en.id!==action.payload)
    default:
      return entry;
  }
};

export default reducer;
