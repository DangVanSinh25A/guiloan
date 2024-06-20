

async function Product() {
    const apiUrl = 'https://651fec07906e276284c3bada.mockapi.io/product';

        // Fetch data from external API
     const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${apiUrl}`);
        }

        // Parse JSON
        const products = await res.json();
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title}- ${product.subtitle}
                    </li>
                ))}
            </ul>
        </div>
    );
}

    // Endpoint URL

        // Pass data to the page via props
export default Product;
