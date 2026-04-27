<template>
  <main class="home-page">
    <header class="site-header">
      <div class="logo">
        <div class="logo-main">EDYN</div>
        <div class="logo-sub">LEARNING SERIES</div>
      </div>

      <nav class="nav-links">
        <a href="#" class="active">Home</a>
        <a href="#">About Us</a>
        <a href="#">Programs</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>

      <div class="nav-actions">
        <button class="search-btn">🔍</button>
        <button class="login-btn">Log In</button>
        <button class="signup-btn">Sign Up</button>
      </div>
    </header>
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-badge">
          ⭐ Premium learning for bright futures
        </div>

        <h1 class="hero-title">
          <span>LEARN.</span>
          <span>GROW.</span>
          <span>SHINE!</span>
        </h1>

        <p class="hero-text">
          EDYN Learning Series helps children build confidence, explore their
          potential, and shine every day.
        </p>

        <div class="hero-actions">
          <button class="btn-primary">
            💛 Get Started Now
          </button>

          <button class="btn-video">
            <span class="play-icon">▶</span>
            Watch Video
          </button>
        </div>

        <div class="hero-trust">
          <div class="avatar-group">
            <span>👧🏾</span>
            <span>👦🏾</span>
            <span>👧🏾</span>
          </div>
          <p>Trusted by Parents<br />Across Nigeria</p>
        </div>
      </div>
    </section>

    <!-- FEATURE STRIP -->
    <section class="feature-strip">
      <div class="feature-card">
        <div class="icon green">
          <BookOpen :size="33" />
        </div>
        <div>
          <h3>Engaging Lessons</h3>
          <p>Interactive and fun lessons for young minds.</p>
        </div>
      </div>

      <div class="feature-card">
        <div class="icon yellow">
          <Star :size="33" />
        </div>
        <div>
          <h3>Builds Confidence</h3>
          <p>Activities that encourage self-belief and expression.</p>
        </div>
      </div>

      <div class="feature-card">
        <div class="icon pink">
          <Heart :size="33" />
        </div>
        <div>
          <h3>Holistic Growth</h3>
          <p>Focus on academics, values, creativity and life skills.</p>
        </div>
      </div>

      <div class="feature-card">
        <div class="icon blue">
          <Trophy :size="33" />
        </div>
        <div>
          <h3>Track Progress</h3>
          <p>Easy tools for parents to monitor growth and achievements.</p>
        </div>
      </div>


    </section>

    <section class="programs-section">
      <div class="programs-heading">
        <h2>Our Learning Programs</h2>
        <p>Comprehensive learning paths designed for every stage of your child's journey.</p>
      </div>

      <div class="programs-grid">
        <div v-for="program in programs" :key="program.title" class="program-card" :class="program.theme">
          <img :src="program.image" :alt="program.title" class="program-img" />

          <h3>{{ program.title }}</h3>
          <h4>{{ program.age }}</h4>
          <p>{{ program.description }}</p>

          <button class="program-btn">
            Explore
            <span>›</span>
          </button>
        </div>
      </div>
    </section>

    <section class="culture-banner">
      <img src="@/assets/images/background.png" alt="EDYN Nigerian learning background" class="culture-bg" />

      <div class="culture-green-panel">
        <img src="@/assets/images/badge.png" alt="Built for Nigerian children badge" class="culture-badge" />

        <div class="culture-text">
          <h2>Proudly Nigerian.<br />Globally Inspired.</h2>
          <p>
            We combine the best global learning standards with local values and
            culture to raise confident, kind and capable leaders of tomorrow.
          </p>
          <span class="culture-heart">♡</span>
        </div>
      </div>
    </section>

    <section class="stats-newsletter-section">
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-icon green">
            <GraduationCap :size="38" />
          </div>
          <div>
            <h3>25,000+</h3>
            <p>Happy Learners</p>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon yellow">
            <School :size="38" />
          </div>
          <div>
            <h3>500+</h3>
            <p>Learning Resources</p>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon pink">
            <Users :size="38" />
          </div>
          <div>
            <h3>15,000+</h3>
            <p>Parents Trust Us</p>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon purple">
            <Trophy :size="38" />
          </div>
          <div>
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon blue">
            <Globe2 :size="38" />
          </div>
          <div>
            <h3>All Across</h3>
            <p>Nigeria</p>
          </div>
        </div>
      </div>

      <div class="newsletter-box">
        <div class="newsletter-left">
          <div class="newsletter-icon">
            <MailOpen :size="46" />
          </div>

          <div>
            <h2>Stay Updated with EDYN</h2>
            <p>Get tips, resources and updates straight to your inbox.</p>
          </div>
        </div>

        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>

    <footer class="edyn-footer">
      <div class="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C120,10 240,110 360,60 C480,10 600,110 720,60 C840,10 960,110 1080,60 C1200,10 1320,110 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <img src="@/assets/images/1.png" class="footer-bag" alt="EDYN school bag" />
      <img src="@/assets/images/books.png" class="footer-books" alt="EDYN books" />
      <img src="@/assets/images/cup.png" class="footer-cup footer-cup-left" alt="Pencil cup" />
      <img src="@/assets/images/2.png" class="footer-cup footer-cup-right" alt="Pencil cup" />

      <div class="footer-main">
        <div class="footer-hero">
          <div>
            <h2>EDYN</h2>
            <p>LEARNING SERIES</p>
          </div>

          <div class="footer-message">
            <span>💛 Learn Today.</span>
            <strong>Lead Tomorrow.</strong>
          </div>
        </div>

        <div class="footer-links-grid">
          <div class="footer-col">
            <div class="footer-icon">🧭</div>
            <h3>Explore</h3>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Programs</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">💛</div>
            <h3>For Parents</h3>
            <a href="#">Parent Guide</a>
            <a href="#">Progress Tracking</a>
            <a href="#">Learning Tips</a>
            <a href="#">Community</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">📘</div>
            <h3>Resources</h3>
            <a href="#">Worksheets</a>
            <a href="#">Learning Videos</a>
            <a href="#">E-Books</a>
            <a href="#">Activities</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">⭐</div>
            <h3>Company</h3>
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div class="footer-col">
            <div class="footer-icon">✈️</div>
            <h3>Connect</h3>
            <div class="footer-socials">
              <span>f</span>
              <span>ig</span>
              <span>yt</span>
              <span>tk</span>
            </div>
            <p>Follow us for tips, updates and fun learning ideas!</p>
          </div>
        </div>

        <div class="footer-newsletter">
          <div class="newsletter-info">
            <div class="mail-icon">✉️</div>
            <div>
              <h3>Stay Updated with EDYN</h3>
              <p>Get tips, resources and updates straight to your inbox.</p>
            </div>
          </div>

          <form class="footer-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div class="footer-bottom-new">
          <p>© 2026 EDYN Learning Series. All rights reserved.</p>
          <p>Proudly Nigerian. Globally Inspired. 🇳🇬</p>
        </div>
      </div>
    </footer>


  </main>
