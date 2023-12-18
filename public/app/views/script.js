function render(){
    const profile = document.getElementById('profilePic')
    const logon = document.getElementById('logon')
    const username = document.getElementById('username')
    setCookie('name','a')
    console.log(getCookie('name'))
    if(getCookie('name')){
        profile.style.display = "block"
        logon.style.display='none'
        username.textContent=getCookie('name')
    }else{
        logon.style.display='block'
        profile.style.display = 'none'
        username.textContent=''
    }
}

//form.addEventListener('submit', (e)=>{
//  e.preventDefault()
//const form = document.getElementById('form');
//})

function setCookie(name,value, daysToExpire){
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire *24 *60 *60 *1000))
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null)
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

function logout(){
    deleteCookie('name')
}

async function productsRender(){
    const father = document.getElementById('menu')
    const products = await fetch("http://localhost:3333/products")
    const productsResult = await products.json()
    for(var i = 0;i<productsResult.length ; i++){
        const product_div = document.createElement('div');
        product_div.className = "options"
        father.appendChild(product_div)

        const product_image = document.createElement('img')
        product_image.src = productsResult[i].product_image
        product_div.appendChild(product_image)

        const product_name = document.createElement('h2');
        product_div.appendChild(product_name)
        
        const product_name_content = document.createTextNode(productsResult[i].product_name);
        product_name.appendChild(product_name_content)

        const product_text_div = document.createElement('div');
        product_text_div.className = "text"
        product_div.appendChild(product_text_div)
        
        
        const product_description = document.createElement('p')
        const product_description_content = document.createTextNode("Ingredientes: "+productsResult[i].product_description)
        product_description.appendChild(product_description_content)
        product_text_div.appendChild(product_description)

        const product_price = document.createElement('p')
        const product_price_content = document.createTextNode("Preço: R$"+productsResult[i].product_price)
        product_price.className = 'preco'
        product_price.appendChild(product_price_content)
        product_text_div.appendChild(product_price)
    }
    render()
}
