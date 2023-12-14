
async function productsRender(){
    const father = document.getElementById('menu')
    const products = await fetch("http://localhost:3333/products")
    const productsResult = await products.json()
    console.log(productsResult)
    for(var i = 0;i<productsResult.length ; i++){
        const product_div = document.createElement('div');
        father.appendChild(product_div)

        const product_name = document.createElement('h1');
        product_div.appendChild(product_name)

        const product_name_content = document.createTextNode(productsResult[i].product_name);
        product_name.appendChild(product_name_content)
        
        const product_image = document.createElement('img')
        product_image.src = productsResult[i].product_image
        product_div.appendChild(product_image)
        
        const product_description = document.createElement('p')
        const product_description_content = document.createTextNode(productsResult[i].product_description)
        product_description.appendChild(product_description_content)
        product_div.appendChild(product_description)

        const product_owner = document.createElement('p')
        const product_owner_content = document.createTextNode(productsResult[i].product_owner)
        product_owner.appendChild(product_owner_content)
        product_div.appendChild(product_owner)

        const product_price = document.createElement('p')
        const product_price_content = document.createTextNode(productsResult[i].product_price)
        product_price.appendChild(product_price_content)
        product_div.appendChild(product_price)



        console.log(productsResult[i])
    }
}
