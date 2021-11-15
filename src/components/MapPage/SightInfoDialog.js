import { Dialog, IconButton } from '@material-ui/core';
import React from 'react';
import SightInfoCard from './SightInfoCard';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from '../../assets/close_icon.svg';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    dialog: {
      '& .MuiDialog-paperWidthSm': {
        overflow: 'visible',
      },
    },
    closeIcon: {
      position: 'absolute',
      justifyContent: 'flex-end',
      padding: 0,
      top: -16,
      right: -16,
    },
  })
);

const SightInfoDialog = ({ open, onClose, ...props }) => {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose} className={classes.dialog}>
      <IconButton aria-label="close" onClick={onClose} className={classes.closeIcon}>
        <CloseIcon />
      </IconButton>
      <SightInfoCard {...props} />
    </Dialog>
  );
};

SightInfoDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SightInfoDialog;
