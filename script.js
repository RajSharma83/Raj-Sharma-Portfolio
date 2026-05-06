                 
 document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar ul');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); 
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';

        if (navMenu.classList.contains('active')) {
            setTimeout(() => {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
            }, 5000);
        }
    });

    
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.textContent = '☰';
        });
    });

    
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });

    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
});


 document.addEventListener('DOMContentLoaded', () => {
      const image = document.querySelector('.image-container img');
      const nameText = document.querySelector('.name-text');
      const arrows = document.querySelectorAll('.arrow');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      observer.observe(image);
      observer.observe(nameText);
      arrows.forEach(arrow => observer.observe(arrow));

     
      setTimeout(() => {
        image.classList.add('visible');
        nameText.classList.add('visible');
        arrows.forEach(arrow => arrow.classList.add('visible'));
      }, 100);
    });         
    
          
    document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));

  setTimeout(() => {
    animatedElements.forEach(el => el.classList.add('visible'));
  }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated, .arrow, .image-container img, .name-text');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  });

        
  document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  const bulb = aboutSection.querySelector(".bulb");
  const monitor = aboutSection.querySelector(".monitor");
  const lines = {
    horizontalTop: aboutSection.querySelector(".line-horizontal-top"),
    horizontalBottom: aboutSection.querySelector(".line-horizontal-bottom"),
    vertical: aboutSection.querySelector(".line-vertical"),
    curveDown: aboutSection.querySelector(".curve-down"),
    curveRight: aboutSection.querySelector(".curve-right"),
  };
  const texts = aboutSection.querySelectorAll(".about-tittle, .job-title, .subtitle, .discription, .tick-list");
  const btn = aboutSection.querySelector(".Git-btn");

  const options = {
    root: null,
    threshold: 0.3 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
      
        bulb.classList.add("animate-from-top");
        monitor.classList.add("animate-monitor-fade-in");

        lines.horizontalTop.style.animation = "growWidth 1s forwards";
        lines.horizontalBottom.style.animation = "growWidth 1s forwards";
        lines.vertical.style.animation = "growHeight 1s forwards";

        lines.curveDown.style.opacity = 1;
        lines.curveRight.style.opacity = 1;

      
        texts.forEach((el, i) => {
          el.style.animation = `fadeIn 0.8s forwards`;
          el.style.animationDelay = `${i * 0.3}s`;
          el.style.opacity = 0;
        });

        btn.classList.add("animate-from-bottom");
      } else {
        
        bulb.classList.remove("animate-from-top");
        monitor.classList.remove("animate-monitor-fade-in");

        lines.horizontalTop.style.animation = "none";
        lines.horizontalBottom.style.animation = "none";
        lines.vertical.style.animation = "none";

        lines.curveDown.style.opacity = 0;
        lines.curveRight.style.opacity = 0;

        texts.forEach(el => {
          el.style.animation = "none";
          el.style.opacity = 0;
        });

        btn.classList.remove("animate-from-bottom");
      }
    });
  }, options);

  observer.observe(aboutSection);
});

        
    const modal = document.getElementById("projectModal");
    const video = document.getElementById("projectVideo");
    const description = document.getElementById("modalDescription");
    const link = document.getElementById("projectLink");
    const downloadBtn = document.getElementById("downloadBtn");
    const mainContent = document.getElementById("mainContent");

    const projectData = [
      {
        video: "assest/project/project1.mp4",
        description: "Raj Infra Pvt. Ltd. is a trusted construction company known for delivering high-quality projects with professionalism and reliability. This website, developed by me, showcases their diverse portfolio of residential, commercial, and infrastructure projects, along with detailed information about their services and commitment to excellence and client satisfaction.",
        link: "https://rajinfrapvtldt.netlify.app/",
        download: "https://github.com/RajSharma83/Raj-Infra-Pvt.Ltd.git",
        color: "#2e00c5ad", 
      },
      {
        video: "assest/project/project2.mp4",
        description: "Facial Expression Detector is a web app that uses JavaScript APIs and machine learning to detect emotions in real time through facial expressions. Developed by me, it combines face detection with a responsive UI to deliver a smooth, interactive experience directly in the browser.",
        link: "https://facialexpressiondetector.netlify.app/",
        download: "https://github.com/RajSharma83/Facial-Expression-Detector.git",
        color: "#27ae60", 
      },
      {
        video: "assest/project/project3.mp4",
        description: "A sleek and modern website featuring a Motion and Video Editor equipped with intuitive tools for animation, trimming, and basic editing. Developed by me to ensure smooth performance and a user-friendly experience, the editor runs directly in the browser, making it accessible and convenient for users of all skill levels.",
        link: "https://prince-videoeditor.netlify.app/",
        download: "https://github.com/RajSharma83/Motion-Editor-Prince.git",
        color: "#f39c12", 
      },
    ];

    function openModal(index) {
      const data = projectData[index];

      video.src = data.video;
      video.play();
      description.innerText = data.description;
      description.style.borderLeft = `4px solid ${data.color}`;
      link.href = data.link;
      downloadBtn.href = data.download;

      modal.classList.remove("fade-out");
      modal.style.display = "flex";
      modal.classList.add("fade-in");

      
      mainContent.classList.add("blurred");
    }

    function closeModal() {
      modal.classList.remove("fade-in");
      modal.classList.add("fade-out");
      mainContent.classList.remove("blurred");

      setTimeout(() => {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
        video.src = "";
      }, 300);
    }

    
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });                  
                        
               
       document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll('.animate-slide-left');
  const shuffleCards = document.querySelectorAll('.animate-shuffle');

  shuffleCards.forEach(card => {
    card.style.setProperty('--rand-x', (Math.random() - 0.5).toFixed(2));  
    card.style.setProperty('--rand-y', (Math.random() - 0.5).toFixed(2));
    card.style.setProperty('--rand-rot', (Math.random() - 0.5).toFixed(2));
  });

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, 
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  slideElements.forEach(el => observer.observe(el));
  shuffleCards.forEach(card => observer.observe(card));
});
     
             
  
  document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const elementsToAnimate = [
      document.querySelector(".skills-container"),
      document.querySelector(".bulb-img")
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); 
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach((el) => {
      if (el) observer.observe(el);
    });
  });
                       

 document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("iJFwidfEumYsDqG47");

  const form = document.querySelector("form");
  const popup = document.getElementById("popup");
  const wrapper = document.querySelector(".contact-wrapper");

  const mailSound = new Audio("assest/sound.mp3");
  mailSound.volume = 0.7;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = form.querySelectorAll("input")[0].value;
    const phoneNumber = form.querySelectorAll("input")[1].value;
    const email = form.querySelectorAll("input")[2].value;
    const serviceType = form.querySelector("select").value;
    const message = form.querySelector("textarea").value;

    const templateParams = {
      fullName,
      phoneNumber,
      email,
      serviceType,
      message
    };

    emailjs.send("service_h0dzdnh", "template_77r7ggm", templateParams)
      .then(() => {

        mailSound.play();

        popup.classList.add("show");

        wrapper.classList.add("blur");

        setTimeout(() => {
          popup.classList.remove("show");
          wrapper.classList.remove("blur");
        }, 3000);

        form.reset();

      })
      .catch((error) => {
        console.log(error);
        alert("❌ Message failed to send");
      });

  });

});
