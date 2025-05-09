import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';
const supabaseUrl = 'https://ddqfglztxogflorqilvc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkcWZnbHp0eG9nZmxvcnFpbHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzAyOTQsImV4cCI6MjA2MDM0NjI5NH0.kuA3zWlghlW1Ij-wE6dZXyWdGVqE8iuidgp8vvD40wE'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);
document.addEventListener("DOMContentLoaded", function () {

    const playButton = document.querySelector('.play-button');
    const mainMenu = document.querySelector('.mainMenu');
    const playMenu = document.querySelector('.playMenu');

    const profileButton = document.querySelector('.profile-button');
    const profileMenu = document.querySelector('.profileMenu');

    const credsButton = document.querySelector('.credits-button');
    const credsMenu = document.querySelector('.credsMenu');

    const settingsButton = document.querySelector('.settings-button');
    const settingsMenu = document.querySelector('.settingsMenu');

    const storeButton = document.querySelector('.store-button');
    const storeMenu = document.querySelector('.storeMenu');

    const leaderboardMenu = document.querySelector('.leaderboardMenu');

    const backButtons = document.querySelectorAll('.back-button');
    
    playButton.addEventListener('click', function() {
        mainMenu.style.display = 'none';
        playMenu.style.display = 'block';
        leaderboardMenu.style.display = 'none';
    });

    profileButton.addEventListener('click', function() {
        mainMenu.style.display = 'none';
        profileMenu.style.display = 'block';
        leaderboardMenu.style.display = 'none';
    });

    storeButton.addEventListener('click', function() {
        mainMenu.style.display = 'none';
        storeMenu.style.display = 'block';
        leaderboardMenu.style.display = 'none';
    });

    credsButton.addEventListener('click', function() {
        mainMenu.style.display = 'none';
        credsMenu.style.display = 'block';
        leaderboardMenu.style.display = 'none';
    });

    settingsButton.addEventListener('click', function() {
        mainMenu.style.display = 'none';
        settingsMenu.style.display = 'block';
        leaderboardMenu.style.display = 'none';
    });


    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            mainMenu.style.display = 'block'; 
            playMenu.style.display = 'none';
            profileMenu.style.display = 'none';
            storeMenu.style.display = 'none';
            credsMenu.style.display = 'none'; 
            settingsMenu.style.display = 'none';
            leaderboardMenu.style.display = 'block';
        });
    });

});

  function logout() {
    window.location.href = 'index.html'; // Replace with your actual login URL
  }

let selectedCar = localStorage.getItem('selectedCar') || "default car.png"; // Check storage first

// Function to update button states
function updateCarButtons() {
    document.querySelectorAll(".select-car").forEach(button => {
        const carFile = button.getAttribute("data-car");
        if (carFile === selectedCar) {
            button.textContent = "Equipped";
            button.classList.add("equipped");
            button.disabled = true; // Disable the button for the equipped car
        } else {
            button.textContent = "Select";
            button.classList.remove("equipped");
            button.disabled = false; // Enable the button for other cars
        }
    });
}

// Event listener for car selection
document.querySelectorAll(".select-car").forEach(button => {
    button.addEventListener("click", () => {
        const carFile = button.getAttribute("data-car");
        localStorage.setItem('selectedCar', carFile);
        selectedCar = carFile; // Update the selected car variable

        // Update button states
        updateCarButtons();

        // Immediate visual feedback
        const previewImg = document.getElementById('car-preview');
        if (previewImg) {
            previewImg.src = `${carFile}`;
        }

        alert(`${carFile.split('.')[0]} selected!`);
    });
});

function applySelectedCar() {
    const carImage = document.getElementById("moving-image");
    if (carImage) {
        carImage.src = `${selectedCar}`; // Set the car image to the selected car
        console.log(`Car applied: ${selectedCar}`);
    }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    applySelectedCar();
    updateCarButtons(); // Ensure buttons are updated on page load
});


// Function to fetch leaderboard data from Supabase
async function fetchLeaderboardData() {
    try {
        const { data, error } = await supabase
            .from('users') // Ensure this matches your table name
            .select('username, kilometer_traveled') // Fetch username and kilometers traveled
            .order('kilometer_traveled', { ascending: false }); // Order by kilometers in descending order

        if (error) {
            console.error('Error fetching leaderboard data:', error);
            return [];
        }

        return data;
    } catch (err) {
        console.error('Unexpected error:', err);
        return [];
    }
}

// Function to populate leaderboard
async function populateLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ""; // Clear existing rows

    const leaderboardData = await fetchLeaderboardData();

    leaderboardData.forEach((player, index) => {
        const rank = index + 1; // Calculate rank based on position in the sorted array
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rank}</td>
            <td>${player.username}</td>
            <td>${player.kilometer_traveled || 0}</td> <!-- Default to 0 if null -->
        `;
        leaderboardBody.appendChild(row);
    });
}

// Initialize leaderboard on page load
document.addEventListener('DOMContentLoaded', () => {
    populateLeaderboard();
});

// Call this function when the leaderboard menu is shown

// Initialize currency
/*let currency = parseInt(localStorage.getItem('currency')) || 0;
updateCurrencyDisplay(); 

// Car unlock status
const unlockedCars = JSON.parse(localStorage.getItem('unlockedCars')) || ['car.png'];

// Update all car buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePurchaseButtons();
});

function updatePurchaseButtons() {
    document.querySelectorAll('.buy-car').forEach(button => {
        const car = button.getAttribute('data-car');
        const price = parseInt(button.getAttribute('data-price'));
        
        if (unlockedCars.includes(car)) {
            button.textContent = 'Select';
            button.disabled = false;
            button.nextElementSibling.style.display = 'none';
        } else {
            button.textContent = `Purchase (${price})`;
            button.disabled = currency < price;
            button.nextElementSibling.style.display = currency < price ? 'block' : 'none';
        }
    });
}

// Purchase/Select handler
document.querySelectorAll('.buy-car').forEach(button => {
    button.addEventListener('click', () => {
        const car = button.getAttribute('data-car');
        const price = parseInt(button.getAttribute('data-price'));
        
        if (unlockedCars.includes(car)) {
            // Select already purchased car
            localStorage.setItem('selectedCar', car);
            alert(`${car.split('.')[0]} selected!`);
        } else if (currency >= price) {
            // Purchase new car
            currency -= price;
            unlockedCars.push(car);
            
            localStorage.setItem('currency', currency);
            localStorage.setItem('unlockedCars', JSON.stringify(unlockedCars));
            localStorage.setItem('selectedCar', car);
            
            updateCurrencyDisplay();
            updatePurchaseButtons();
            alert(`Purchased ${car.split('.')[0]} for ${price} coins!`);
        }
    });
});

function updateCurrencyDisplay() {
    const currencyDisplay = document.getElementById('currency-display');
    if (currencyDisplay) {
        currencyDisplay.textContent = currency;
    }
} */