import { Container, CssBaseline, Grid, makeStyles } from "@material-ui/core";

import { Add, AppBar, LeftSide, Posts, RightSide } from "./components";

const useStyles = makeStyles((theme) => ({
  rightSide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }

}))

function App() {
  const classes = useStyles()
  return (
    <div >
      <CssBaseline />
      <AppBar />
      <>
        <Grid container>
          <Grid item xs={2} >
            <LeftSide />
          </Grid>
          <Grid item md={7} xs={10}>
            <Posts />
          </Grid>
          <Grid item md={3} className={classes.rightSide}>
            <RightSide />
          </Grid>

        </Grid>
        <Add />
      </>


    </div>
  );
}

export default App;
