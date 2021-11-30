import * as api from '../api/entries';


export const actionfetchallentries = () => async(dispatch) => {
  try {
    const res = await api.apifetchallentry()
    console.log(res.data)
    dispatch({type:"FETCH",payload:res.data });
  } catch (error) {
    console.log(error);
  }
};

export const  actioncreatenewentry=(entry)=>async(dispatch)=>{
  try {
    const {data}=await api.apicreateanentry(entry)
    console.log(data)
    dispatch({type:"CREATE",payload:data})
  } catch (error) {
    console.log(error)
  }
}

export const actionupdatepost=(id,updent)=>async(dispatch)=>{
try {
  const {data}=await api.apiupadteanentry(id,updent)
dispatch({type:"UPDATE",payload:data})
} catch (error) {
  console.log(error )
}
}
export const actiondeletepost=(id)=>async(dispatch)=>{
  try {
    await api.apideletepost(id)
    dispatch({type:"DELETE",payload:id})
  } catch (error) {
    console.log(error)
  }
}