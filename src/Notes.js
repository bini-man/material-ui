import { Grid,Container } from "@material-ui/core";
import axios from "axios";
import { useEffect,useState } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "./NoteCard"
const Notes = () => {
    
    const [notes,setNotes]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/notes')
            .then(res=> res.data)
            .then(data => setNotes(data))
    },[])
    const handleDelete = async(id) =>{
        axios.delete('http://localhost:8000/notes/' + id)
        .then(res =>{
            const newNotes = notes.filter(note => note.id != id)
                setNotes(newNotes)
        }
            
        )
        // await fetch('http://localhost:8000/notes/' + id, {
        //     method: 'DELETE'
        // })
        // 
    }
    const breakpoints={
        default: 3,
        1100: 2,
        700: 1
    }
    return ( 
        <Container>

            {/* <Grid container>
                <Grid item xs={12} sm={6}  md={3}>
                   <Paper>1</Paper > 
                </Grid >
                 <Grid item xs={12} sm={6}  md={3}>
                   <Paper>2</Paper > 
                </Grid>
                 <Grid item xs={12} sm={6}  md={3}>
                   <Paper>3</Paper > 
                </Grid>
                 <Grid item xs={12} sm={6}  md={3}>
                   <Paper>4</Paper > 
                </Grid>
            </Grid> */}
            <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
           
{
               notes.map(note =>(
                <div  key={note.id} item xs={12} sm={6}  md={3}> <NoteCard note={note} handleDelete={handleDelete}/> </div>
                   ))
           }
           </Masonry>
        </Container>
     );
}
 
export default Notes;