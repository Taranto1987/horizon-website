import './style.css';

// Performance optimization: Use intersection observer for animations
let observer;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initCounters();
  initSmoothScrolling();
  initContactForm();
});

// Navigation functionality
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('nav-menu-open');
      document.body.classList.toggle('nav-open');
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-menu-open');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // Active navigation highlighting
  window.addEventListener('scroll', updateActiveNavigation);
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('nav-link-active');
    } else {
      navLink?.classList.remove('nav-link-active');
    }
  });
}

// Initialize animations with Intersection Observer
function initAnimations() {
  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Trigger counter animation for stats
          if (entry.target.classList.contains('stats')) {
            animateCounters();
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos], .feature-card, .service-card, .stats');
    animatedElements.forEach(el => observer.observe(el));
  }
}

// Initialize counter animations
function initCounters() {
  const stats = document.querySelector('.stats');
  if (stats) {
    observer?.observe(stats);
  }
}

// Animate counter numbers
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Contact form functionality
function initContactForm() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
      
      // Basic validation
      if (!data.name || !data.email || !data.message) {
        showNotification('Por favor, preencha todos os campos.', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showNotification('Por favor, insira um e-mail válido.', 'error');
        return;
      }
      
      // Simulate form submission
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    });
  }
}

// Show notification
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'polite');
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  requestAnimationFrame(() => {
    notification.classList.add('notification-show');
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove('notification-show');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll handler
window.addEventListener('scroll', debounce(updateActiveNavigation, 10));

// Lazy loading images (if any are added later)
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window && images.length > 0) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading
initLazyLoading();

// Export functions for potential external use
export {
  initNavigation,
  initAnimations,
  initCounters,
  initSmoothScrolling,
  initContactForm,
  showNotification
};