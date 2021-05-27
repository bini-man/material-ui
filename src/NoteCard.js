
import {Card,CardHeader,Avatar,CardContent, IconButton, Typography, makeStyles} from '@material-ui/core';
import { green, yellow, pink, blue } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
const useStyles = makeStyles({
    test:{
        border: (note)=>{
            if(note.category == 'work'){
                return '1px solid red'
            }
        }
    },
    avatar:{
        backgroundColor:(note)=>{
            if(note.category == 'work'){
                return yellow[700]
            }
            if(note.category == 'money'){
                return green[400]
            }
            if(note.category == 'reminder'){
                return pink[200]
            }
           return blue[200]
        }
    }
})
const NoteCard = ({note,handleDelete}) => {
    const classes = useStyles(note)
    return ( 
        <div>
           <Card elevation={3} className={classes.test}>
                <CardHeader avatar={
                    <Avatar className={classes.avatar}>
                        {note.title[0].toUpperCase()}
                    </Avatar>
                }
                    action={
                        <IconButton onClick={()=>handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    } 
                    title={note.title}
                subheader={note.category}
               />
               <CardContent>
                   <Typography variant="body" color="textSecondary">
                       {note.details}
                   </Typography>
               </CardContent>
           </Card>
        </div>
     );
}
 
export default NoteCard;