const axios = require('axios');

// WooCommerce REST API credentials
const consumerKey = 'ck_14fb8ca86e7114ead9684703d1f5c17d38586096';
const consumerSecret = 'cs_47509afa569e71e4037fd1b0fd9f82ce13f82e56';

// WooCommerce API base URL
const baseURL = 'https://fabricadeasternuturi.ro/wp-json/wc/v3/orders';

// Function to fetch all products from orders
async function getAllProductsFromOrders() {
    try {
        const response = await axios.get(`${baseURL}orders`, {
            auth: {
                username: consumerKey,
                password: consumerSecret,
            },
        });

        const orders = response.data;

        const products = orders.map(order => {
            return order.line_items.map(item => {
                return {
                    product_id: item.product_id,
                    product_name: item.name,
                };
            });
        }).flat();

        console.log(products);
    } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error fetching data:', error.response.status, error.response.data);
    }

    
}

// Call the function to get products from orders
getAllProductsFromOrders();