import {Button, RadioGroup, Typography,FormControlLabel} from '@material-ui/core'
import {Container} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'
import  {TextField }from '@material-ui/core'
import {useState} from 'react'
import { Radio } from '@material-ui/core'
import {FormLabel} from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import axios from 'axios';
//import {useHistory} from 'react-dom'
 const useStyles = makeStyles({
        // btn: {
        //     fontSize: 60,
        //     backgroundColor: 'violet',
        //     '&:hover':{
        //         backgroundColor: 'blue'
        //     }
        // },
        // title:{
        //     textDecoration:'underline',
        //     marginBottom:8,
        //     fontSize:78
        // }
        field:{
            marginTop: 20,
            marginBottom: 20,
            display:'block'
        },
    })
const Style = () => {
   
    const classes = useStyles()
    //const history = useHistory()
    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const [titleerror,setTitleerror] = useState(false)
    const [detailserror,setDetailserror] = useState(false)
    const [category, setCategory] = useState('')
    const handelSubmit = (e) =>{
        e.preventDefault()
        setTitleerror(false)
        setDetailserror(false)
        if(title === ''){
            setTitleerror(true)
        }
        if(details === ''){
            setDetailserror(true)
        }

        if(title && details){

            const Data={
                title,
                details,
                category
            }
            axios.post('http://localhost:8000/notes/',Data).then(res=> console.log("fks"))
            console.log(title,details,category)
        }
    }
    return (  
        <Container className="bin">
<Typography className={classes.title}>Create a New Note</Typography>
            {/* <Button 
            onClick={() => console.log('you clicked me')}
            variant="contained"
            type="submit"
            className={classes.btn}
             color="primary">
                 Submit</Button> */}
<form noValidate autoComplete="off" onSubmit={handelSubmit}>
        <TextField
        onChange={(e)=> setTitle(e.target.value)}
            label="Title" variant="outlined" 
            fullWidth
            required
            error={titleerror}
            className={classes.field}
            color="secondary"
        />
        <TextField
         onChange={(e)=> setDetails(e.target.value)}
       
            label="Detaild" variant="outlined" 
            fullWidth
            multiline
            rows={4}
            required
            error={detailserror}
            className={classes.field}
            color="secondary"
        />
        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) =>setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="todos"/>   
            <FormControlLabel value="Reminders" control={<Radio />} label="reminders"/>   
            <FormControlLabel value="work" control={<Radio />} label="works"/>   
       
        </RadioGroup>
        </FormControl>
   <Button color="secondary" endIcon={<KeyboardArrowRightIcon/>} type="submit" variant="contained">submit</Button>
                    
</form>

                {/* <ButtonGroup  color="secondary" variant="contained">
                   <Button>two</Button>
                     <Button>three</Button>
                     <Button>four</Button>
                 </ButtonGroup>
                 <AcUnitIcon color="primary" fontSize="large"/>
                 <AcUnitIcon color="primary" fontSize="small"/> */}
        </Container>
    );
}
 
export default Style;