<script>
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    const usernameInput = document.querySelector("input[placeholder='Username']");
    const passwordInput = document.querySelector("input[placeholder='Password']");

    loginBtn.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Simulate login success
        alert(`Welcome, ${username}!`);

        // Optional: Redirect to another page
        // window.location.href = "home.html";
    });
});
</script>
