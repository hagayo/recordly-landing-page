(function () {
  "use strict";

  const translations = {
    he: {
      brand_badge: "Local-first",
      nav_problem: "למה זה שונה",
      nav_features: "יכולות",
      nav_proof: "הוכחה",
      nav_price: "מחיר",
      nav_faq: "שאלות",
      nav_download: "הורדה חינם",
      hero_kicker: "Privacy Mode: ON",
      hero_title: "המקליט שלא מרגל אחרי השיעור שלך.",
      hero_lead: "Recordly עוזרת למורים, יוצרים ומפתחים להקליט מסך, מצלמה ואודיו, לערוך מהר ולייצא סרטון נקי - כשההקלטות נשארות על המחשב שלך, לא בענן שלנו.",
      hero_cta: "הורדה חינם",
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
      compare_full_cta: "לראות השוואה מלאה",
      compare_guide_cta: "מה חשוב לבדוק במקליט מסך",
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
      free_li_5: "אין צורך בכרטיס אשראי",
      free_cta: "הורדה חינם",
      pro_label: "הכי מתאים למורים פעילים",
      pro_desc: "או $45 לשנה. ביטול בכל זמן.",
      pro_li_1: "הקלטות ללא הגבלה",
      pro_li_2: "שימוש מקומי מלא",
      pro_li_3: "כל כלי העריכה",
      pro_li_4: "גישה פעילה עד סוף תקופת החיוב לאחר ביטול",
      pro_cta: "לתוכנית פרו",
      pricing_same_app: "אותה אפליקציה בדיוק. Pro פשוט פותח מגבלות זמן וכמות.",
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
      faq_5_q: "האם צריך להתקין ffmpeg?",
      faq_5_a: "כן. בגרסת הבטא החינמית יש להתקין ffmpeg מראש.",
      faq_6_q: "האם Recordly עובד בלי אינטרנט?",
      faq_6_a: "כן. ההקלטה והעריכה עובדות מקומית, כך שאפשר לנתק Wi-Fi ולבדוק.",
      faq_7_q: "האם יש תמיכה באודיו מערכת?",
      faq_7_a: "כן.",
      faq_8_q: "האם יש תמיכה במיקרופון ובמצלמה?",
      faq_8_a: "כן.",
      faq_9_q: "האם אפשר לייצא MP4?",
      faq_9_a: "כן.",
      final_label: "Record once. Explain forever.",
      final_title: "המסך שלך כבר מסביר. עכשיו תן לו להיראות מקצועי.",
      final_cta: "הורדה חינם",
      final_contact: "לדבר איתנו",
      legal_updated: "עודכן לאחרונה: אפריל 2026",
      legal_subtitle_contact:  "אנחנו כאן כדי לעזור. שלח לנו שאלות, משוב, בקשות החזר או דיווחי באגים.",
      legal_subtitle_cookie: "שימוש מינימלי ומכבד פרטיות",
      contact_name: "שם מלא",
      contact_email: "כתובת אימייל",
      contact_category: "סוג הפנייה",
      contact_category_placeholder: "בחר קטגוריה",
      contact_category_support: "תמיכה",
      contact_category_bug: "דיווח על תקלה",
      contact_category_billing: "חיובים ותשלומים",
      contact_category_feature_request: "בקשת פיצ׳ר",
      contact_category_partnership: "שיתוף פעולה",
      contact_category_general: "שאלה כללית",
      contact_subject: "נושא",
      contact_message: "הודעה מפורטת",
      contact_submit: "שלח הודעה",
      nav_home: "בית",
      nav_demo: "Demo",
      nav_contact: "צרו קשר",
      how_to_title: "איך מתחילים עם Recordly",
      how_to_subtitle: "5 שלבים קצרים להתחלת הקלטה עם Recordly.",
      how_to_step_1: "הורד והתקן את Recordly",
      how_to_step_2: "פתח את האפליקציה",
      how_to_step_3: "בחר מסך, מיקרופון, אודיו מערכת ומצלמה",
      how_to_step_4: "לחץ Record",
      how_to_step_5: "ייצא את הסרטון שלך",
      how_to_note: "צילומי מסך ומדריך מלא יעלו בקרוב.",
      download_page_label: "Recordly Beta",
      download_page_title: "הורדת Recordly",
      download_page_subtitle: "גרסת הבטא זמינה כרגע ל-Windows. אחרי ההורדה נעביר אותך למדריך התחלה קצר.",
      download_windows_title: "Recordly ל-Windows",
      download_windows_meta: "Beta v0.1.0 · Windows בלבד · גודל קובץ: לעדכן לפני העלייה לאוויר",
      download_windows_note: "ההקלטות נשארות על המחשב שלך. Recordly לא מעלה את הסרטונים שלך לענן.",
      download_windows_cta: "הורדת Recordly ל-Windows",
      download_after_note: "לאחר תחילת ההורדה נעביר אותך למדריך התחלה קצר.",
      download_mac_title: "Recordly ל-Mac",
      download_mac_meta: "עדיין לא זמין",
      download_mac_note: "תמיכה ב-Mac מתוכננת להמשך. גרסת הבטא הנוכחית מתמקדת ב-Windows.",
      download_mac_cta: "גרסת Mac תגיע בהמשך",
      download_trust_title: "נבנה ליוצרים שרוצים שליטה",
      download_trust_text: "נבנה על ידי חגי און, מרצה AI ומפתח תוכנה, עבור מורים, יוצרים ומפתחים שרוצים להקליט מדריכים מהר בלי להסתבך עם מערכות ענן.",
      download_check_1: "בטא ל-Windows בשלב ראשון",
      download_check_2: "הקלטה ועריכה בגישה local-first",
      download_check_3: "אותה אפליקציה ל-Free ול-Pro",
      thank_you_title: "תודה!",
      thank_you_subtitle: "התשלום התקבל. אפשר להוריד את Recordly ולעבור למדריך ההתחלה.",
      thank_you_how_to_cta: "לעבור למדריך ההתחלה",
      not_found_title: "העמוד לא נמצא",
      not_found_subtitle: "כנראה שהקישור השתנה, הועבר או פשוט יצא להפסקת קפה.",
      not_found_back_home: "חזרה לדף הבית",
      not_found_download: "הורדה חינם",
      not_found_contact: "לפנות לתמיכה",
      footer_cookies: "מדיניות עוגיות",
      footer_contact: "צור קשר",
      footer_copyright: "© 2026 Recordly. Built for people who care about their data.",
      footer_privacy: "מדיניות פרטיות",
      footer_terms: "תנאי שימוש",
      footer_refunds: "מדיניות החזרים",
      download_note: "הורדה חינם · אין צורך בכרטיס אשראי",
      guide_label: "מדריך בחירה",
      guide_title: "מה חשוב לבדוק לפני שבוחרים מקליט מסך?",
      guide_subtitle: "מקליט מסך טוב הוא לא רק כפתור Record. הוא צריך לשמור על הפרטיות שלך, לקצר את העבודה, ולהוציא סרטון ברור בלי להפוך כל הקלטה לפרויקט.",
      guide_intro_title: "הכלי הנכון מרגיש קטן בזמן העבודה וגדול בתוצאה.",
      guide_intro_text: "כשאתה מקליט שיעור, דמו, באג או הדרכה פנימית, אתה לא באמת מחפש עוד תוכנת וידאו. אתה מחפש דרך להסביר מהר, להישאר בשליטה, ולשלוח משהו שנראה מקצועי.",
      guide_1_title: "פרטיות ושליטה בקבצים",
      guide_1_text: "בדוק האם ההקלטות עולות אוטומטית לענן או נשמרות אצלך. לחומרים של תלמידים, לקוחות, קוד או מערכות פנימיות, שליטה מקומית היא יתרון גדול.",
      guide_2_title: "זרימת עבודה קצרה",
      guide_2_text: "הקלטה טובה לא אמורה להפוך לעריכת סרט. חפש כלי שמאפשר להתחיל מהר, לחתוך טעויות ושקטים, ולייצא בלי ללמוד מערכת מורכבת.",
      guide_3_title: "מסך, מיקרופון, אודיו מערכת ומצלמה",
      guide_3_text: "מדריך טוב צריך תמונה ברורה וקול ברור. ודא שהכלי תומך בשילוב המקורות שאתה באמת צריך, בלי טריקים ובלי תוספים מיותרים.",
      guide_4_title: "ביצועים שלא מפריעים להקלטה",
      guide_4_text: "אם המקליט כבד מדי, הוא פוגע בדיוק ברגע שבו אתה צריך מחשב יציב. חשוב לבדוק שהכלי קל, מגיב מהר, ולא תלוי בחיבור ענן כדי לעבוד.",
      guide_5_title: "ייצוא ושיתוף בלי נעילה",
      guide_5_text: "בסוף אתה צריך קובץ שאפשר לשלוח, להעלות או לשמור בארכיון שלך. העדף כלי שמוציא קובץ נקי ולא מכריח אותך להישאר בתוך פלטפורמה אחת.",
      guide_6_title: "מחיר ומגבלות שקופים",
      guide_6_text: "שאל מה באמת מוגבל: זמן הקלטה, מספר סרטונים, איכות ייצוא או אפשרויות עריכה. במודל טוב, אתה מבין מהר מה חינם ומה Pro פותח.",
      guide_recordly_label: "איפה Recordly נכנסת לתמונה?",
      guide_recordly_title: "Recordly נבנתה בדיוק סביב הצ׳קליסט הזה.",
      guide_recordly_text: "הגישה היא local-first, הזרימה מיועדת להסברים קצרים וברורים, וההבדל בין Free ל-Pro הוא פתיחת מגבלות - לא אפליקציה אחרת ולא בלבול מיותר.",
      nav_about: "אודות",
      footer_about: "אודות",
      about_eyebrow: "אודות Recordly",
      about_title: "מקליט מסך שנבנה בשביל מהירות, בהירות ושליטה מלאה",
      about_subtitle: "Recordly עוזר למרצים, יוצרים, מפתחים וצוותים להקליט מדריכים, הדגמות, שיעורים וסרטוני מוצר בלי מערכות ענן כבדות ובלי מורכבות מיותרת.",
      about_primary_cta: "הורדה חינם",
      about_secondary_cta: "איך מתחילים",
      about_why_title: "למה Recordly קיים?",
      about_why_p1: "הרבה מקליטי מסך מנסים להיות הכל בבת אחת: פלטפורמת ענן, עורך וידאו, ספריית צוותים, מערכת שיתוף, כלי אנליטיקה ומכונת שיווק. זה מתאים לחלק מהמשתמשים, אבל לא לכל מי שפשוט רוצה להקליט הסבר ברור עכשיו.",
      about_why_p2: "Recordly נבנה סביב רעיון פשוט יותר: לפתוח את האפליקציה, לבחור מה להקליט, ללחוץ Record, ולצאת עם וידאו ברור שאפשר להשתמש בו מיד.",
      about_card_local_title: "Local-first כברירת מחדל",
      about_card_local_text: "ההקלטות שלך נשארות על המחשב שלך. Recordly לא צריך להעלות את המסך, המיקרופון או המצלמה שלך לענן כדי לעבוד.",
      about_card_fast_title: "זרימת עבודה קצרה",
      about_card_fast_text: "Recordly מתמקד בתהליך הקלטה נקי: בחירת מקורות, התחלת הקלטה, סיום וייצוא. פחות מסכים, פחות חיכוך.",
      about_card_creator_title: "נבנה ליוצרים ומלמדים",
      about_card_creator_text: "מדריכים, שיעורים, סרטוני מוצר, הסברים טכניים והדגמות תוכנה צריכים להיות קלים להפקה. שם Recordly זורח.",
      about_for_title: "למי זה מתאים?",
      about_for_teachers_title: "מרצים ומורים",
      about_for_teachers_text: "להקלטת שיעורים, הסברים קצרים, פתרון תרגילים, הדרכות פנימיות וחומרי קורסים דיגיטליים.",
      about_for_creators_title: "יוצרים ומשווקים",
      about_for_creators_text: "לסרטוני מוצר, הדגמות פיצ׳רים, תוכן לרשתות, הדרכות לקהל וסרטוני מכירה פשוטים.",
      about_for_devs_title: "מפתחים וצוותי מוצר",
      about_for_devs_text: "לתיעוד באגים, הסבר Flow, הדרכת משתמשים, סקירת Pull Request והצגת גרסה חדשה.",
      about_free_title: "Free ו-Pro משתמשים באותה אפליקציה",
      about_free_text: "אין אפליקציה נפרדת למשתמשי Pro. Recordly היא אותה תוכנה עם אותה חוויית שימוש. ההבדל הוא במגבלות: Free נועדה להתחלה, ו-Pro פותחת יותר חופש, אורך וזמינות.",
      about_not_title: "מה Recordly לא מנסה להיות",
      about_not_text: "Recordly לא מנסה להחליף מערכת וידאו ארגונית כבדה או עורך קולנוע מקצועי. היא נבנתה למי שרוצה להקליט תוכן ברור במהירות, עם פחות חיכוך.",
      about_founder_title: "נבנה על ידי מישהו שמקליט, מלמד ומפתח",
      about_founder_text: "Recordly נבנה על ידי חגי און, מרצה AI ומפתח תוכנה, מתוך צורך אמיתי: ליצור מדריכים והסברים במהירות בלי להילחם בכלים כבדים ובלי לוותר על פרטיות ושליטה.",
      about_final_cta: "הורדה חינם",
      about_contact_cta: "יצירת קשר"
    },
    en: {
      brand_badge: "Local-first",
      nav_problem: "Why different",
      nav_features: "Features",
      nav_proof: "Proof",
      nav_price: "Pricing",
      nav_faq: "FAQ",
      nav_download: "Download Free",
      hero_kicker: "Privacy Mode: ON",
      hero_title: "The recorder that doesn’t spy on your lesson.",
      hero_lead: "Recordly helps teachers, creators, and developers record screen, camera, and audio, edit fast, and export clean tutorial videos - while recordings stay on your computer, not in our cloud.",
      hero_cta: "Download Free",
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
      compare_full_cta: "See full comparison",
      compare_guide_cta: "What to look for in a recorder",
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
      free_li_5: "No credit card needed",
      free_cta: "Download Free",
      pro_label: "Best for active teachers",
      pro_desc: "Or $45/year. Cancel anytime.",
      pro_li_1: "Unlimited recordings",
      pro_li_2: "Fully local use",
      pro_li_3: "All editing tools",
      pro_li_4: "Access continues until the end of the billing period after cancellation",
      pro_cta: "Go Pro",
      pricing_same_app: "Same app. Pro simply unlocks the time and usage limits.",
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
      faq_5_q: "Does Recordly require ffmpeg?",
      faq_5_a: "Yes. For the free beta, install ffmpeg before using Recordly.",
      faq_6_q: "Does Recordly work offline?",
      faq_6_a: "Yes. Recording and editing work locally, so you can turn Wi-Fi off and test it.",
      faq_7_q: "Does it support system audio?",
      faq_7_a: "Yes.",
      faq_8_q: "Does it support microphone and camera?",
      faq_8_a: "Yes.",
      faq_9_q: "Does it export MP4?",
      faq_9_a: "Yes.",
      final_label: "Record once. Explain forever.",
      final_title: "Your screen already explains it. Now make it look professional.",
      final_cta: "Download Free",
      final_contact: "Contact us",
      legal_updated: "Last updated: April 2026",
      legal_subtitle_contact: "We are here to help. Contact us for any issue, and we will be happy to assist!",
      legal_subtitle_cookie: "Minimal Privacy-Respecting usage",
      contact_name: "Full Name",
      contact_email: "Email Address",
      contact_category: "Inquiry Type",
      contact_category_placeholder: "Select category",
      contact_category_support: "Support",
      contact_category_bug: "Bug report",
      contact_category_billing: "Billing",
      contact_category_feature_request: "Feature request",
      contact_category_partnership: "Partnership",
      contact_category_general: "General question",
      contact_subject: "Subject",
      contact_message: "Detailed Message",
      contact_submit: "Send Message",
      nav_home: "Home",
      nav_demo: "Demo",
      nav_contact: "Contact",
      how_to_title: "How to start with Recordly",
      how_to_subtitle: "A simple 5-step guide to start recording with Recordly.",
      how_to_step_1: "Download and install Recordly",
      how_to_step_2: "Open the app",
      how_to_step_3: "Choose screen, microphone, system audio, and camera",
      how_to_step_4: "Click Record",
      how_to_step_5: "Export your video",
      how_to_note: "Screenshots and full tutorial coming soon.",
      download_page_label: "Recordly Beta",
      download_page_title: "Download Recordly",
      download_page_subtitle: "The beta is currently available for Windows. After the download starts, we will send you to a short getting started guide.",
      download_windows_title: "Recordly for Windows",
      download_windows_meta: "Beta v0.1.0 · Windows only · File size: update before launch",
      download_windows_note: "Your recordings stay on your computer. Recordly does not upload your videos to the cloud.",
      download_windows_cta: "Download Recordly for Windows",
      download_after_note: "After the download starts, we will send you to a short getting started guide.",
      download_mac_title: "Recordly for Mac",
      download_mac_meta: "Not available yet",
      download_mac_note: "Mac support is planned for later. The current beta is focused on Windows.",
      download_mac_cta: "Mac version coming later",
      download_trust_title: "Built for creators who want control",
      download_trust_text: "Built by Hagay Onn, AI lecturer and software developer, for teachers, creators, and developers who want fast tutorial videos without cloud complexity.",
      download_check_1: "Windows beta first",
      download_check_2: "Local-first recording and editing",
      download_check_3: "Same app for Free and Pro",
      thank_you_title: "Thank you!",
      thank_you_subtitle: "Payment received. You can download Recordly and continue to the getting started guide.",
      thank_you_how_to_cta: "Open the getting started guide",
      not_found_title: "Page not found",
      not_found_subtitle: "The link may have moved, changed, or taken a small coffee break.",
      not_found_back_home: "Back to homepage",
      not_found_download: "Download Free",
      not_found_contact: "Contact support",
      footer_cookies: "Cookie Policy",
      footer_contact: "Contact",
      footer_copyright: "© 2026 Recordly. Built for people who care about their data.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_refunds: "Refund Policy",
      download_note: "Download Free · No credit card needed",
      guide_label: "Buyer guide",
      guide_title: "What should you look for in a screen recorder?",
      guide_subtitle: "A good screen recorder is not just a Record button. It should protect your privacy, shorten your workflow, and produce a clear video without turning every recording into a project.",
      guide_intro_title: "The right tool feels small while you work and big in the result.",
      guide_intro_text: "When you record a lesson, demo, bug report, or internal walkthrough, you are not really looking for another video editor. You want to explain fast, stay in control, and send something that looks professional.",
      guide_1_title: "Privacy and file control",
      guide_1_text: "Check whether recordings are automatically uploaded to the cloud or kept with you. For student material, client work, code, or internal systems, local control is a serious advantage.",
      guide_2_title: "Short workflow",
      guide_2_text: "A good recording should not become a film-editing project. Look for a tool that lets you start fast, cut mistakes and silences, and export without learning a heavy editing system.",
      guide_3_title: "Screen, microphone, system audio, and camera",
      guide_3_text: "A useful tutorial needs clear visuals and clear sound. Make sure the recorder supports the input mix you actually need, without tricks or unnecessary add-ons.",
      guide_4_title: "Performance that stays out of the way",
      guide_4_text: "If the recorder is too heavy, it hurts the exact moment you need a stable machine. Look for a lightweight tool that responds fast and does not depend on a cloud connection to work.",
      guide_5_title: "Export and sharing without lock-in",
      guide_5_text: "At the end, you need a file you can send, upload, or archive. Prefer tools that export clean files instead of forcing every workflow to stay inside one platform.",
      guide_6_title: "Transparent pricing and limits",
      guide_6_text: "Ask what is actually limited: recording length, number of videos, export quality, or editing tools. A good model makes it clear what is free and what Pro unlocks.",
      guide_recordly_label: "Where Recordly fits",
      guide_recordly_title: "Recordly was built around this checklist.",
      guide_recordly_text: "The approach is local-first, the workflow is designed for short clear explanations, and the difference between Free and Pro is unlocking limits - not switching to a different app or adding unnecessary confusion.",
      nav_about: "About",
      footer_about: "About",
      about_eyebrow: "About Recordly",
      about_title: "A screen recorder built for speed, clarity, and full control",
      about_subtitle: "Recordly helps teachers, creators, developers, and teams record tutorials, demos, lessons, and product videos without heavy cloud systems or unnecessary complexity.",
      about_primary_cta: "Download Free",
      about_secondary_cta: "How to start",
      about_why_title: "Why Recordly exists",
      about_why_p1: "Many screen recorders try to be everything at once: a cloud platform, video editor, team library, sharing system, analytics tool, and marketing machine. That works for some users, but not for everyone who simply wants to record a clear explanation now.",
      about_why_p2: "Recordly is built around a simpler idea: open the app, choose what to record, click Record, and leave with a clear video you can use immediately.",
      about_card_local_title: "Local-first by default",
      about_card_local_text: "Your recordings stay on your computer. Recordly does not need to upload your screen, microphone, or camera to the cloud in order to work.",
      about_card_fast_title: "Short workflow",
      about_card_fast_text: "Recordly focuses on a clean recording flow: choose sources, start recording, finish, and export. Fewer screens, less friction.",
      about_card_creator_title: "Built for creators and teachers",
      about_card_creator_text: "Tutorials, lessons, product videos, technical explanations, and software demos should be easy to produce. That is where Recordly shines.",
      about_for_title: "Who is it for?",
      about_for_teachers_title: "Teachers and lecturers",
      about_for_teachers_text: "For recording lessons, quick explanations, exercise walkthroughs, internal training, and digital course material.",
      about_for_creators_title: "Creators and marketers",
      about_for_creators_text: "For product videos, feature demos, social content, audience tutorials, and simple sales videos.",
      about_for_devs_title: "Developers and product teams",
      about_for_devs_text: "For bug reports, flow explanations, user guidance, pull request reviews, and new version walkthroughs.",
      about_free_title: "Free and Pro use the same app",
      about_free_text: "There is no separate app for Pro users. Recordly is the same software with the same experience. The difference is in the limits: Free is built for starting out, while Pro unlocks more freedom, duration, and availability.",
      about_not_title: "What Recordly is not trying to be",
      about_not_text: "Recordly is not trying to replace a heavy enterprise video platform or a professional cinematic editor. It is built for people who want to record clear content quickly, with less friction.",
      about_founder_title: "Built by someone who records, teaches, and develops",
      about_founder_text: "Recordly is built by Hagay Onn, AI lecturer and software developer, from a real need: creating tutorials and explanations quickly without fighting heavy tools or giving up privacy and control.",
      about_final_cta: "Download Free",
      about_contact_cta: "Contact us"      
    }
  };

  const storage = {
    get(key) {
      try { return localStorage.getItem(key); } catch (_) { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch (_) { }
    }
  };

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = themeToggle ? themeToggle.querySelector("span") : null;
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langShort = document.querySelector("[data-lang-short]");

  function getInitialTheme() {
    const savedTheme = storage.get("recordly-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  function getInitialLang() {
    const savedLang = storage.get("recordly-lang");
    if (savedLang === "he" || savedLang === "en") return savedLang;
    const pageLang = document.documentElement.getAttribute("data-lang") || document.documentElement.getAttribute("lang");
    if (pageLang === "he" || pageLang === "en") return pageLang;
    const browserLang = (navigator.language || navigator.userLanguage || "he").toLowerCase();
    return browserLang.startsWith("he") ? "he" : "en";
  }

  function setTheme(theme) {
    const normalizedTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", normalizedTheme);
    storage.set("recordly-theme", normalizedTheme);
    if (themeIcon) themeIcon.textContent = normalizedTheme === "dark" ? "☾" : "☀";
  }

  function setLanguage(lang) {
    const normalizedLang = lang === "en" ? "en" : "he";
    const dictionary = translations[normalizedLang] || translations.he || {};

    document.documentElement.setAttribute("lang", normalizedLang);
    document.documentElement.setAttribute("dir", normalizedLang === "he" ? "rtl" : "ltr");
    document.documentElement.setAttribute("data-lang", normalizedLang);
    storage.set("recordly-lang", normalizedLang);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dictionary, key)) {
        node.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-lang-content]").forEach((node) => {
      const shouldShow = node.getAttribute("data-lang-content") === normalizedLang;
      node.hidden = !shouldShow;
    });

    if (langShort) langShort.textContent = normalizedLang === "he" ? "EN" : "עב";
    if (langToggle) {
      langToggle.setAttribute("aria-label", normalizedLang === "he" ? "Switch to English" : "עבור לעברית");
      langToggle.setAttribute("title", normalizedLang === "he" ? "Switch to English" : "עבור לעברית");
    }
  }

  function setupPointerLight() {
    const light = document.querySelector(".pointer-light");
    if (!light || !window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    window.addEventListener("pointermove", (event) => {
      light.style.left = `${event.clientX}px`;
      light.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  function setupRevealAnimations() {
    const revealNodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    revealNodes.forEach((el) => observer.observe(el));
  }

  function setupTiltCards() {
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    document.querySelectorAll("[data-tilt]").forEach((card) => {
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
  }

  function setupMagneticButtons() {
    if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
    document.querySelectorAll(".magnetic").forEach((el) => {
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
  }

  function setupContactForm() {
    // const endpoint = "https://recordly.ailoveu.art/contact";
    const endpoint = "https://recordly.ailoveu.art/api/contact";
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const status = document.getElementById("contact-status");
    const submit = document.getElementById("contact-submit") || form.querySelector("button[type='submit']");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      setContactStatus(status, contactMessage("sending"), "loading");
      setContactSubmitting(submit, true);

      try {
        const formData = new FormData(form);
        const token = getTurnstileToken();
        if (!token) throw new Error(contactMessage("missingVerification"));

        const category = cleanFormValue(formData.get("category"));
        const rawMessage = cleanFormValue(formData.get("message"));
        const payload = {
          category,
          name: cleanFormValue(formData.get("name")),
          email: cleanFormValue(formData.get("email")),
          subject: cleanFormValue(formData.get("subject")) || "Recordly contact request",
          message: rawMessage,
          company: cleanFormValue(formData.get("company")),
          token,
        };

        validateContactPayload(payload, category);

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        let result = {};
        try { result = await response.json(); } catch (_) { result = {}; }

        if (!response.ok) {
          if (response.status === 429) {
            const retryAfter = result.retryAfter || 60;
            throw new Error(contactMessage("rateLimited", retryAfter));
          }
          throw new Error(result.error || contactMessage("failed"));
        }

        form.reset();
        resetTurnstile();
        setContactStatus(status, contactMessage("success"), "success");
      } catch (error) {
        setContactStatus(status, error.message || contactMessage("failed"), "error");
        resetTurnstile();
      } finally {
        setContactSubmitting(submit, false);
      }
    });
  }

  function cleanFormValue(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function getTurnstileToken() {
    if (!window.turnstile) return "";
    return window.turnstile.getResponse() || "";
  }

  function resetTurnstile() {
    if (window.turnstile) window.turnstile.reset();
  }

  function validateContactPayload(payload, category) {
    const allowedCategories = new Set([
      "support",
      "bug",
      "billing",
      "feature_request",
      "partnership",
      "general",
    ]);

    if (!payload.name) throw new Error(contactMessage("missingName"));
    if (!payload.email || !isValidEmail(payload.email)) throw new Error(contactMessage("invalidEmail"));
    if (!category || !allowedCategories.has(category)) throw new Error(contactMessage("missingCategory"));
    if (!payload.subject) throw new Error(contactMessage("missingSubject"));
    if (!payload.message) throw new Error(contactMessage("missingMessage"));
    if (payload.message.length > 5000) throw new Error(contactMessage("messageTooLong"));
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setContactStatus(status, message, type) {
    if (!status) return;
    status.textContent = message;
    status.classList.remove("is-success", "is-error", "is-loading");
    if (type) status.classList.add(`is-${type}`);
  }

  function setContactSubmitting(submit, isSubmitting) {
    if (!submit) return;
    submit.disabled = isSubmitting;
    submit.textContent = isSubmitting ? contactMessage("sendingButton") : contactMessage("submitButton");
  }

  function contactMessage(key, value) {
    const lang = document.documentElement.getAttribute("data-lang") === "en" ? "en" : "he";
    const messages = {
      he: {
        sending: "שולח את ההודעה...",
        sendingButton: "שולח...",
        submitButton: "שלח הודעה",
        success: "ההודעה נשלחה בהצלחה. תודה!",
        failed: "לא הצלחנו לשלוח את ההודעה. נסה שוב בעוד רגע.",
        missingVerification: "יש להשלים את אימות האבטחה.",
        rateLimited: `יותר מדי ניסיונות. נסה שוב בעוד ${value} שניות.`,
        missingName: "נא למלא שם מלא.",
        invalidEmail: "נא למלא כתובת אימייל תקינה.",
        missingCategory: "נא לבחור סוג פנייה.",
        missingSubject: "נא למלא נושא.",
        missingMessage: "נא למלא הודעה.",
        messageTooLong: "ההודעה ארוכה מדי.",
      },
      en: {
        sending: "Sending your message...",
        sendingButton: "Sending...",
        submitButton: "Send Message",
        success: "Message sent successfully. Thank you!",
        failed: "Could not send the message. Please try again in a moment.",
        missingVerification: "Please complete the security verification.",
        rateLimited: `Too many attempts. Try again in ${value} seconds.`,
        missingName: "Please enter your full name.",
        invalidEmail: "Please enter a valid email address.",
        missingCategory: "Please choose an inquiry type.",
        missingSubject: "Please enter a subject.",
        missingMessage: "Please enter your message.",
        messageTooLong: "Message is too long.",
      },
    };
    return messages[lang][key] || messages.en[key] || "";
  }

  const SCRIPT_BASE_URL = new URL(".", document.currentScript ? document.currentScript.src : window.location.href);
  const RECORDLY_INSTALLER_DOWNLOAD_URL = new URL("assets/recordly-installer.exe", SCRIPT_BASE_URL).href;
  const RECORDLY_AFTER_DOWNLOAD_URL = new URL("how-to.html", SCRIPT_BASE_URL).href;
  const DOWNLOAD_REDIRECT_DELAY_MS = 900;

  function trackRecordlyInstallerDownloadClick() {
    console.info("Recordly installer download clicked:", RECORDLY_INSTALLER_DOWNLOAD_URL);
    if (typeof window.plausible === "function") {
      window.plausible("Recordly Installer Download Click");
    }
  }

  function triggerRecordlyInstallerDownload() {
    const temporaryDownloadLink = document.createElement("a");
    temporaryDownloadLink.href = RECORDLY_INSTALLER_DOWNLOAD_URL;
    temporaryDownloadLink.download = "recordly-installer.exe";
    temporaryDownloadLink.rel = "noopener";
    temporaryDownloadLink.style.display = "none";

    document.body.appendChild(temporaryDownloadLink);
    temporaryDownloadLink.click();
    temporaryDownloadLink.remove();
  }

  function redirectToRecordlyHowToPage() {
    window.setTimeout(() => {
      window.location.href = RECORDLY_AFTER_DOWNLOAD_URL;
    }, DOWNLOAD_REDIRECT_DELAY_MS);
  }

  function handleWindowsInstallerDownloadClick(event) {
    event.preventDefault();
    trackRecordlyInstallerDownloadClick();
    triggerRecordlyInstallerDownload();
    redirectToRecordlyHowToPage();
  }

  function setupWindowsInstallerDownloadCtas() {
    document.querySelectorAll(".js-windows-installer-download-cta").forEach((button) => {
      button.addEventListener("click", handleWindowsInstallerDownloadClick);
    });
  }

  function setupCtaTracking() {
    document.querySelectorAll("[data-checkout-cta]").forEach((link) => {
      link.addEventListener("click", () => {
        console.info("Recordly Pro checkout CTA clicked:", link.href);
        if (typeof window.plausible === "function") {
          window.plausible("Recordly Pro Checkout Click");
        }
      });
    });
  }

  setTheme(getInitialTheme());
  setLanguage(getInitialLang());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-lang") || "he";
      setLanguage(current === "he" ? "en" : "he");
    });
  }

  setupPointerLight();
  setupRevealAnimations();
  setupTiltCards();
  setupMagneticButtons();
  setupContactForm();
  

function setupDebugReferrer() {
  const referrerElement = document.getElementById("debug-referrer");

  if (!referrerElement) {
    return;
  }

  const referrer = document.referrer && document.referrer.trim();
  referrerElement.textContent = referrer
    ? `Referrer: ${referrer}`
    : "Referrer: direct / unknown";
}

setupWindowsInstallerDownloadCtas();
setupDebugReferrer();
  setupCtaTracking();

  // contact page code for resend and cloudflare worker
//    const CONTACT_ENDPOINT = "https://recordly.ailoveu.art/contact";
//    const contactForm = document.getElementById("recordly-contact-form");
//    const contactStatus = document.getElementById("contact-status");
//    const contactSubmit = document.getElementById("contact-submit");

//    if (contactForm) { contactForm.addEventListener("submit", handleContactSubmit); }
//    async function handleContactSubmit(event) {
//      event.preventDefault();
//      setContactStatus("Sending your message...", "loading");
//      setContactSubmitting(true);
//      try {
//        const formData = new FormData(contactForm);
//        const token = getTurnstileToken();
//        if (!token) { throw new Error("Please complete the verification box."); }
//        const payload = {
//          name: String(formData.get("name") || "").trim(),
//          email: String(formData.get("email") || "").trim(),
//          subject: String(formData.get("subject") || "").trim(),
//          message: String(formData.get("message") || "").trim(),
//          company: String(formData.get("company") || "").trim(),
//          token,
//        };
//        validateContactPayload(payload);

//        const response = await fetch(CONTACT_ENDPOINT, {
//          method: "POST",
//          headers: { "Content-Type": "application/json", },
//          body: JSON.stringify(payload),
//       });

//        let result = {};
//        try {
//          result = await response.json();
//        } catch {
//          result = {};
//        }

//        if (!response.ok) {
//          if (response.status === 429) {
//            const retryAfter = result.retryAfter || "a minute";
//            throw new Error(`Too many attempts. Try again in ${retryAfter} seconds.`);
//          }

//          throw new Error(result.error || "Could not send the message.");
//        }
//        contactForm.reset();
//        resetTurnstile();

//        setContactStatus("Message sent successfully. Thank you!", "success");
//      } catch (error) {
//        setContactStatus(error.message || "Something went wrong. Please try again.", "error");
//        resetTurnstile();
//      } finally {
//        setContactSubmitting(false);
//      }
//    }

//    function getTurnstileToken() {
//      if (!window.turnstile) { return ""; }
//      return window.turnstile.getResponse();
//    }

//    function resetTurnstile() {
//      if (window.turnstile) {
//        window.turnstile.reset();
//      }
//    }

//    function validateContactPayload(payload) {
//      if (!payload.name) {
//        throw new Error("Please enter your name.");
//      }

//      if (!payload.email || !isValidEmail(payload.email)) {
//        throw new Error("Please enter a valid email address.");
//      }

//      if (!payload.message) {
//        throw new Error("Please enter your message.");
//      }

//      if (payload.message.length > 5000) {
//        throw new Error("Message is too long.");
//      }
//    }

//    function isValidEmail(email) {
//      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//    }

//    function setContactStatus(message, type) {
//      if (!contactStatus) { return; }
//      contactStatus.textContent = message;
//      contactStatus.classList.remove("is-success", "is-error", "is-loading");
//      if (type) { contactStatus.classList.add(`is-${type}`); }
//    }

//    function setContactSubmitting(isSubmitting) {
//      if (!contactSubmit) { return; }
//      contactSubmit.disabled = isSubmitting;
//      contactSubmit.textContent = isSubmitting ? "Sending..." : "Send issue";
//    }
}());

