import re
import os

html_file = 'index.html'
js_file = 'main.js'

with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Translation dictionary mapping
# ID string -> (key, EN string)
translations = {
    "AI • TECH • MINDSET • PRODUCTIVITY": ("hero_niche", "AI • TECH • MINDSET • PRODUCTIVITY"),
    "Edukasi teknologi dan pengembangan diri yang dibalut dalam penceritaan sinematik serta konten kuis interaktif.": ("hero_desc", "Technology and self-development education wrapped in cinematic storytelling and interactive quiz content."),
    "HUBUNGI VIA WHATSAPP": ("hero_wa", "CONTACT VIA WHATSAPP"),
    "VISIONARY TECH": ("visual_title", "VISIONARY TECH"),
    "RENAISSANCE CREATOR": ("stats_tag", "RENAISSANCE CREATOR"),
    "SEDIKIT TENTANG GUE": ("stats_heading", "A LITTLE ABOUT ME"),
    "TOTAL VIEWS": ("stats_views", "TOTAL VIEWS"),
    "TOTAL FOLLOWERS": ("stats_followers", "TOTAL FOLLOWERS"),
    "BRAND DEALS": ("stats_deals", "BRAND DEALS"),
    "KOLABORASI EKSKLUSIF": ("brands_subtitle", "EXCLUSIVE COLLABORATIONS"),
    "PERNAH BERKOLABORASI DENGAN": ("brands_title", "HAS COLLABORATED WITH"),
    "DAN MASIH BANYAK LAGI 😲": ("brands_footer", "AND MANY MORE 😲"),
    "KARYA TERBAIK": ("works_title", "BEST WORKS"),
    "Sorotan beberapa kolaborasi dan konten personal yang mencapai jutaan tayangan (TikTok). Tahu sendiri kan bakal segila apa kalo mirror ke Instagram juga": ("works_desc", "Highlights of several collaborations and personal content that reached millions of views (TikTok). Imagine the impact when mirrored to Instagram!"),
    "DOKUMENTASI EVENT &amp; SEMINAR": ("events_title", "EVENT &amp; SEMINAR DOCUMENTATION"),
    "Rekam jejak gue sebagai pembicara dan mentor.": ("events_subtitle", "My track record as a speaker and mentor."),
    "Membagikan konsep dasar AI dan cara praktis pengaplikasiannya.": ("events_ai_desc", "Sharing the fundamental concepts of AI and practical ways to apply them."),
    "Pelatihan langsung implementasi AI untuk membangun konten cerdas.": ("events_workshop_desc", "Hands-on training implementing AI to build smart content."),
    "LAYANAN KOLABORASI": ("services_title", "COLLABORATION SERVICES"),
    "I. SOCIAL MEDIA CAMPAIGNS": ("serv_1", "I. SOCIAL MEDIA CAMPAIGNS"),
    "Cross-platform campaign untuk eksposur ganda. Termasuk 1x Video, konsep &amp; script eksklusif.": ("serv_1_a", "Cross-platform campaign for double exposure. Includes 1x Video, exclusive concept &amp; script."),
    "Instagram Services": ("serv_1_b_title", "Instagram Services"),
    "IG Story (aktif 24 jam dengan link), Feed, Carousel, hingga Reels bernarasi kuat.": ("serv_1_b", "IG Story (active 24 hrs with link), Feed, Carousel, to highly narrative Reels."),
    "TikTok Services": ("serv_1_c_title", "TikTok Services"),
    "Video vertikal dengan hook tajam atau Carousel berorientasi edukasi dan tren.": ("serv_1_c", "Vertical video with sharp hooks or trend-driven educational Carousels."),
    "II. EVENT VISIT &amp; COVERAGE": ("serv_2", "II. EVENT VISIT &amp; COVERAGE"),
    "Pre-Event, On-Site &amp; Post-Event": ("serv_2_a_title", "Pre-Event, On-Site &amp; Post-Event"),
    "Hadir meramaikan offline event dengan teaser interaktif, liputan real-time via Stories/Reels, dan video kompilasi recap dinamis pasca-acara.": ("serv_2_a", "Livening up offline events with interactive teasers, real-time coverage via Stories/Reels, and dynamic recap compilation videos post-event."),
    "III. SPEAKER &amp; TALKSHOW": ("serv_3", "III. SPEAKER &amp; TALKSHOW"),
    "Topik Unggulan &amp; Format": ("serv_3_a_title", "Featured Topics &amp; Formats"),
    "Fundamental AI, Workshop Hands-on, Strategi Viral, &amp; Konten Visual. Tersedia untuk Event Online (Webinar/Live) maupun Offline (Seminar/Juri).": ("serv_3_a", "AI Fundamentals, Hands-on Workshops, Viral Strategies, &amp; Visual Content. Available for Online (Webinar/Live) and Offline (Seminar/Judge) Events."),
    "IV. EXCLUSIVE PARTNERSHIPS": ("serv_4", "IV. EXCLUSIVE PARTNERSHIPS"),
    "Brand Ambassador &amp; Custom Projects": ("serv_4_a_title", "Brand Ambassador &amp; Custom Projects"),
    "Kerjasama strategis 3-6 bulan atau campaign spesifik yang disesuaikan dengan brief, integrasi link, dan opsi Usage Rights.": ("serv_4_a", "Strategic 3-6 month partnerships or specific campaigns customized to your brief, link integration, and Usage Rights options."),
    "APA KATA MEREKA?": ("testi_title", "WHAT THEY SAY"),
    "\"Gokil sih, ulasan hapenya detail banget tapi tetep asyik ditonton. Retention rate-nya tinggi, engagement naik, dan pelayanan komunikasinya responsif banget. Top notch!\"": ("testi_1", "\"Crazy good! The phone review was highly detailed but still super fun to watch. High retention rate, increased engagement, and very responsive communication. Top notch!\""),
    "\"Kerja bareng bro satu ini gak pernah ribet. Kreatif banget bikin analogi laptop kita jadi gampang dipahami awam. Performa kontennya mantap, delivery-nya super cepet!\"": ("testi_2", "\"Working with this bro is never complicated. Super creative in making laptop analogies easily understood by the public. Solid content performance, super fast delivery!\""),
    "\"Gak cuma jago bikin skrip yang nge-hook, tapi profesionalitas kerjanya juara. Konversi bagus, minim revisi, dan komunikasinya bener-bener suportif. Highly recommended!\"": ("testi_3", "\"Not only great at writing hooking scripts, but his professionalism is top tier. Good conversions, minimal revisions, and truly supportive communication. Highly recommended!\""),
    "MULAI KOLABORASI": ("footer_headline", "START COLLABORATION"),
    "Flappy Chicken Arcade!": ("modal_title", "Flappy Chicken Arcade!")
}

