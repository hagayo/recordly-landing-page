(function () {
  const translations = {
    he: {
      brand_badge: "Local-first",
      nav_problem: "למה זה שונה",
      nav_features: "יכולות",
      nav_proof: "הוכחה",
      nav_price: "מחיר",
      nav_faq: "שאלות",
      nav_download: "להתחיל בחינם",
      hero_kicker: "Privacy Mode: ON",
      hero_title: "המקליט שלא מרגל אחרי השיעור שלך.",
      hero_lead: "Recordly עוזרת למורים, יוצרים ומפתחים להקליט מסך, מצלמה ואודיו, לערוך מהר ולייצא סרטון נקי - כשההקלטות נשארות על המחשב שלך, לא בענן שלנו.",
      hero_cta: "להתחיל עם 5 הקלטות חינם",
      hero_secondary: "לראות למה זה בטוח",
      proof_local: "100% עריכה מקומית",
      proof_upload: "0 העלאות הקלטות",
      proof_price: "Pro ב־$5 לחודש",
      screen_topic: "שיעור: שברים ב־4 דקות",
      tag_cut: "חיתוך שקטים",
      tag_private: "בלי ענן",
      tag_export: "ייצוא נקי",
      strip_1: "מורים",
      strip_2: "קורסים",
      strip_3: "דמו מוצר",
      strip_4: "דיווחי באגים",
      strip_5: "מדריכי צוות",
      problem_label: "הבעיה",
      problem_title: "רוב כלי ההקלטה מבקשים ממך לבחור: נוחות או שליטה.",
      problem_1_title: "הענן מקבל את החומר שלך",
      problem_1_text: "שיעורים, מסכים פנימיים, קבצים, שמות תלמידים או לקוחות - לא תמיד מתאים להעלות את זה החוצה.",
      problem_2_title: "עריכה הופכת לפרויקט",
      problem_2_text: "רצית סרטון הסבר קצר. פתאום אתה בעורך וידאו כאילו אתה מפיק טריילר לנטפליקס.",
      problem_3_title: "הסרטון ארוך מדי",
      problem_3_text: "ההתחלה מבולגנת, יש שקטים, טעויות קטנות, וכולם רואים את החיפוש אחר הכפתור הנכון.",
      solution_label: "הפתרון",
      solution_title: "מקליטים. מתקנים. שולחים. בלי דרמה.",
      feature_1_title: "מסך + מצלמה + קול",
      feature_1_text: "הקלטת מדריך מלאה עם presenter bubble, אודיו ברור ומסך חד.",
      feature_2_title: "חיתוך מהיר",
      feature_2_text: "מורידים שקטים, טעויות ופתיחות מביכות בלי ללמוד תוכנת עריכה.",
      feature_3_title: "הדגשות חכמות",
      feature_3_text: "מסמנים רגעים חשובים כדי שהצופה יבין מהר איפה להסתכל.",
      feature_4_title: "פרטיות כברירת מחדל",
      feature_4_text: "ההקלטות נשארות מקומית. אנחנו יודעים רק תוכנית מנוי וכמות הקלטות חודשית.",
      feature_5_title: "ייצוא נקי לשיתוף",
      feature_5_text: "סרטון מסודר שאפשר לשלוח לתלמידים, לקוח, צוות או קהילה.",
      proof_label: "הוכחת פרטיות",
      proof_title: "לא מאמינים לנו? נתקו את האינטרנט.",
      proof_text: "Recordly נבנתה לעבודה מקומית. ההקלטה והעריכה לא צריכות את הענן שלנו, ולכן תוכן הסרטונים שלך לא נשלח אלינו.",
      compare_label: "השוואה",
      compare_title: "למה לא פשוט להשתמש בכלי ענן?",
      compare_cloud_title: "כלי ענן רגילים",
      compare_cloud_1: "מעלים סרטונים לשרת",
      compare_cloud_2: "דורשים חיבור יציב",
      compare_cloud_3: "פחות מתאים לחומרים רגישים",
      compare_recordly_title: "Recordly",
      compare_recordly_1: "הקלטות נשמרות אצלך",
      compare_recordly_2: "עובד בגישה local-first",
      compare_recordly_3: "קל להסביר, לערוך ולשלוח",
      audience_label: "למי זה מתאים",
      audience_title: "כל מי שמסביר משהו על המסך.",
      aud_1_title: "מורים ומרצים",
      aud_1_text: "שיעורים מוקלטים, פתרון תרגילים, תגבור והכנה למבחנים.",
      aud_2_title: "מפתחים וצוותי מוצר",
      aud_2_text: "דמו, דיווח באג, walkthrough ותיעוד תהליכים פנימיים.",
      aud_3_title: "יוצרים וקורסים",
      aud_3_text: "מדריכים, סרטוני מוצר, שיעורי אונליין ותוכן לקהילה.",
      pricing_label: "מחיר",
      pricing_title: "חינם להתחלה. Pro כשאתה מקליט ברצינות.",
      free_title: "חינם",
      pro_title: "פרו",
      price_month: "/ חודש",
      free_desc: "מתאים לניסיון אמיתי, לא רק לדמו.",
      free_li_1: "5 הקלטות בחודש",
      free_li_2: "הקלטה ועריכה מקומית",
      free_li_3: "ללא העלאת תוכן לשרת",
      free_li_4: "הקלטות ללא הגבלה",
      free_cta: "להורדה חינם",
      pro_label: "הכי מתאים למורים פעילים",
      pro_desc: "או $45 לשנה. ביטול בכל זמן.",
      pro_li_1: "הקלטות ללא הגבלה",
      pro_li_2: "שימוש מקומי מלא",
      pro_li_3: "כל כלי העריכה",
      pro_li_4: "גישה פעילה עד סוף תקופת החיוב לאחר ביטול",
      pro_cta: "לקבל Pro",
      pricing_note: "החזר שנתי מחושב לפי החודשים שנוצלו, כפי שמפורט במדיניות ההחזרים.",
      faq_label: "שאלות",
      faq_title: "החששות הנכונים, בלי תשובות מתחמקות.",
      faq_1_q: "הסרטונים שלי עולים לשרת?",
      faq_1_a: "לא. תוכן ההקלטות נשמר מקומית בלבד ולא נשלח לשרתים שלנו.",
      faq_2_q: "איזה מידע אתם כן שומרים?",
      faq_2_a: "רק את תוכנית התשלום שלך ואת מספר ההקלטות החודשי לצורך מגבלת Free ותפעול Pro.",
      faq_3_q: "אפשר לבטל Pro?",
      faq_3_a: "כן. אפשר לבטל בכל זמן, והגישה נשארת פעילה עד סוף תקופת החיוב הנוכחית.",
      faq_4_q: "זה מתאים רק למורים?",
      faq_4_a: "לא. זה נבנה סביב מורים, אבל מתאים גם ליוצרים, מפתחים, צוותי תמיכה וגיימרים.",
      final_label: "Record once. Explain forever.",
      final_title: "המסך שלך כבר מסביר. עכשיו תן לו להיראות מקצועי.",
      final_cta: "להתחיל בחינם",
      final_contact: "לדבר איתנו",
      footer_copyright: "© 2026 Recordly. Built for people who care about their data.",
      footer_privacy: "מדיניות פרטיות",
      footer_terms: "תנאי שימוש",
      footer_refunds: "מדיניות החזרים"
    },
    en: {
      brand_badge: "Local-first",
      nav_problem: "Why different",
      nav_features: "Features",
      nav_proof: "Proof",
      nav_price: "Pricing",
      nav_faq: "FAQ",
      nav_download: "Start free",
      hero_kicker: "Privacy Mode: ON",
      hero_title: "The recorder that doesn’t spy on your lesson.",
      hero_lead: "Recordly helps teachers, creators, and developers record screen, camera, and audio, edit fast, and export clean tutorial videos - while recordings stay on your computer, not in our cloud.",
      hero_cta: "Start with 5 free recordings",
      hero_secondary: "See why it’s private",
      proof_local: "100% local editing",
      proof_upload: "0 recording uploads",
      proof_price: "$5/month Pro",
      screen_topic: "Lesson: Fractions in 4 minutes",
      tag_cut: "Cut silence",
      tag_private: "No cloud",
      tag_export: "Export clean",
      strip_1: "Teachers",
      strip_2: "Courses",
      strip_3: "Product demos",
      strip_4: "Bug reports",
      strip_5: "Team tutorials",
      problem_label: "The problem",
      problem_title: "Most recording tools make you choose: convenience or control.",
      problem_1_title: "The cloud gets your material",
      problem_1_text: "Lessons, internal screens, files, student names, client work - not everything belongs on someone else’s server.",
      problem_2_title: "Editing becomes a project",
      problem_2_text: "You wanted a short explanation. Suddenly you are editing like you are producing a Netflix trailer.",
      problem_3_title: "The video gets too long",
      problem_3_text: "The opening is messy, there are silences, tiny mistakes, and everyone sees you searching for the right button.",
      solution_label: "The solution",
      solution_title: "Record. Fix. Send. No drama.",
      feature_1_title: "Screen + camera + voice",
      feature_1_text: "A complete tutorial recording with presenter bubble, clear audio, and sharp screen capture.",
      feature_2_title: "Fast trimming",
      feature_2_text: "Remove silences, mistakes, and awkward starts without learning a full video editor.",
      feature_3_title: "Smart highlights",
      feature_3_text: "Mark important moments so viewers instantly know where to look.",
      feature_4_title: "Privacy by default",
      feature_4_text: "Recordings stay local. We only know your plan and monthly recording count.",
      feature_5_title: "Clean export for sharing",
      feature_5_text: "A polished video you can send to students, clients, teams, or your community.",
      proof_label: "Privacy proof",
      proof_title: "Don’t believe us? Turn off the internet.",
      proof_text: "Recordly is built local-first. Recording and editing do not need our cloud, so your video content is not sent to us.",
      compare_label: "Comparison",
      compare_title: "Why not just use a cloud tool?",
      compare_cloud_title: "Typical cloud recorders",
      compare_cloud_1: "Upload videos to a server",
      compare_cloud_2: "Need a stable connection",
      compare_cloud_3: "Less suitable for sensitive material",
      compare_recordly_title: "Recordly",
      compare_recordly_1: "Recordings stay with you",
      compare_recordly_2: "Built with a local-first approach",
      compare_recordly_3: "Easy to explain, edit, and send",
      audience_label: "Who it’s for",
      audience_title: "Anyone who explains something on screen.",
      aud_1_title: "Teachers and lecturers",
      aud_1_text: "Recorded lessons, exercise solutions, tutoring, and exam prep.",
      aud_2_title: "Developers and product teams",
      aud_2_text: "Demos, bug reports, walkthroughs, and internal process documentation.",
      aud_3_title: "Creators and courses",
      aud_3_text: "Tutorials, product videos, online lessons, and community content.",
      pricing_label: "Pricing",
      pricing_title: "Free to start. Pro when you record seriously.",
      free_title: "Free",
      pro_title: "Pro",
      price_month: "/ month",
      free_desc: "A real trial, not just a demo.",
      free_li_1: "5 recordings per month",
      free_li_2: "Local recording and editing",
      free_li_3: "No content upload to our server",
      free_li_4: "Unlimited recordings",
      free_cta: "Download free",
      pro_label: "Best for active teachers",
      pro_desc: "Or $45/year. Cancel anytime.",
      pro_li_1: "Unlimited recordings",
      pro_li_2: "Fully local use",
      pro_li_3: "All editing tools",
      pro_li_4: "Access continues until the end of the billing period after cancellation",
      pro_cta: "Get Pro",
      pricing_note: "Annual refunds are calculated by months used, as detailed in the Refund Policy.",
      faq_label: "FAQ",
      faq_title: "The right concerns, answered directly.",
      faq_1_q: "Are my videos uploaded to a server?",
      faq_1_a: "No. Recording content stays local only and is not sent to our servers.",
      faq_2_q: "What information do you store?",
      faq_2_a: "Only your payment plan and monthly recording count, so we can operate the Free limit and Pro access.",
      faq_3_q: "Can I cancel Pro?",
      faq_3_a: "Yes. You can cancel anytime, and access remains active until the end of the current billing period.",
      faq_4_q: "Is it only for teachers?",
      faq_4_a: "No. It is built around teachers, but also works for creators, developers, support teams, and gamers.",
      final_label: "Record once. Explain forever.",
      final_title: "Your screen already explains it. Now make it look professional.",
      final_cta: "Start free",
      final_contact: "Contact us",
      footer_copyright: "© 2026 Recordly. Built for people who care about their data.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_refunds: "Refund Policy"
    }
  };

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = themeToggle ? themeToggle.querySelector("span") : null;
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langShort = document.querySelector("[data-lang-short]");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("recordly-theme", theme);
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☾" : "☀";
  }

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.he;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem("recordly-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dictionary[key]) node.textContent = dictionary[key];
    });

    if (langShort) langShort.textContent = lang === "he" ? "EN" : "עב";
    if (langToggle) {
      langToggle.setAttribute("aria-label", lang === "he" ? "Switch to English" : "עבור לעברית");
      langToggle.setAttribute("title", lang === "he" ? "Switch to English" : "עבור לעברית");
    }
  }

  if (themeToggle) {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (langToggle) {
    setLanguage(document.documentElement.getAttribute("data-lang") || "he");
    langToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-lang") || "he";
      setLanguage(current === "he" ? "en" : "he");
    });
  }

  const light = document.querySelector(".pointer-light");
  if (light && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (event) => {
      light.style.left = event.clientX + "px";
      light.style.top = event.clientY + "px";
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotate(${-1 + x * 1.4}deg) rotateX(${-y * 4}deg) rotateY(${x * 5}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "rotate(-1deg)";
    });
  });

  document.querySelectorAll(".magnetic").forEach((el) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });

    el.addEventListener("pointerleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}());
