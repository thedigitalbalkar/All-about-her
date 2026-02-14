/* ================= SCROLL ================= */
function scrollToSection(index) {
  const sections = document.querySelectorAll(".snap-section");
  if (sections[index]) {
    sections[index].scrollIntoView({ behavior: "smooth" });
  }
}

/* ================= LETTERS ================= */
function openLetter(type) {
  const box = document.getElementById("letterBox");
  if (!box) return;

  const messages = {
    distant: `
Even if you pull away sometimes, I’m still here — calmly, quietly, without pressure.  
I understand that distance isn’t always about not caring. Sometimes it’s just how you protect your peace.  
You don’t have to explain everything immediately, and you don’t have to respond perfectly.

I don’t measure your love by constant closeness.  
I value the steady moments, the real ones, the small things that feel genuine.  

So if you ever feel distant, just know — I’m not chasing, I’m not leaving.  
I’m just here. Steady. ❤️
  `,

    overwhelmed: `
You don’t have to carry everything alone.  
Not your stress, not your thoughts, not the weight of trying to handle everything perfectly.

I know you’re strong and independent, and I admire that about you.  
But even strong people deserve softness sometimes.  

You don’t need to fix yourself before coming to me.  
You don’t need to explain every emotion perfectly.  

If things feel heavy, just breathe.  
Take your time. I’m not here to add pressure — I’m here to be a calm place when the world feels loud. 🤍
  `,

    space: `
Take your space. I respect it.  
I don’t see space as rejection — I see it as you taking care of yourself.

You don’t lose me by needing time alone.  
You don’t lose my care by going quiet for a while.

I won’t crowd you. I won’t guilt you.  
And I won’t disappear either.

When you’re ready, I’ll be here — not questioning, not demanding.  
Just steady. Just real. 🕊️
  `
  };

  box.innerHTML = messages[type] || "";
}

/* ================= MUSIC ================= */
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;
  music.paused ? music.play() : music.pause();
}

/* ================= DARK MODE ================= */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* ================= MIXED LOVE EMOJIS ================= */

const loveEmojis = [
  "💖",
  "💕",
  "💗",
  "💓",
  "💘",
  "❤️",
  "🥰",
  "😘"
];

function createLoveEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("floating-love");

  emoji.innerHTML = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = Math.random() * 15 + 15 + "px";
  emoji.style.animationDuration = Math.random() * 5 + 6 + "s";

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 11000);
}

setInterval(createLoveEmoji, 900);
