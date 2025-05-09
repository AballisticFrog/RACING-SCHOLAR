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

// Handle registration
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if the username already exists
    const { data: existingUser, error: checkError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single();

    if (checkError && checkError.code !== 'PGRST116') {
        alert('Error checking username: ' + checkError.message);
        return;
    }

    if (existingUser) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Insert the new user
    const { data, error } = await supabase
        .from('users')
        .insert([{ username, password }]);

    if (error) {
        alert('Error registering user: ' + error.message);
    } else {
        alert('Registration successful!');
        toggleForms();
    }
});

// Handle login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

    if (error || !data) {
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