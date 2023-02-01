export const ProductList = async () => {
    const response = await fetch(
        'http://localhost:4444/product/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const UserList = await response.json()
    return UserList
}