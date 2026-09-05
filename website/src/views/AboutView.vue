<template>
  <main class="min-h-screen overflow-x-hidden bg-[#fff7e8]">
    <section class="relative min-h-[760px] overflow-hidden bg-cover bg-center bg-no-repeat px-[6%] pb-32 pt-16"
      :style="{ backgroundImage: `url(${heroBg})` }">
      <!-- overlay for better text readability -->
      <div class="absolute inset-0 bg-white/10"></div>

      <!-- content -->
      <div class="relative z-10 flex min-h-[620px] items-center">
        <div class="max-w-[620px] text-center lg:text-left">
          <!-- Badge -->
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full bg-[#067337] px-5 py-2.5 text-sm font-extrabold uppercase text-white shadow-lg">
            <span>⭐</span>
            About EDYN Learning Series
          </div>

          <!-- Heading -->
          <h1
            class="font-baloo text-[3rem] font-extrabold leading-[0.95] text-[#067337] sm:text-[4rem] lg:text-[5.2rem]">
            <span class="block">Building Confident Minds.</span>
            <span class="block text-[#ee3f7c]">
              <span class="text-[#f4a900]">Inspiring</span>
              Bright Futures.
            </span>
          </h1>

          <!-- Description -->
          <p class="mx-auto mt-6 max-w-[540px] text-lg leading-[1.7] text-[#1f1b16] lg:mx-0 lg:text-[1.35rem]">
            At EDYN Learning Series, we empower children with knowledge, skills,
            and values to become confident, creative and compassionate leaders
            of tomorrow.
          </p>

          <!-- pillars -->
          <div class="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
            <div class="text-center">
              <div
                class="mx-auto mb-3 grid h-[74px] w-[74px] place-items-center rounded-full bg-[#e8f8ef] text-3xl shadow-xl">
                📖
              </div>
              <h3 class="font-baloo text-lg font-extrabold leading-tight text-[#12233d]">
                Quality<br />Education
              </h3>
            </div>

            <div class="hidden h-[85px] w-px bg-[#ead7b6] sm:block"></div>

            <div class="text-center">
              <div
                class="mx-auto mb-3 grid h-[74px] w-[74px] place-items-center rounded-full bg-[#fff4d9] text-3xl shadow-xl">
                💛
              </div>
              <h3 class="font-baloo text-lg font-extrabold leading-tight text-[#12233d]">
                Character<br />Development
              </h3>
            </div>

            <div class="hidden h-[85px] w-px bg-[#ead7b6] sm:block"></div>

            <div class="text-center">
              <div
                class="mx-auto mb-3 grid h-[74px] w-[74px] place-items-center rounded-full bg-[#f4ecff] text-3xl shadow-xl">
                ⭐
              </div>
              <h3 class="font-baloo text-lg font-extrabold leading-tight text-[#12233d]">
                Future<br />Leadership
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- doodles -->
      <div
        class="pointer-events-none absolute left-[42%] top-[22%] hidden rotate-[-12deg] text-5xl text-[#067337] opacity-80 lg:block">
        ♡
      </div>

      <div
        class="pointer-events-none absolute left-[38%] top-[48%] hidden rotate-[-20deg] text-5xl text-[#067337] opacity-70 lg:block">
        ✈
      </div>

      <!-- bottom curve -->
      <svg class="absolute bottom-[-1px] left-0 z-20 h-[125px] w-full" viewBox="0 0 1440 120"
        preserveAspectRatio="none">
        <path fill="#067337" d="
    M0,70
    C180,130 360,10 540,65
    C720,120 900,15 1080,75
    C1200,115 1320,20 1440,70
    C1440,100 1280,120 1100,112
    C900,102 700,118 520,108
    C320,96 140,115 0,95
    Z
  " />
      </svg>

    </section>
    <section class="relative bg-[#fff7e8] px-[6%] py-20">
      <!-- decorative doodles -->
      <div class="pointer-events-none absolute left-[5%] top-10 hidden text-4xl text-[#067337] opacity-70 md:block">
        ✧
      </div>

      <div class="pointer-events-none absolute right-[5%] bottom-16 hidden text-5xl text-[#067337] opacity-70 md:block">
        ♡
      </div>

      <div class="grid items-center gap-10 lg:grid-cols-[1fr_1fr_1.05fr]">
        <!-- Founder Image -->
        <div class="relative mx-auto w-full max-w-[430px]">
          <div class="absolute -left-5 bottom-4 h-[78%] w-[78%] rounded-[45%] bg-[#f4a900] opacity-90"></div>

          <div class="relative overflow-hidden rounded-[42%_42%_28%_28%]  ">
            <img :src="ceoImg" alt="Founder of EDYN Learning Series" class="h-[500px] w-full object-cover object-top" />
          </div>
        </div>

        <!-- Founder Story -->
        <div class="text-center lg:text-left">
          <div
            class="mb-3 flex items-center justify-center gap-2 text-sm font-extrabold uppercase tracking-wide text-[#067337] lg:justify-start">
            <span>🌿</span>
            Meet Our Founder
          </div>

          <h2 class="font-baloo text-[2.6rem] font-extrabold leading-[1] text-[#067337] md:text-[3.4rem]">
            A Vision Born<br />
            from <span class="text-[#ee3f7c]">Purpose</span>
          </h2>

          <div class="mt-4 h-1 w-16 rounded-full bg-[#f4a900] mx-auto lg:mx-0"></div>

          <p class="mt-6 text-lg leading-[1.8] text-[#1f1b16]">
            EDYN Learning Series was founded with a simple belief: every child
            deserves access to learning experiences that are joyful, meaningful,
            culturally relatable and confidence-building.
          </p>

          <p class="mt-4 text-lg leading-[1.8] text-[#1f1b16]">
            Inspired by a passion for early childhood development, EDYN was created
            to help children discover their potential while learning with love,
            creativity and strong values.
          </p>

          <div class="mt-6">
            <p class="font-baloo text-3xl font-extrabold text-[#067337]">
              Mrs. Oluwatoyin Victor
            </p>
            <p class="text-base font-semibold text-[#3f2e22]">
              Founder & Chief Visionary Officer
            </p>
          </div>
        </div>

        <!-- Inspiration Card -->
        <div class="rounded-[2rem] border border-[#d9e8bd] bg-[#f8fbeb] p-8 shadow-xl">
          <div class="mb-4 font-baloo text-6xl font-extrabold leading-none text-[#067337]">
            “
          </div>

          <h3 class="font-baloo text-2xl font-extrabold text-[#067337]">
            My Inspiration
          </h3>

          <p class="mt-5 text-lg leading-[1.8] text-[#1f1b16]">
            My journey as an educator opened my eyes to the gaps in traditional
            learning. I dreamed of a space where children could learn joyfully,
            think critically and grow with strong values.
          </p>

          <p class="mt-5 text-lg font-bold leading-[1.8] text-[#067337]">
            EDYN is that dream brought to life — for every child, every family,
            every future.
          </p>

          <div class="mt-6 text-right text-5xl text-[#067337]">
            ♡
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-white px-[6%] py-10">
      <div
        class="grid overflow-hidden rounded-[2rem] border border-[#f1dfbf] bg-white/70 shadow-xl lg:grid-cols-[1fr_0.7fr_1fr]">

        <!-- Mission -->
        <div class="p-8 md:p-10">
          <div class="mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#067337] text-3xl text-white shadow-lg">
            🎯
          </div>

          <h3 class="font-baloo text-3xl font-extrabold text-[#067337]">
            Our Mission
          </h3>

          <p class="mt-4 text-lg leading-[1.8] text-[#1f1b16]">
            To provide accessible, engaging and holistic learning experiences that
            help children discover their potential, build confidence and achieve
            excellence.
          </p>
        </div>

        <!-- Promise -->
        <div
          class="relative flex items-center justify-center border-y border-dashed border-[#f4a900] p-8 lg:border-x lg:border-y-0">
          <div class="absolute left-6 top-6 text-3xl text-[#f4a900]">
            ✨
          </div>

          <div
            class="grid h-44 w-44 place-items-center rounded-full border-2 border-dashed border-[#f4a900] bg-[#fff7e8] text-center shadow-inner">
            <div>
              <div class="text-4xl">👑</div>
              <h3 class="font-baloo text-3xl font-extrabold leading-tight text-[#067337]">
                Our<br />Promise
              </h3>
            </div>
          </div>

          <div class="absolute bottom-6 right-6 text-3xl text-[#ee3f7c]">
            ♡
          </div>
        </div>

        <!-- Vision -->
        <div class="p-8 md:p-10">
          <div class="mb-5 grid h-16 w-16 place-items-center rounded-full bg-[#067337] text-3xl text-white shadow-lg">
            👁️
          </div>

          <h3 class="font-baloo text-3xl font-extrabold text-[#067337]">
            Our Vision
          </h3>

          <p class="mt-4 text-lg leading-[1.8] text-[#1f1b16]">
            To become Africa’s most trusted learning platform, raising a generation
            of innovative, compassionate and purpose-driven learners.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#fff7e8] px-[6%] py-10">
      <div class="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#067337] via-[#0b8a43] to-[#067337] shadow-2xl">
        <div class="grid grid-cols-2 gap-6 px-6 py-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          <!-- intro block -->
          <div
            class="col-span-2 flex flex-col justify-center text-center text-white md:col-span-3 lg:col-span-1 lg:text-left">
            <h3 class="font-baloo text-3xl font-extrabold leading-tight">
              Making an Impact,<br />
              Every Day
            </h3>

            <div class="mt-2 text-3xl text-[#f4d03f]">♡</div>
          </div>

          <!-- Stat 1 -->
          <div class="flex flex-col items-center justify-center border-white/20 lg:border-l">
            <div class="mb-3 grid h-20 w-20 place-items-center rounded-full bg-[#4caf50] text-4xl shadow-xl">
              🎓
            </div>

            <h4 class="font-baloo text-4xl font-extrabold text-white">
              25,000+
            </h4>

            <p class="mt-2 text-center text-sm font-semibold text-white/90">
              Happy Learners
            </p>
          </div>

          <!-- Stat 2 -->
          <div class="flex flex-col items-center justify-center border-white/20 lg:border-l">
            <div class="mb-3 grid h-20 w-20 place-items-center rounded-full bg-[#f4a900] text-4xl shadow-xl">
              🏫
            </div>

            <h4 class="font-baloo text-4xl font-extrabold text-white">
              500+
            </h4>

            <p class="mt-2 text-center text-sm font-semibold text-white/90">
              Learning Resources
            </p>
          </div>

          <!-- Stat 3 -->
          <div class="flex flex-col items-center justify-center border-white/20 lg:border-l">
            <div class="mb-3 grid h-20 w-20 place-items-center rounded-full bg-[#ee3f7c] text-4xl shadow-xl">
              👨‍👩‍👧
            </div>

            <h4 class="font-baloo text-4xl font-extrabold text-white">
              15,000+
            </h4>

            <p class="mt-2 text-center text-sm font-semibold text-white/90">
              Parents Trust Us
            </p>
          </div>

          <!-- Stat 4 -->
          <div class="flex flex-col items-center justify-center border-white/20 lg:border-l">
            <div class="mb-3 grid h-20 w-20 place-items-center rounded-full bg-[#7b3fbd] text-4xl shadow-xl">
              🏆
            </div>

            <h4 class="font-baloo text-4xl font-extrabold text-white">
              98%
            </h4>

            <p class="mt-2 text-center text-sm font-semibold text-white/90">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-[#fff7e8] px-[6%] py-14">
      <div class="mb-10 text-center">
        <div class="mb-2 text-3xl text-[#f4a900]">✦</div>

        <h2 class="font-baloo text-4xl font-extrabold text-[#067337] md:text-5xl">
          Our Core Values
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div class="rounded-[2rem] border border-[#f1dfbf] bg-white/80 p-7 text-center shadow-xl">
          <div
            class="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#067337] text-4xl text-white shadow-lg">
            💚
          </div>
          <h3 class="font-baloo text-2xl font-extrabold text-[#067337]">
            Child-Centered
          </h3>
          <p class="mt-3 text-base leading-[1.7] text-[#1f1b16]">
            We prioritize every child’s unique potential and learning journey.
          </p>
          <div class="mx-auto mt-5 h-1 w-12 rounded-full bg-[#067337]"></div>
        </div>

        <div class="rounded-[2rem] border border-[#f1dfbf] bg-white/80 p-7 text-center shadow-xl">
          <div
            class="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#f4a900] text-4xl text-white shadow-lg">
            💡
          </div>
          <h3 class="font-baloo text-2xl font-extrabold text-[#067337]">
            Excellence
          </h3>
          <p class="mt-3 text-base leading-[1.7] text-[#1f1b16]">
            We strive for the highest standards in everything we create and teach.
          </p>
          <div class="mx-auto mt-5 h-1 w-12 rounded-full bg-[#f4a900]"></div>
        </div>

        <div class="rounded-[2rem] border border-[#f1dfbf] bg-white/80 p-7 text-center shadow-xl">
          <div
            class="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#ee3f7c] text-4xl text-white shadow-lg">
            🤝
          </div>
          <h3 class="font-baloo text-2xl font-extrabold text-[#067337]">
            Integrity
          </h3>
          <p class="mt-3 text-base leading-[1.7] text-[#1f1b16]">
            We are honest, transparent and committed to doing what’s right.
          </p>
          <div class="mx-auto mt-5 h-1 w-12 rounded-full bg-[#ee3f7c]"></div>
        </div>

        <div class="rounded-[2rem] border border-[#f1dfbf] bg-white/80 p-7 text-center shadow-xl">
          <div
            class="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#7b3fbd] text-4xl text-white shadow-lg">
            👥
          </div>
          <h3 class="font-baloo text-2xl font-extrabold text-[#067337]">
            Inclusion
          </h3>
          <p class="mt-3 text-base leading-[1.7] text-[#1f1b16]">
            We celebrate diversity and create a safe space for every child.
          </p>
          <div class="mx-auto mt-5 h-1 w-12 rounded-full bg-[#7b3fbd]"></div>
        </div>

        <div class="rounded-[2rem] border border-[#f1dfbf] bg-white/80 p-7 text-center shadow-xl">
          <div
            class="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#067337] text-4xl text-white shadow-lg">
            🌱
          </div>
          <h3 class="font-baloo text-2xl font-extrabold text-[#067337]">
            Innovation
          </h3>
          <p class="mt-3 text-base leading-[1.7] text-[#1f1b16]">
            We embrace creativity and technology to make learning exciting.
          </p>
          <div class="mx-auto mt-5 h-1 w-12 rounded-full bg-[#067337]"></div>
        </div>
      </div>
    </section>
    <section class="relative overflow-hidden bg-[#fff7e8] px-[6%] py-16">
      <div class="relative overflow-hidden rounded-[2.5rem] bg-[#f4a900] px-8 py-12 shadow-2xl md:px-14 lg:px-20">
        <!-- decorative assets -->
        <img src="@/assets/images/books.png" alt="Books"
          class="pointer-events-none absolute -left-6 bottom-0 hidden w-36 rotate-[-8deg] md:block lg:w-44" />

        <img src="@/assets/images/bag.png" alt="School bag"
          class="pointer-events-none absolute -right-8 bottom-0 hidden w-40 rotate-[8deg] md:block lg:w-52" />

           <img src="@/assets/images/bag.png" alt="School bag"
          class="pointer-events-none absolute -right-4 bottom-0 hidden w-40 rotate-[8deg] md:block lg:w-52" />

        <div class="pointer-events-none absolute left-[16%] top-8 text-4xl text-white/60">
          ✦
        </div>

        <div class="pointer-events-none absolute right-[20%] top-10 text-5xl text-[#067337]/30">
          ♡
        </div>

        <div class="relative z-10 mx-auto max-w-3xl text-center">

          <h2 class="font-baloo text-4xl font-extrabold leading-tight text-[#067337] md:text-6xl">
            Ready to Help Your Child<br class="hidden md:block" />
            Learn, Grow & Shine?
          </h2>

          <p class="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-[1.8] text-[#1f1b16]">
            Join EDYN Learning Series today and give your child access to fun,
            confidence-building lessons designed for bright futures.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#"
              class="rounded-full bg-[#067337] px-8 py-4 font-baloo text-xl font-extrabold text-white shadow-xl transition hover:-translate-y-1">
              Get Started Now
            </a>

            <a href="#"
              class="rounded-full bg-white px-8 py-4 font-baloo text-xl font-extrabold text-[#067337] shadow-xl transition hover:-translate-y-1">
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import heroBg from '../assets/images/bg.png'
import ceoImg from '../assets/images/ceo.png'
</script>
