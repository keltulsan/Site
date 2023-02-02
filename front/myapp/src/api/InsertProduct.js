export const InsertProduct = async (user) => {
    const response = await fetch(
        'http://localhost:4444/product/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }
    )
    const ProductList = await response.json()

    return ProductList
}