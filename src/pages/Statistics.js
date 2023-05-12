import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
});

function Statistics(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Statistics
      </Typography>
      {/* other content */}
    </div>
  );
}

export default withStyles(styles)(Statistics);