for id_text, (key, en_text) in translations.items():
    # Replace exact string with <... data-i18n="key">...
    # We will use regex to find tags containing the text and inject data-i18n
    pattern = r'(<[^>]+)>(%s)</' % re.escape(id_text)
    html = re.sub(pattern, r'\1 data-i18n="%s">\2</' % key, html)

# Add Language Toggle Button right after body tag
lang_button = '''  <button id="lang-switch" class="lang-switch">ID</button>\n  <!-- GLOBAL CINEMATIC OVERLAYS -->'''
html = html.replace('<!-- GLOBAL CINEMATIC OVERLAYS -->', lang_button)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(html)

js_dict = "const i18n = {\n"
for id_text, (key, en_text) in translations.items():
    js_dict += f'  "{key}": {{ id: `{id_text}`, en: `{en_text}` }},\n'
js_dict += "};\n\n"
js_dict += """
let currentLang = localStorage.getItem('yochef_lang') || 'id';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('yochef_lang', lang);
  document.getElementById('lang-switch').textContent = lang.toUpperCase();
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[key] && i18n[key][lang]) {
      el.innerHTML = i18n[key][lang];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-switch');
  if (btn) {
    btn.addEventListener('click', () => {
      setLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }
  setLanguage(currentLang);
});
"""

with open(js_file, 'r', encoding='utf-8') as f:
    js = f.read()
with open(js_file, 'w', encoding='utf-8') as f:
    f.write(js_dict + js)

print("Applied translations!")
