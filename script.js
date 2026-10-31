const gymWhatsAppNumber = "923072589257"; 

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const gymForm = document.getElementById('gymForm');
    if (gymForm) {
        gymForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            const branch = document.getElementById('userBranch').value;
            const plan = document.getElementById('userPlan').value;

            const message = `*New Gym Admission Request*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*Phone:* ${phone}%0A` +
                            `*Selected Branch:* ${branch}%0A` +
                            `*Selected Plan:* ${plan}%0A%0A` +
                            `Please confirm my admission.`;

            window.open(`https://wa.me/${gymWhatsAppNumber}?text=${message}`, '_blank');
        });
    }
});

// Supplement Purchase Handler
function orderProduct(productName) {
    const message = `Hello, I want to inquire/buy *${productName}* from Umair Fitness Gym.`;
    window.open(`https://wa.me/${gymWhatsAppNumber}?text=${encodeURIComponent(message)}`, '_blank');
}