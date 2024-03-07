export const fetchProducts = async (page: number) => {
    const response = await fetch(`https://reqres.in/api/products?page=${page}&per_page=${5}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};
