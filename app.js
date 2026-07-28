/* ==========================================================================
   GLIDE - Frontend Interactive Scripts
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Ride Option Selection (ride.html) ---
    window.selectRide = function(element) {
        // Remove active class from all option elements
        const options = document.querySelectorAll('.ride-option');
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Add active class to clicked option
        element.classList.add('selected');
    };

    // --- 2. Handle Ride Booking Form Submission ---
    const rideForm = document.getElementById('rideForm');
    if (rideForm) {
        rideForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pickup = document.getElementById('pickupInput').value;
            const dropoff = document.getElementById('dropoffInput').value;
            
            if (!pickup || !dropoff) {
                alert('Please enter both pickup and destination points.');
                return;
            }

            alert(`Searching for nearby Glide drivers...\n\nFrom: ${pickup}\nTo: ${dropoff}`);
        });
    }

    // --- 3. Handle Driver Registration Form Submission ---
    const driverForm = document.getElementById('driverRegisterForm');
    if (driverForm) {
        driverForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('fullname').value;
            const city = document.getElementById('operatingCity').value;

            alert(`Mahadsanid (Thank you), ${name}! Your application to drive in ${city.toUpperCase()} has been submitted. Our team will contact you shortly.`);
            driverForm.reset();
        });
    }
});