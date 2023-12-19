window.addEventListener("DOMContentLoaded", (event) => {
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
        
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const user = {
                email,
                password
            }
            const rawResponse = await fetch('http://localhost:3333/auth', { method: 'POST', body: JSON.stringify(user), headers: { "Content-type": "application/json" } })
            const response = await rawResponse.json()
            setCookie("userInfo", JSON.stringify(response))
        });
    }
})