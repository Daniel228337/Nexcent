const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('.manage-community-cards_item').forEach((item) => {
    observer.observe(item);
  });