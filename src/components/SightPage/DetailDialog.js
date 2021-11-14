import { Dialog, DialogTitle, IconButton, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';

const DetailDialog = ({ onClose, open }) => {
  return (
    <Dialog onClose={onClose} open={open} fullWidth>
      <Toolbar>
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">Sound</Typography>
      </Toolbar>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    </Dialog>
  );
};

DetailDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  Name: PropTypes.string,
  Description: PropTypes.string,
  ID: PropTypes.string,
};

export default DetailDialog;
