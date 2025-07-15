document.addEventListener('DOMContentLoaded', () => {
    // ======================================
    // ANIMACIÓN DE CORAZONES (Fondo romántico)
    // ======================================
    const container = document.querySelector('.heart-animation');
    
    function createHearts() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.opacity = Math.random() * 0.6 + 0.2;
        heart.style.transform = `rotate(45deg) scale(${Math.random() * 0.5 + 0.5})`;
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }
    
    setInterval(createHearts, 500);

    // ======================================
    // VALIDACIÓN DE LOGIN
    // ======================================
    const loginForm = document.getElementById('loginForm');
    
    // Credenciales válidas (Cámbialas según necesites)
    const USER_CORRECTO = "XiomarA";
    const PASS_CORRECTO = "L0M0_S4LT4D0";

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const inputs = document.querySelectorAll('.input-group input');

        // Limpia errores previos
        inputs.forEach(input => input.classList.remove('error'));
        
        // Valida credenciales
        if (email === USER_CORRECTO && password === PASS_CORRECTO) {
            alert("¡Bienvenida Xiomara! 💙");
            // Redirige a otra página (opcional):
            // window.location.href = "bienvenida.html";
              window.location.href = "Principal.html"; // Redirigir aquí
        } else {
            alert("❌ Usuario o contraseña incorrectos");
            inputs.forEach(input => input.classList.add('error'));
        }
    });

    // ======================================
    // MOSTRAR/OCULTAR CONTRASEÑA
    // ======================================
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const icon = togglePassword;
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.textContent = '👁️';
            } else {
                passwordInput.type = 'password';
                icon.textContent = '🕶️';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // ... código existente ...
    
    // ======================================
    // CERRAR SESIÓN
    // ======================================
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Mostrar feedback visual
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saliendo...';
            this.disabled = true;
            
            // Simular proceso de cierre
            setTimeout(() => {
                // Redirigir a página de login
                window.location.href = 'index.html';
            }, 1000);
        });
    }
});
