import {useHistory, useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchProducts} from "../../api/fetchProducts";

export const useProductTable = () => {
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [page, setPage] = useState(parseInt(queryParams.get('page') || '1', 10));
    const [searchValue, setSearchValue] = useState<string | null>('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['productsData', page],
        queryFn: () => fetchProducts(page),
    });

    useEffect(() => {
        const page = parseInt(queryParams.get('page') || '1', 10);
        setPage(page);
    }, []);


    const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        queryParams.set('page', value.toString());
        history.push(`?${queryParams.toString()}`);
        setSearchValue('');
        setPage(value);
    }, [history, queryParams])

    const handleSearchById = (event: any) => {
        const value = event.target.value;
        setSearchValue(value)
    }

    const handleRowClick = (product: any) => {
        setSelectedProduct(product);
    };

    const filteredData = searchValue && data.data.filter((product: any) => product.id === parseInt(searchValue));

    return {
        handleRowClick,
        handlePageChange,
        isLoading,
        data: searchValue ? filteredData : data?.data,
        total_pages: data?.total_pages,
        selectedProduct,
        error,
        isFetching,
        setSelectedProduct,
        page,
        searchValue,
        setSearchValue,
        handleSearchById,
    }
}