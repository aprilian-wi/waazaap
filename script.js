document.addEventListener('DOMContentLoaded', function() {
    // Pricing Toggle
    const monthlyButton = document.querySelector('button[data-period="monthly"]');
    const yearlyButton = document.querySelector('button[data-period="yearly"]');
    const prices = document.querySelectorAll('[data-price]');

    if (monthlyButton && yearlyButton) {
        // Set initial state
        monthlyButton.classList.add('bg-white', 'shadow-sm');
        yearlyButton.classList.add('text-gray-600');

        monthlyButton.addEventListener('click', () => {
            monthlyButton.classList.add('bg-white', 'shadow-sm');
            monthlyButton.classList.remove('text-gray-600');
            yearlyButton.classList.remove('bg-white', 'shadow-sm');
            yearlyButton.classList.add('text-gray-600');
            
            // Reset to monthly prices
            prices.forEach(price => {
                const monthlyPrice = parseInt(price.getAttribute('data-price'));
                price.textContent = `Rp${monthlyPrice.toLocaleString('id-ID')}`;
            });
        });

        yearlyButton.addEventListener('click', () => {
            yearlyButton.classList.add('bg-white', 'shadow-sm');
            yearlyButton.classList.remove('text-gray-600');
            monthlyButton.classList.remove('bg-white', 'shadow-sm');
            monthlyButton.classList.add('text-gray-600');
            
            // Apply 20% discount for yearly and multiply by 12 months
            prices.forEach(price => {
                const monthlyPrice = parseInt(price.getAttribute('data-price'));
                const yearlyPrice = Math.round(monthlyPrice * 0.8 * 12);
                price.textContent = `Rp${yearlyPrice.toLocaleString('id-ID')}`;
            });
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            const isActive = question.classList.contains('active');
            
            // Close all other answers
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = '0';
                    q.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current answer
            question.classList.toggle('active');
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            } else {
                answer.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Initialize FAQ answers to be hidden
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.maxHeight = '0';
    });
});
