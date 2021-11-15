import { Dialog, Grid, IconButton } from '@material-ui/core';
import React from 'react';
import SightInfoCard from './SightInfoCard';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from '../../assets/close_icon.svg';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: 'relative',
    },
    closeIcon: {
      zIndex: 2000,
      position: 'relative',
      bottom: 186,
    },
  })
);

const SightInfoDialog = ({ open, onClose, ...props }) => {
  // const classes = useStyles();
  return (
    <Grid>
      {/* {open && (
        <IconButton aria-label="close" onClick={onClose} className={classes.closeIcon}>
          <CloseIcon />
        </IconButton>
      )} */}
      <Dialog open={open} onClose={onClose}>
        <SightInfoCard {...props} />
      </Dialog>
    </Grid>
  );
};

SightInfoDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SightInfoDialog;
