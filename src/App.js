//import Style from "./Style";
import { createMuiTheme, ThemeProvider} from '@material-ui/core'
import { purple } from "@material-ui/core/colors";
import Notes from "./Notes";
import Style from './Style';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const theme = createMuiTheme({
  palette:{
    
    primary:{
      main:'#fefefe'
    },
    secondary:purple
  }
})

function App() {
   return (
     <ThemeProvider theme={theme}>
       <Router>
         <Layout>
         <Switch>
           <Route exact path="/">
              <Notes/>
           </Route>
           <Route exact path="/Style">
              <Style/>
           </Route>
           

         </Switch>
         </Layout >
       </Router>
   {/* <Style/> */}
   {/* <Notes/> */}
    </ThemeProvider>
  );
}

export default App;