</template>

<script setup>

import {
  BookOpen,
  Star,
  Heart,
  Trophy,
  Users,
  GraduationCap,
  School,
  Globe2,
  MailOpen
} from 'lucide-vue-next'

import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/5.png'
import img5 from '../assets/images/6.png'

const programs = [
  {
    title: 'Pre-Nursery',
    age: 'Ages 2 - 3',
    description: 'Early discovery through play, songs and fun activities.',
    image: img1,
    theme: 'green-card',
  },
  {
    title: 'Nursery',
    age: 'Ages 3 - 4',
    description: 'Building basics in reading, numbers and social skills.',
    image: img2,
    theme: 'yellow-card',
  },
  {
    title: 'Primary',
    age: 'Ages 5 - 9',
    description: 'Stronger academics, critical thinking and creativity.',
    image: img3,
    theme: 'purple-card',
  },
  {
    title: 'Life Skills',
    age: 'All Ages',
    description: 'Values, confidence, communication and daily life skills.',
    image: img4,
    theme: 'blue-card',
  },
  {
    title: 'Creative Zone',
    age: 'All Ages',
    description: 'Art, music, stories and imagination come to life.',
    image: img5,
    theme: 'orange-card',
  },
]
</script>

<style scoped>
.feature-strip {
  width: 90%;
  max-width: 1350px;
  margin: -80px auto 40px;
  padding: 1.6rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}

.icon {
  min-width: 64px;
  width: 64px;
  height: 64px;
}

.feature-card p {
  font-size: 1.2rem;
  line-height: 1.5;
}


/* Tablet */
@media (max-width: 1100px) {
  .feature-strip {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -40px;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .feature-strip {
    grid-template-columns: 1fr;
    width: 92%;
    padding: 1.3rem;
    margin-top: -20px;
  }

  .feature-card {
    gap: 1rem;
  }

  .icon {
    min-width: 58px;
    width: 58px;
    height: 58px;
  }

  .feature-card p {
    font-size: 1.05rem;
  }
}
</style>
