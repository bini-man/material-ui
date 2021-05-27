import {List, Drawer, ListItemText,ListItem, makeStyles, Typography, ListItemIcon, AppBar, Avatar } from "@material-ui/core";
import { AddCircleOutline, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'

const drawerwidth = 240

const useStyles=makeStyles((theme) => {
    return{
        page:{
            background:'#f9f9f9',
            width:'100%',
           padding: theme.spacing(3)
        },
        drawer:{
            width:drawerwidth
        },
        drawerpaper:{
            width:drawerwidth
        },
        root:{
            display: "flex"
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width:`calc(100% - ${drawerwidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft: theme.spacing(2)
        }
    }
    })
  

    
const Layout = ({children}) => {
   const classes = useStyles()
   const history= useHistory()
   const location= useLocation()
   const menuItem = [
       {
           text: 'My Notes',
           icon: <SubjectOutlined color="secondary"/>,
           path:'/'
       },
       {
        text: 'Create Notes',
        icon: <AddCircleOutline color="secondary"/>,
        path:'/style'
    },
   ]
   
    return ( 
        <div className={classes.root}>
             <AppBar  className={classes.appbar}>
            <Toolbar>
                <Typography className={classes.date}>
            Tody is {format(new Date(), 'do MMM Y ')}
                </Typography>
                <Typography >
                    Mario
                </Typography>
                <Avatar src="/bini.jpg" className={classes.avatar}/>
                    </Toolbar>
                
           
        </AppBar>
            <Drawer variant="permanent" classes={{ paper: classes.drawerpaper}}anchor="left" className={classes.drawer}>
                <div>
                    <Typography variant="h5" className={classes.title}>
                            Dashboard 
                    </Typography>
                </div>
                <List>
                    {menuItem.map(item => (
                       <ListItem button 
                       key={item.text} 
                       onClick={()=> history.push(item.path)}
                       className={location.pathname == item.path ? classes.active: null}
                        >
                         <ListItemIcon>
                             {item.icon}
                        </ListItemIcon>  
                        <ListItemText primary={item.text}/>
                            
                            
                       </ListItem> 
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
            
        </div>
     );
}
 
export default Layout;