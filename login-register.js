import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';
const supabaseUrl = 'https://ddqfglztxogflorqilvc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkcWZnbHp0eG9nZmxvcnFpbHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzAyOTQsImV4cCI6MjA2MDM0NjI5NH0.kuA3zWlghlW1Ij-wE6dZXyWdGVqE8iuidgp8vvD40wE'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

// Toggle between login and register forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

window.toggleForms = toggleForms;

// Helper to convert username to a pseudo-email
function usernameToEmail(username) {
    return `${username}@yourapp.com`;
}

// Registration
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const email = usernameToEmail(username);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    // Get user id from either data.user or data.session.user
    const userId = data?.user?.id || data?.session?.user?.id;

   if (error) {
    alert('Error registering user: ' + error.message);
} else if (userId) {
    // Insert user into your users table and check for errors
    const { error: upsertError } = await supabase.from('users').upsert([
        {
            user_id: userId,
            username: username,
            password: password,
            email: email
        }
    ]);
    if (upsertError) {
        alert('User registered, but failed to save profile: ' + upsertError.message);
        console.error('Upsert error:', upsertError);
    } else {
        alert('Registration successful! You can now log in.');
        toggleForms();
    }
} else {
    alert('Registration successful, but could not save profile. Please try logging in.');
    toggleForms();
}
});

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const email = usernameToEmail(username);

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error || !data.session) {
        alert('Invalid username or password!');
    } else {
        alert('Login successful!');
        window.location.href = 'santos.html';
    }
});

function isMobileOrTablet() {
    return /Mobi|Android|iPad|iPhone|Tablet/i.test(navigator.userAgent);
}

// Restrict access for mobile or tablet devices
if (isMobileOrTablet()) {
    document.body.innerHTML = `
    <body background="black"; color:white;>
        <div style="text-align: center; margin-top: 20%; font-family: Arial, sans-serif;">
            <h1>Access Restricted</h1>
            <p>This website is only available for computers or laptops.</p>
            <p>Please access this website from a desktop or laptop device.</p>
        </div>
    </body>`;
}