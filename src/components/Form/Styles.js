import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme)=>({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
grid:{
  display:"flex",
  flexDirection:"column",
  flexWrap:"wrap",
  justifyContent:"center"
},
buttonsubmit:{
  marginBottom:10
},
paper:{
   padding: theme.spacing(2)
}

}));