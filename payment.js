const PUBLIC_KEY = 'FLWPUBK_TEST-7f842addad5b6a7a4ff46e3204a98724-X';

function makePayment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    if (!name || !email || !phone || !amount) {
        alert('Please fill in all fields');
        return;
    }

    // Validate Rwandan phone number format
    const phoneRegex = /^07[2389]\d{7}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid Rwandan phone number (e.g., 078XXXXXXX or 079XXXXXXX)');
        return;
    }

    const tx_ref = 'RW-' + Math.floor(Math.random() * 1000000000);

    FlutterwaveCheckout({
        public_key: PUBLIC_KEY,
        tx_ref: tx_ref,
        amount: amount,
        currency: "RWF",
        payment_options: "card, mobilemoney",
        customer: {
            email: email,
            phone_number: phone,
            name: name,
        },
        customizations: {
            title: "Rwanda Payment Platform",
            description: "Payment for services",
            logo: "https://cdn.pixabay.com/photo/2016/08/15/18/22/currency-1596062_1280.png",
        },
        callback: function(response) {
            if (response.status === "successful") {
                alert("Payment completed! Transaction reference: " + response.transaction_id);
                // Clear form
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('amount').value = '';
            } else {
                alert("Payment failed. Please try again.");
            }
        },
        onclose: function() {
            // Handle when payment modal is closed
        }
    });
}