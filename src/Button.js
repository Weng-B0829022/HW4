import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} className={classes.paper}>
      <Button variant="contained" color="secondary" >
        登入
      </Button>
    </div>
  );
}