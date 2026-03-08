// Projects Data with Enhanced Details
const projects = [
    {
        id: 1,
        title: 'Medark',
        subtitle: 'Book Discovery App',
        year: '2024 – 2025',
        description: 'Developed a personalized book discovery Android app with smart recommendations, summaries, author bios, user reviews, reading lists, and a nearby library map.',
        fullDescription: 'Medark is a comprehensive Android application designed to revolutionize how users discover and engage with books. The app combines modern design principles with powerful functionality to create an engaging reading experience.',
        image: "b2.png",
       additionalImages: [
"b1.png",
"b2.png",
"b3.png",
"b4.png",
"b5.png",
"b6.png",
"b7.png",
"b8.png"
],
        tech: ['Android', 'Java', 'Maps API', 'Recommendation Engine', 'SQLite'],
        features: [
            'Smart book recommendations based on user preferences and reading history',
            'Comprehensive book summaries and author biographies',
            'User review system with ratings and comments',
            'Interactive map showing nearby libraries and bookstores',
            'Advanced search and filtering capabilities',
            'Modern material design UI with smooth animations'
        ],
        gradientClass: 'gradient-emerald-teal',
        modalGradient: 'linear-gradient(to top, #10b981, #14b8a6)'
    },
    {
        id: 2,
        title: 'AI Studio',
        subtitle: 'AI Content Generator (Flutter + Gemini API)',
        year: '2026',
        description: 'Developed a Flutter app integrating Gemini API for real-time AI content generation with async handling and modern UI/UX design.',
        fullDescription: 'AI Studio is a cutting-edge Flutter application that leverages Google\'s Gemini API to provide real-time AI-powered content generation. The app showcases advanced asynchronous programming and modern mobile development practices.',
        image: "a1.png",
      additionalImages: [
"a1.png",
"a2.png",
"a3.png"
],
        tech: ['Flutter', 'Dart', 'Gemini API', 'Async/Await', 'State Management'],
        features: [
            'Real-time AI content generation using Gemini API',
            'Asynchronous API handling for smooth user experience',
            'Modern and intuitive user interface design',
            'Copy and share functionality',
            'Responsive design across different screen sizes',
            'Error handling and loading states'
        ],
        github: 'https://github.com/danahaltwijri/Ai-Studio-app-Flutter.git',
        gradientClass: 'gradient-purple-pink',
        modalGradient: 'linear-gradient(to top, #a855f7, #ec4899)'
    },
    {
        id: 3,
        title: 'Debugging Assistant App',
        subtitle: 'Flutter Developer Tool',
        year: '2026',
        description: 'Built a productivity app using Flutter with modern UI/UX, animations, and responsive design. Implemented error tracking, favorites, and search with reusable components in Dart.',
        fullDescription: 'A comprehensive Flutter-based debugging assistant designed to streamline developer workflow. This application helps developers track, categorize, and resolve programming errors efficiently with a focus on productivity and user experience.',
        image: "d5.png",
       additionalImages: [
"d1.png",
"d2.png",
"d3.png",
"d4.png",
"d5.png",
"d6.png"
],
        tech: ['Flutter', 'Dart', 'State Management', 'UI/UX Design', 'Local Storage'],
        features: [
            'Error tracking and categorization system',
            'Favorites and bookmarking for common errors',
            'Advanced search and filtering capabilities',
            'Reusable UI components following DRY principles',
            'Modern animations and transitions',
            'Responsive design for tablets and phones',
        ],
        github: 'https://github.com/danahaltwijri/debugging-app.git',
        gradientClass: 'gradient-blue-cyan',
        modalGradient: 'linear-gradient(to top, #3b82f6, #06b6d4)'
    },
    {
        id: 4,
        title: 'DNR Cake',
        subtitle: 'Online Bakery Website (HTML-JS-CSS)',
        year: '2024',
        description: 'A website for purchasing delicious cakes for all occasions, with a variety of flavors and designs to choose from.',
        fullDescription: 'DNR Cake is a modern, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript. The website provides an elegant platform for customers to browse and order custom cakes for various occasions.',
        image:"ca.jpg",
        additionalImages: [
"ca.jpg"
],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'DOM Manipulation'],
        features: [
            'Fully responsive design for all devices',
            'Flavor and design customization',
            'Shopping cart functionality',
            'Smooth scrolling and animations',
            'Image galleries and sliders',
            'Contact and delivery information sections'
        ],
        gradientClass: 'gradient-orange-red',
        modalGradient: 'linear-gradient(to top, #f97316, #ef4444)'
    }
];

