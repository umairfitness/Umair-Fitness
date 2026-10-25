// WhatsApp Number Configuration (+92 307 2589257)
const gymWhatsAppNumber = "923072589257"; 

// Gym Admission Form Event Listener
document.addEventListener('DOMContentLoaded', function() {
    const gymForm = document.getElementById('gymForm');
    
    if(gymForm) {
        gymForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            const branch = document.getElementById('userBranch').value;
            const plan = document.getElementById('userPlan').value;

            // Formatted WhatsApp Message
            const message = `*New Gym Admission Request*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*Phone:* ${phone}%0A` +
                            `*Branch:* ${branch}%0A` +
                            `*Selected Plan:* ${plan}%0A%0A` +
                            `Please confirm my admission.`;

            const whatsappUrl = `https://wa.me/${gymWhatsAppNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});

// Function to handle supplement orders
function orderProduct(productName) {
    const message = `Hello, I want to inquire/buy *${productName}* from Umair Fitness Gym.`;
    const whatsappUrl = `https://wa.me/${gymWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}