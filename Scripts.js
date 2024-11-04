// Smooth scrolling to sections
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Play video on portfolio click
function playVideo(videoSrc) {
  const videoOverlay = document.createElement('div');
  videoOverlay.classList.add('video-overlay');
  videoOverlay.innerHTML = `
    <video controls autoplay>
      <source src="${videoSrc}" type="video/mp4">
    </video>
    <button onclick="closeVideo()">Close</button>
  `;
  document.body.appendChild(videoOverlay);
}

function closeVideo() {
  const videoOverlay = document.querySelector('.video-overlay');
  if (videoOverlay) {
    videoOverlay.remove();
  }
}

// Testimonial Slider Auto Scroll
let testimonialIndex = 0;
setInterval(() => {
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach((testimonial, index) => {
    testimonial.style.transform = `translateX(${100 * (index - testimonialIndex)}%)`;
  });
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}, 3000);
