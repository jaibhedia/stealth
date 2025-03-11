document.addEventListener('DOMContentLoaded', function() {
    let testimonials = document.querySelectorAll('.testimonial');
    let current = 0;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
          testimonial.classList.add('active');
        }
      });
    }
    
    document.getElementById('prev').addEventListener('click', function() {
      current = (current === 0) ? testimonials.length - 1 : current - 1;
      showTestimonial(current);
    });
    
    document.getElementById('next').addEventListener('click', function() {
      current = (current === testimonials.length - 1) ? 0 : current + 1;
      showTestimonial(current);
    });
    
    // Auto slide every 5 seconds
    setInterval(() => {
      current = (current === testimonials.length - 1) ? 0 : current + 1;
      showTestimonial(current);
    }, 5000);
  });
  