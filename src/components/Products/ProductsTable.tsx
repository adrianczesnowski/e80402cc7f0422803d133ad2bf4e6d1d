import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Typography
} from '@mui/material';
import ProductModal from './ProductsModal/ProductModal';
import {useProductTable} from "./productTable.hooks";

const ProductsTable = () => {
    const {
        handleRowClick,
        handlePageChange,
        isLoading,
        data,
        selectedProduct,
        error,
        isFetching,
        setSelectedProduct,
        page,
        total_pages,
        searchValue,
        handleSearchById
    } = useProductTable()

    if (isLoading || isFetching) return <Typography>Loading...</Typography>;
    if (error instanceof Error) return <Typography>An error occurred: {error.message}</Typography>;
    if (page > total_pages) return <Typography>You went a little too far!</Typography>

    return (
        <div style={{maxWidth: '1000px', margin: '0 auto', marginTop: '2rem'}}>
            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]"
                placeholder="Search by ID"
                value={searchValue || ''}
                onChange={handleSearchById}
                style={{
                    marginBottom: '2rem',
                    fontSize: '1',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                }}
            />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row: any) => (
                            <TableRow key={row.id} style={{ backgroundColor: row.color }} onClick={() => handleRowClick(row)}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination count={total_pages} page={page} onChange={handlePageChange} />
            </TableContainer>
            {selectedProduct && (
                <ProductModal
                    open={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    product={selectedProduct}
                />
            )}
        </div>
    );
};

export default ProductsTable;
