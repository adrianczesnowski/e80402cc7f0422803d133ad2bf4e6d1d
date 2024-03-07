import React from 'react';
import { Dialog, DialogTitle, DialogContent, } from '@mui/material';

interface ProductModalProps {
    open: boolean;
    onClose: () => void;
    product: any;
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
    const {id, name, year, pantone_value, color} = product;
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Product Details</DialogTitle>
            <DialogContent>
                <div>
                    <p>Id: {id}</p>
                    <p>Name: {name}</p>
                    <p>Year: {year}</p>
                    <p>Pantone Value: {pantone_value}</p>
                    <p>Color: {color}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;
