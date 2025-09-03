// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.setAttribute('aria-expanded', String(!expanded));
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const enquiry = {
      id: Date.now().toString(),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      date: new Date().toISOString(),
      status: 'new'
    };
    
    // Save enquiry to localStorage
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push(enquiry);
    localStorage.setItem('enquiries', JSON.stringify(enquiries));
    
    // Send email notification
    sendEmailNotification(enquiry);
    
    // Send WhatsApp notification
    sendWhatsAppNotification(enquiry);
    
    // Show success message
    alert('Thank you for your enquiry! We will get back to you soon. / आपकी पूछताछ के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।');
    
    // Reset form
    this.reset();
  });
}

// Email notification function
function sendEmailNotification(enquiry) {
  const subject = `New Enquiry: ${enquiry.service}`;
  const body = `
New enquiry received:

Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Service: ${enquiry.service}
Message: ${enquiry.message}
Date: ${new Date(enquiry.date).toLocaleString()}
  `;
  
  // Open email client
  const emailLink = `mailto:thakurrishabhsingh2260@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(emailLink);
}

// WhatsApp notification function
function sendWhatsAppNotification(enquiry) {
  const message = `New enquiry received:
  
Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Service: ${enquiry.service}
Message: ${enquiry.message}
Date: ${new Date(enquiry.date).toLocaleString()}`;
  
  const whatsappLink = `https://wa.me/919450521208?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, '_blank');
}

// Hint the WhatsApp tooltip on first load
window.addEventListener('load', () => {
  const tip = document.querySelector('.whatsapp-float .wa-tip');
  if (!tip) return;
  tip.style.transition = 'none';
  tip.style.opacity = '1';
  tip.style.transform = 'translateY(0)';
  setTimeout(() => {
    tip.style.transition = '';
    tip.style.opacity = '';
    tip.style.transform = '';
  }, 1600);
});


