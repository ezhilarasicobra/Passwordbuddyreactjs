import axios from 'axios'

const url='https://passwordbuddy.herokuapp.com/api/entries'

export const apifetchallentry=()=>axios.get(url)
export const apicreateanentry=(newentry)=>axios.post(url,newentry)
export const apiupadteanentry=(id,updatedpost)=>axios.patch(`${url}/${id}`,updatedpost)
export const apideletepost=(id)=>axios.delete(`${url}/${id}`)