// Create stars background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}
const text = "Saudi Software Engineer • Full Stack Developer • SAP ERP Experience";
let i = 0;

function typeEffect(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeEffect,40);
}
}

window.onload = typeEffect;
// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-gradient ${project.gradientClass}"></div>
                <div class="project-gradient-bottom"></div>
            </div>
            <div class="project-content">
                <div class="project-inner">
                    <p class="project-subtitle">${project.subtitle}</p>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-year">${project.year}</p>
                    <div class="project-tech">
                        ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-link">
                        <span>View Details</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
        
        projectCard.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Modal Functions
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalGradient = document.getElementById('modalGradient');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalTitle = document.getElementById('modalTitle');
    const modalTech = document.getElementById('modalTech');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalImages = document.getElementById('modalImages');
    const modalGithub = document.getElementById('modalGithub');
    
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalGradient.style.background = project.modalGradient;
    modalSubtitle.textContent = `${project.subtitle} • ${project.year}`;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.fullDescription;
    
    // Set tech tags
    modalTech.innerHTML = project.tech.map(tech => {
        return `<span class="modal-tech-tag" style="background: ${project.modalGradient}">${tech}</span>`;
    }).join('');
    
    // Set additional images
    if (project.additionalImages && project.additionalImages.length > 0) {
        modalImages.innerHTML = `
            <h4 class="modal-images-title">Project Screenshots:</h4>
            <div class="modal-images-grid">
                ${project.additionalImages.map(img => `
                    <div class="modal-image-item">
<img src="${img}" alt="${project.title} screenshot" loading="lazy">                    </div>
                `).join('')}
            </div>
        `;
    } else {
        modalImages.innerHTML = '';
    }
    
    // Set features
    if (project.features && project.features.length > 0) {
        modalFeatures.innerHTML = `
            <h4 class="modal-features-title">Key Features:</h4>
            <ul class="modal-features-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }
    
    // Set GitHub link
    if (project.github) {
        modalGithub.href = project.github;
        modalGithub.style.display = 'inline-flex';
    } else {
        modalGithub.style.display = 'none';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Audio functionality with local audio file
let isAudioPlaying = false;

function toggleAudio() {

const audioButton = document.getElementById('audioButton');
const avatarVideo = document.getElementById("avatarVideo");
const audio = document.getElementById('introAudio');

if (isAudioPlaying) {

audio.pause();
audio.currentTime = 0;

avatarVideo.pause();
avatarVideo.currentTime = 0;

isAudioPlaying = false;
audioButton.classList.remove('playing');

return;
}

audio.play().then(() => {

isAudioPlaying = true;
audioButton.classList.add('playing');

avatarVideo.currentTime = 0;
avatarVideo.play();

}).catch(error => {
console.log('Audio playback failed:', error);
});

audio.onended = () => {

isAudioPlaying = false;
audioButton.classList.remove('playing');

avatarVideo.pause();
avatarVideo.currentTime = 0;

};

}

// Fallback Text-to-Speech function
function playTextToSpeech() {
    const text = `Hi, I'm Danah. I'm a recent Computer Science graduate from Saudi Electronic University. During my internship at SABIC, I gained hands-on experience working with SAP ERP systems and enterprise technology environments. I built this portfolio to showcase my projects, technical skills, and the certifications I earned during my learning journey. Feel free to explore my work and see the applications and solutions I have developed.`;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    
    utterance.onstart = () => {
        isAudioPlaying = true;
        const audioButton = document.getElementById('audioButton');
        audioButton.classList.add('playing');
    };
    
    utterance.onend = () => {
        isAudioPlaying = false;
        const audioButton = document.getElementById('audioButton');
        audioButton.classList.remove('playing');
    };
    
    window.speechSynthesis.speak(utterance);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Create stars
    createStars();
    
    // Render projects
    renderProjects();
    
    // Audio button
    const audioButton = document.getElementById('audioButton');
    if (audioButton) {
        audioButton.addEventListener('click', toggleAudio);
    }
    
    // Modal close button
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Modal backdrop
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    // Prevent modal content click from closing modal
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Stop audio when leaving page
window.addEventListener('beforeunload', () => {
    const audio = document.getElementById('introAudio');
    if (isAudioPlaying) {
        audio.pause();
        window.speechSynthesis.cancel();
    }
});

