import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const CustomCookieModal = ({ isOpen, onClose }) => (
    <Dialog
        open={isOpen}
        onClose={onClose}
    >
        <DialogTitle>NWT-LLC.COM using cookies!</DialogTitle>
        <DialogContent>
            <DialogContentText>We use cookies to improve your experience on our website.</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={onClose}
                color="primary"
            >
                Agree
            </Button>
        </DialogActions>
    </Dialog>
);

export default CustomCookieModal;
