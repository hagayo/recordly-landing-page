(function () {
  "use strict";

  const translations = {
    he: {
      brand_badge: "תמיד מקומי",
      // nav_problem: "למה זה שונה",
      // nav_proof: "הוכחה",
      // nav_pricing: "מחירים",
      nav_about: "עלינו",
      nav_features: "יכולות",
      nav_price: "תוכניות",
      nav_faq: "שאלות",
      nav_download: "הורדה חינם",
      nav_contact: "יצירת קשר",
      nav_compare: "השוואה",
      go_back: "חזרה",
      hero_kicker: "מוד פרטיות",
      hero_title: "המקליט שלא מרגל אחרי השיעור שלך.",
      hero_lead: "Recordly עוזרת למורים, יוצרים ומפתחים להקליט מסך, מצלמה ואודיו, לערוך מהר ולייצא סרטון נקי - כשההקלטות נשארות על המחשב שלך, לא בענן שלנו.",
      hero_secondary: "לראות למה זה בטוח",
      proof_local: "100% עריכה מקומית",
      proof_upload: "0 העלאות הקלטות",
      proof_price: "Pro ב־$5 לחודש",
      screen_topic: "שיעור: נגזרות ב-3 דקות!",
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
      feature_1_title: "מסך + מצלמה + קול + מיקרופון",
      feature_1_text: "הקלטת מדריך מלאה עם בועת מציג, אודיו ברור ומסך חד.",
      feature_2_title: "חיתוך מהיר",
      feature_2_text: "מורידים שקטים, טעויות ופתיחות מביכות בלי ללמוד תוכנת עריכה.",
      feature_3_title: "הדגשות חכמות",
      feature_3_text: "מסמנים רגעים חשובים כדי שהצופה יבין מהר איפה להסתכל.",
      feature_4_title: "פרטיות כברירת מחדל",
      feature_4_text: "ההקלטות נשארות מקומית. אנחנו יודעים רק תוכנית מנוי וכמות הקלטות חודשית.",
      feature_5_title: "ייצוא נקי לשיתוף",
      feature_5_text: "סרטון מסודר שאפשר לשלוח לתלמידים, לקוח, צוות או קהילה.",
      feature_6_title: "פלטפורמות זמינות",
      feature_6_text: "כרגע בגרסת ווינדוס בלבד, בקרוב גם גרסת המאק",
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
      compare_recordly_2: "עובד בגישה מקומית ומאובטחת",
      compare_recordly_3: "קל להסביר, לערוך ולשלוח",
      compare_full_cta: "לראות השוואה מלאה",
      compare_guide_cta: "מה חשוב לבדוק במקליט מסך",
      best_recorders_cta: "3 מקליטי המסך הטובים ב-2026",
      local_first_article_cta: "מה זה Local-first?",
      audience_label: "למי זה מתאים",
      audience_title: "כל מי שמסביר משהו על המסך.",
      aud_1_title: "מורים ומרצים",
      aud_1_text: "שיעורים מוקלטים, פתרון תרגילים, תגבור והכנה למבחנים.",
      aud_2_title: "מפתחים וצוותי מוצר",
      aud_2_text: "דמו, דיווח באג, מדריכים ותיעוד תהליכים פנימיים.",
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
      faq_7_a: "כן. רקורדלי תוכננה עבור הקלטות מלאות עם סאונד של המערכת בערוץ אחד וסאונד של המרצה או המורה בערוץ נפרד. ניתן לערוך את גובה הסאונד בכל ערוץ בנפרד.",
      faq_8_q: "האם יש תמיכה במיקרופון ובמצלמה?",
      faq_8_a: "כמובן! ניתן לבחור במצלמה ומיקרופון מבין כל היחידות שמחוברות למחשב.",
      faq_9_q: "האם אפשר לייצא MP4?",
      faq_9_a: "בטח! כל המטרה היא ייצור סרטונים לשיתוף או העלאה לפלטפורמות ללימוד. אצלנו תמיד אפשר לייצא במספר פורמטים, כי התוכן הוא רק שלך!",
      faq_10_q: "האם רקורדלי מתאימה להקלטות לימוד על תוכנה ופעולות במחשב?",
      faq_10_a: "כן. רקורדלי נבנתה עבור הקלטות של הדרכה על תוכנה או דמוו למוצר דיגיטלית כולל הדרכות לימודיות לשימוש והטמעה במוצר חדש, לדיווח על תקלות עם תיעוד מצולם, או לעבודה על קוד משותף עם מפתחים אחרים.",
      faq_11_q: "האם החינם הוא לתקופה מוגבלת?",
      faq_11_a: "לא! חינם נשאר לתמיד! פרו זה למי שמקליט הרבה או רוצה לעזור לי בתרומה להמשך הפיתוח של עוד פיצרים.",
      faq_12_q: "מה נותן פרו?",
      faq_12_a: "יותר הקלטות חודשיות, והקלטה ארוכה של מעל 5 דקות. מעבר לזה כל הפיצרים פתוחים לשימוש.",
      final_label: "!להקליט פעם אחת, ללמד אלפי אנשים",
      final_title: "המסך שלך כבר מסביר. עכשיו תן לו להיראות מקצועי.",
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
      nav_demo: "דמו",
      nav_contact: "צרו קשר",
      nav_guide: "מדריך בחירה",
      how_to_title: "איך מתחילים עם רקורדלי",
      how_to_subtitle: "5 שלבים קצרים להתחלת הקלטה עם רקורדלי.",
      how_to_step_1: "הורד והתקן את רקורדלי",
      how_to_step_2: "פתח את האפליקציה",
      how_to_step_3: "בחר מסך, מיקרופון, אודיו מערכת ומצלמה",
      how_to_step_4: "לחץ הקלטה",
      how_to_step_5: "ייצא את הסרטון שלך",
      how_to_note: "צילומי מסך ומדריך מלא יעלו בקרוב.",
      download_page_label: "רקורדלי בטא",
      download_page_title: "הורדת רקורדלי",
      download_page_subtitle: "גרסת הבטא זמינה כרגע ל-Windows. אחרי ההורדה נעביר אותך למדריך התחלה קצר.",
      download_windows_title: "רקורדלי לווינדוס",
      download_windows_meta: "Beta v0.1.0 · Windows בלבד · גודל קובץ: לעדכן לפני העלייה לאוויר",
      download_windows_note: "ההקלטות נשארות על המחשב שלך. רקורדלי לא מעלה את הסרטונים שלך לענן.",
      download_windows_cta: "הורדת רקורדלי לווינדוס",
      download_after_note: "לאחר תחילת ההורדה נעביר אותך למדריך התחלה קצר.",
      download_mac_title: "רקורדלי ל-Mac",
      download_mac_meta: "עדיין לא זמין",
      download_mac_note: "תמיכה ב-Mac מתוכננת להמשך. גרסת הבטא הנוכחית מתמקדת ב-Windows.",
      download_mac_cta: "גרסת Mac תגיע בהמשך",
      download_trust_title: "נבנה ליוצרים שרוצים שליטה",
      download_trust_text: "נבנה על ידי חגי און, מרצה AI ומפתח תוכנה, עבור מורים, יוצרים ומפתחים שרוצים להקליט מדריכים מהר בלי להסתבך עם מערכות ענן.",
      download_check_1: "בטא ל-Windows בשלב ראשון",
      download_check_2: "הקלטה ועריכה בגישה local-first",
      download_check_3: "אותה אפליקציה ל-Free ול-Pro",
      download_info_1_title: "What do you get after downloading?",
      download_info_1_text: "A Windows app built for recording screen, microphone, system audio and camera. The goal is to create a clear tutorial video quickly, not send you into another complicated cloud system.",
      download_info_2_title: "Why are there Free and Pro plans?",
      download_info_2_text: "Free lets you start without a credit card and test the workflow. Pro is for people who record seriously and want more freedom in recording count and duration.",
      download_info_3_title: "Important beta note",
      download_info_3_text: "Recordly is currently in beta. Windows may show a download or installation warning, especially before full code signing and download reputation are established.",
      thank_you_title: "תודה!",
      thank_you_subtitle: "התשלום התקבל. אפשר להוריד את Recordly ולעבור למדריך ההתחלה.",
      thank_you_how_to_cta: "לעבור למדריך ההתחלה",
      not_found_title: "העמוד לא נמצא",
      not_found_subtitle: "כנראה שהקישור השתנה, הועבר או פשוט יצא להפסקת קפה.",
      not_found_back_home: "חזרה לדף הבית",
      not_found_contact: "לפנות לתמיכה",
      footer_cookies: "מדיניות עוגיות",
      footer_contact: "צור קשר",
      footer_copyright: "כל הזכויות שמורות",
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
      guide_recordly_label: "איפה רקורדלי נכנסת לתמונה?",
      guide_recordly_title: "רקורדלי נבנתה בדיוק סביב הצ׳קליסט הזה.",
      guide_recordly_text: "הגישה היא local-first, הזרימה מיועדת להסברים קצרים וברורים, וההבדל בין Free ל-Pro הוא פתיחת מגבלות - לא אפליקציה אחרת ולא בלבול מיותר.",
      guide_red_flags_label: "Red flags",
      guide_red_flags_title: "When should you think twice before choosing a screen recorder?",
      guide_red_flag_1: "When the tool requires cloud upload even for private or internal recordings.",
      guide_red_flag_2: "When editing requires learning a heavy system instead of quickly fixing mistakes and silences.",
      guide_red_flag_3: "When the free plan looks good but limits exactly what you need for real work.",
      guide_red_flag_4: "When export or sharing locks you into one platform.",
      about_text: "אודות",
      about_eyebrow: "אודות רקורדלי",
      about_title: "מקליט מסך שנבנה בשביל מהירות, בהירות ושליטה מלאה",
      about_subtitle: "רקורדלי עוזר למרצים, יוצרים, מפתחים וצוותים להקליט מדריכים, הדגמות, שיעורים וסרטוני מוצר בלי מערכות ענן כבדות ובלי מורכבות מיותרת.",
      about_secondary_cta: "איך מתחילים",
      about_why_title: "למה רקורדלי קיים?",
      about_why_p1: "הרבה מקליטי מסך מנסים להיות הכל בבת אחת: פלטפורמת ענן, עורך וידאו, ספריית צוותים, מערכת שיתוף, כלי אנליטיקה ומכונת שיווק. זה מתאים לחלק מהמשתמשים, אבל לא לכל מי שפשוט רוצה להקליט הסבר ברור עכשיו.",
      about_why_p2: "רקורדלי נבנה סביב רעיון פשוט יותר: לפתוח את האפליקציה, לבחור מה להקליט, ללחוץ Record, ולצאת עם וידאו ברור שאפשר להשתמש בו מיד.",
      about_card_local_title: "תמיד לוקאלי ופרטי שלך",
      about_card_local_text: "ההקלטות שלך נשארות על המחשב שלך. רקורדלי לא צריך להעלות את המסך, המיקרופון או המצלמה שלך לענן כדי לעבוד.",
      about_card_fast_title: "זרימת עבודה קצרה",
      about_card_fast_text: "רקורדלי מתמקד בתהליך הקלטה נקי: בחירת מקורות, התחלת הקלטה, סיום וייצוא. פחות מסכים, פחות חיכוך.",
      about_card_creator_title: "נבנה ליוצרים ומלמדים",
      about_card_creator_text: "מדריכים, שיעורים, סרטוני מוצר, הסברים טכניים והדגמות תוכנה צריכים להיות קלים להפקה. שם רקורדלי זורח.",
      about_principle_1_title: "ליצור בקלות",
      about_principle_1_text: "כל החלטה במוצר נמדדת לפי שאלה פשוטה: האם היא עוזרת לכם להגיע מהר יותר מסיבה טובה להקלטה לסרטון מוכן?",
      about_principle_2_title: "יותר שליטה",
      about_principle_2_text: "רקורדלי מעדיפה שליטה מקומית על פני תלות בענן. הקלטות, קבצים ותהליכי עבודה צריכים להישאר בידיים שלכם.",
      about_principle_3_title: "וידיאו מקצועי בלי להסתבך",
      about_principle_3_text: "המטרה היא לא להפוך כל משתמש לעורך וידאו. המטרה היא לעזור לכל מי שמסביר משהו להיראות ולהישמע ברור יותר.",
      about_for_title: "למי זה מתאים?",
      about_for_teachers_title: "מרצים ומורים",
      about_for_teachers_text: "להקלטת שיעורים, הסברים קצרים, פתרון תרגילים, הדרכות פנימיות וחומרי קורסים דיגיטליים.",
      about_for_creators_title: "יוצרים ומשווקים",
      about_for_creators_text: "לסרטוני מוצר, הדגמות פיצ׳רים, תוכן לרשתות, הדרכות לקהל וסרטוני מכירה פשוטים.",
      about_for_devs_title: "מפתחים וצוותי מוצר",
      about_for_devs_text: "לתיעוד באגים, הסבר Flow, הדרכת משתמשים, סקירת Pull Request והצגת גרסה חדשה.",
      about_free_title: "Free ו-Pro משתמשים באותה אפליקציה",
      about_free_text: "אין אפליקציה נפרדת למשתמשי Pro. רקורדלי היא אותה תוכנה עם אותה חוויית שימוש. ההבדל הוא במגבלות: Free נועדה להתחלה, ו-Pro פותחת יותר חופש, אורך וזמינות.",
      about_not_title: "מה רקורדלי לא מנסה להיות",
      about_not_text: "רקורדלי לא מנסה להחליף מערכת וידאו ארגונית כבדה או עורך קולנוע מקצועי. היא נבנתה למי שרוצה להקליט תוכן ברור במהירות, עם פחות חיכוך.",
      about_founder_title: "נבנה על ידי מישהו שמקליט, מלמד ומפתח",
      about_founder_text: "רקורדלי נבנה על ידי חגי און, מרצה AI ומפתח תוכנה, מתוך צורך אמיתי: ליצור מדריכים והסברים במהירות בלי להילחם בכלים כבדים ובלי לוותר על פרטיות ושליטה.",
      contact_cta: "יצירת קשר",
      pricing_page_eyebrow: "מחירים",
      pricing_page_title: "מתחילים בחינם. משדרגים כשזה הופך לכלי עבודה.",
      pricing_page_subtitle: "Recordly Free מתאימה להתנסות ולהקלטות מזדמנות. Recordly Pro פותחת הקלטות ארוכות יותר, מגבלות גבוהות יותר וזרימת עבודה חלקה ליוצרים, מרצים, מפתחים וצוותים.",
      pricing_hero_compare_cta: "להשוואת התוכניות",
      pricing_free_kicker: "להתחלה והתנסות",
      pricing_free_title: "Free",
      pricing_free_price: "$0",
      pricing_free_description: "נסו את Recordly, הקליטו סרטונים קצרים, וגלו כמה פשוטה יכולה להיות הקלטת מסך מקומית ומהירה.",
      pricing_free_feature_1: "אותה אפליקציית Recordly כמו ב-Pro",
      pricing_free_feature_2: "הקלטת מסך Local-first",
      pricing_free_feature_3: "הקלטת מסך, מיקרופון, שמע מערכת ומצלמה",
      pricing_free_feature_4: "מעולה להתנסות, הדגמות וסרטונים מזדמנים",
      pricing_free_feature_5: "לא צריך כרטיס אשראי",
      pricing_pro_badge: "הכי מתאים ליוצרים רציניים",
      pricing_pro_kicker: "להקלטה קבועה",
      pricing_pro_title: "Pro",
      pricing_pro_price_main: "$5",
      pricing_pro_price_suffix: "/ חודש",
      pricing_pro_description: "פתחו את החופש להקליט יותר, להקליט ארוך יותר, ולהשתמש ב-Recordly ככלי עבודה אמיתי - לא רק כניסיון.",
      pricing_pro_cta: "שדרוג ל-Pro",
      pricing_pro_feature_1: "כל מה שיש ב-Free",
      pricing_pro_feature_2: "מגבלות חודשיות גבוהות יותר",
      pricing_pro_feature_3: "הקלטות ארוכות יותר לשיעורים, הדגמות ומדריכים אמיתיים",
      pricing_pro_feature_4: "נבנה ליוצרים, מרצים וצוותי מוצר שמקליטים באופן קבוע",
      pricing_pro_feature_5: "מחיר חודשי פשוט ונמוך",
      pricing_compare_title: "השוואה בין Free ל-Pro",
      pricing_compare_subtitle: "שתי התוכניות משתמשות באותה אפליקציית Recordly. Pro פשוט מסירה את המגבלות שמפריעות כשהקלטה הופכת לחלק משגרת העבודה.",
      pricing_col_feature: "יכולת",
      pricing_col_free: "Free",
      pricing_col_pro: "Pro",
      pricing_cmp_same_app: "אותה אפליקציית Recordly",
      pricing_cmp_local: "הקלטה מקומית Local-first",
      pricing_cmp_sources: "מסך, מיקרופון, שמע מערכת ומצלמה",
      pricing_cmp_monthly: "מגבלת הקלטות חודשית",
      pricing_cmp_monthly_free: "מוגבלת",
      pricing_cmp_monthly_pro: "מורחבת",
      pricing_cmp_length: "אורך הקלטה",
      pricing_cmp_length_free: "הקלטות קצרות",
      pricing_cmp_length_pro: "הקלטות ארוכות יותר",
      pricing_cmp_best_for: "הכי מתאים ל",
      pricing_cmp_best_free: "התנסות ושימוש מזדמן",
      pricing_cmp_best_pro: "יצירת תוכן קבועה",
      pricing_value_1_title: "פחות תכנון סביב מגבלות",
      pricing_value_1_text: "Free מצוינת להתחלה. Pro מיועדת לרגע שבו מפסיקים לשאול ‘נשארו לי מספיק הקלטות?’ ופשוט יוצרים.",
      pricing_value_2_title: "טוב יותר לשיעורים והדגמות אמיתיים",
      pricing_value_2_text: "הקלטות ארוכות יותר הופכות את Pro למתאימה יותר לקורסים, סרטוני Onboarding, הדגמות מוצר ומדריכים רציניים.",
      pricing_value_3_title: "עלות קטנה לכלי שבאמת משתמשים בו",
      pricing_value_3_text: "אם Recordly חוסכת אפילו כמה דקות בכל וידאו, Pro מחזירה את עצמה מהר דרך בהירות, מהירות ופחות הפרעות.",
      pricing_story_label: "Why Pro is worth it",
      pricing_story_title: "When recording becomes part of your work, small limits become wasted time.",
      pricing_story_text_1: "Free is excellent for testing Recordly and creating occasional videos. But once you regularly record lessons, tutorials, product demos, support videos or community content, Pro is not just “more recordings”. The value is fewer interruptions, less planning around limits and more flow.",
      pricing_story_text_2: "For one small monthly price, Pro turns Recordly into a daily work tool: the same app, the same experience, but with more freedom to record seriously.",
      pricing_faq_title: "שאלות על מחירים",
      pricing_faq_1_q: "האם תוכנית Free באמת חינמית?",
      pricing_faq_1_a: "כן. Free נועדה לאפשר לך לנסות את Recordly וליצור הקלטות מזדמנות בלי כרטיס אשראי.",
      pricing_faq_2_q: "האם Free ו-Pro משתמשות באפליקציות שונות?",
      pricing_faq_2_a: "לא. זו אותה אפליקציית Recordly. Pro פותחת מגבלות גבוהות יותר וזרימת עבודה טובה יותר למי שמקליט באופן קבוע.",
      pricing_faq_3_q: "מתי כדאי לשדרג ל-Pro?",
      pricing_faq_3_a: "כדאי לשדרג כשאתה מקליט באופן קבוע, צריך סרטונים ארוכים יותר, או רוצה ש-Recordly תהפוך לחלק מתהליך ההוראה, התוכן או המוצר שלך.",
      pricing_faq_4_q: "אפשר להתחיל ב-Free ולשדרג אחר כך?",
      pricing_faq_4_a: "כן. מתחילים עם Free, בודקים את זרימת העבודה, ומשדרגים רק כשהחופש הנוסף באמת שווה לך.",
      pricing_faq_5_q: "Is Pro right for me if I only record occasionally?",
      pricing_faq_5_a: "If you record only once in a while, Free is probably enough. Pro is better for people whose recordings are part of their real teaching, support, product or content work.",
      pricing_faq_6_q: "Does my content get different features in Pro?",
      pricing_faq_6_a: "No. Recordly keeps the same principle: the same app and the same local-first approach. Pro unlocks usage limits so you can record more and for lengths that fit real work.",
      pricing_faq_7_q: "Why not just use another free tool?",
      pricing_faq_7_a: "If a free tool gives you exactly the workflow, privacy and simplicity you need, great. Recordly is for people who want a balance of ease of use, local recording, clear audio/camera sources and simple pricing.",
      definition_label: "What is Recordly?",
      definition_title: "A local-first screen recorder for tutorials, lessons and product demos.",
      definition_text_1: "Recordly is a Windows desktop app that helps teachers, creators, developers and product teams record screen, microphone, system audio and camera in a short, clear workflow.",
      definition_text_2: "Instead of turning every video into a heavy cloud project, Recordly focuses on what most creators actually need: start fast, explain clearly, keep files local and export a video you can send to students, clients, teammates or your community.",
      workflow_label: "Workflow",
      workflow_title: "Built for tutorials, not video-production headaches.",
      workflow_text: "Recordly keeps the process short: choose what to record, start, remove the unnecessary moments and export. Fewer menus, less confusion, and more time to teach, explain and create.",
      workflow_step_1: "Choose screen, microphone, system audio and camera",
      workflow_step_2: "Record a clear explanation without cloud upload",
      workflow_step_3: "Cut silences and small mistakes before sharing",
      workflow_step_4: "Export a clean file for a lesson, client, team or community",
      local_deep_label: "Why local-first matters",
      local_deep_title: "Not every recording should start in the cloud.",
      local_deep_text_1: "Many screen recorders are built around automatic upload, team libraries and share links. That can be useful, but it is not always what you want for private lessons, code, internal systems, client work or ideas that are not ready to publish.",
      local_deep_text_2: "Recordly starts locally: recording and editing happen on your computer. You decide what to save, what to export, where to store it and when to share. That is faster, more private and simpler for many tutorial and demo videos.",
      usecases_label: "Common use cases",
      usecases_title: "Recordly is built for anyone who explains something on screen.",
      usecase_teachers_title: "Teachers, lecturers and course creators",
      usecase_teachers_text: "Record short lessons, exercise walkthroughs, course explanations, answers to student questions and internal training without opening a heavy video system.",
      usecase_devs_title: "Developers and product teams",
      usecase_devs_text: "Create bug reports with full context, new-version demos, flow explanations, feature reviews or user guidance that shows exactly what happens on screen.",
      usecase_marketers_title: "Creators, marketers and small businesses",
      usecase_marketers_text: "Produce product videos, short tutorials, social content, simple sales videos and community content without wrestling with large editing tools.",
      usecase_ai_title: "AI educators and online creators",
      usecase_ai_text: "Record prompt-engineering demos, AI tool explanations, visual workflows and short lessons your audience can understand and apply quickly."
    },
    en: {
      brand_badge: "Local-first",
      // nav_problem: "Why different",
      // nav_proof: "Proof",
      // nav_pricing: "Pricing",
      nav_about: "About",
      nav_features: "Features",
      nav_price: "Pricing",
      nav_faq: "FAQ",
      nav_download: "Download Free",
      nav_contact: "Contact",
      nav_compare: "Comparison",
      go_back: "Back",
      hero_kicker: "Privacy Mode: ON",
      hero_title: "The recorder that doesn’t spy on your lesson.",
      hero_lead: "Recordly helps teachers, creators, gamers, and developers to record screen, camera, mic and audio, edit fast, and export clean tutorial videos - while recordings stay on your computer, not in our cloud.",
      // hero_lead: "Recordly is a Windows desktop app for recording screen, camera, microphone and system audio, so you can create tutorials, lessons, product demos and support videos without uploading recordings to the cloud.",
      hero_secondary: "See why it’s private",
      proof_local: "100% local editing",
      proof_upload: "0 recording uploads",
      proof_price: "$5/month Pro",
      screen_topic: "Lesson: Fractions in 3 minutes",
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
      feature_1_title: "Screen + Camera + Audio + Voice",
      // feature_1_text: "A complete tutorial recording with presenter bubble, clear audio, and sharp screen capture.",
      feature_1_text: "Record a full tutorial with a sharp screen, camera presenter bubble, microphone and system audio - so viewers understand both what happens and who is explaining it.",
      feature_2_title: "Fast trimming",
      // feature_2_text: "Remove silences, mistakes, and awkward starts without learning a full video editor.",
      feature_2_text: "Cut unnecessary moments, silences, awkward starts and small mistakes without turning every video into an editing project.",
      feature_3_title: "Smart highlights",
      // feature_3_text: "Mark important moments so viewers instantly know where to look.",
      feature_3_text: "Highlight important moments so viewers know where to look, even when the screen is full of buttons, code or complex UI.",
      feature_4_title: "Privacy by default",
      // feature_4_text: "Recordings stay local. We only know your plan and monthly recording count.",
      feature_4_text: "Recordings stay local. Recordly does not need your video content in order to work.",
      feature_5_title: "Clean export for sharing",
      // feature_5_text: "A polished video you can send to students, clients, teams, or your community.",
      feature_5_text: "Export a clean video you can send to students, clients, teammates, a course platform or your community.",      
      feature_6_title: "Available platforms",
      feature_6_text: "Currently only Windos version, Mac version coming soon!",
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
      best_recorders_cta: "3 best screen recorders in 2026",
      local_first_article_cta: "Wיhat is Local-first?",
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
      // faq_1_a: "No. Recording content stays local only and is not sent to our servers.",
      faq_1_a: "No. Recordly is local-first: recording content stays on your computer. You can choose to share or upload files later, but the recording itself is never sent to us.",
      faq_2_q: "What information do you store?",
      // faq_2_a: "Only your payment plan and monthly recording count, so we can operate the Free limit and Pro access.",
      faq_2_a: "For Free/Pro activation we keep minimal account data such as your plan and monthly recording count. Video, microphone, camera and screen content stay with you.",
      faq_3_q: "Can I cancel Pro?",
      faq_3_a: "Yes. You can cancel anytime, and access remains active until the end of the current billing period.",
      faq_4_q: "Is it only for teachers?",
      faq_4_a: "No. It is built around teachers, but also works for creators, developers, support teams, and gamers.",
      faq_5_q: "Does Recordly require ffmpeg?",
      faq_5_a: "Yes. For the free beta, install ffmpeg before using Recordly.",
      faq_6_q: "Does Recordly work offline?",
      faq_6_a: "Yes. Recording and editing work locally, so you can turn Wi-Fi off and test it.",
      faq_7_q: "Does it support system audio?",
      faq_7_a: "Yes. Recordly is designed for full explanations with system audio from a browser, player, app or software tool, together with microphone and camera when needed.",
      faq_8_q: "Does it support microphone and camera?",
      faq_8_a: "Yes. You can choose microphone and camera to create tutorial videos with a human presence, clear voice and better visual context.",
      faq_9_q: "Does it export MP4?",
      faq_9_a: "Yes. The goal is to export a clean video file that is easy to share, store or upload to the platform you choose.",
      faq_10_q: "Is Recordly good for software tutorials?",
      faq_10_a: "Yes. Recordly is built for clear screen videos: product demos, software walkthroughs, bug reports, onboarding, feature reviews and technical explanations.",
      faq_11_q: "Is Free only a trial?",
      faq_11_a: "No. Free is a real plan for occasional recordings. Pro is for users who record regularly and want fewer limits on recording count and length.",
      faq_12_q: "What does Pro unlock?",
      faq_12_a: "Pro does not change the app itself. It unlocks more usage freedom: more recordings, longer sessions and a workflow that fits regular teaching, content and product work.",
      final_label: "Record once. Explain forever.",
      final_title: "Your screen already explains it. Now make it look professional.",
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
      nav_guide: "Buyer guide",
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
      download_info_1_title: "What do you get after downloading?",
      download_info_1_text: "A Windows app built for recording screen, microphone, system audio and camera. The goal is to create a clear tutorial video quickly, not send you into another complicated cloud system.",
      download_info_2_title: "Why are there Free and Pro plans?",
      download_info_2_text: "Free lets you start without a credit card and test the workflow. Pro is for people who record seriously and want more freedom in recording count and duration.",
      download_info_3_title: "Important beta note",
      download_info_3_text: "Recordly is currently in beta. Windows may show a download or installation warning, especially before full code signing and download reputation are established.",
      thank_you_title: "Thank you!",
      thank_you_subtitle: "Payment received. You can download Recordly and continue to the getting started guide.",
      thank_you_how_to_cta: "Open the getting started guide",
      not_found_title: "Page not found",
      not_found_subtitle: "The link may have moved, changed, or taken a small coffee break.",
      not_found_back_home: "Back to homepage",
      not_found_contact: "Contact support",
      footer_cookies: "Cookie Policy",
      footer_contact: "Contact",
      footer_copyright: "All rights reserved.",
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
      guide_red_flags_label: "Red flags",
      guide_red_flags_title: "When should you think twice before choosing a screen recorder?",
      guide_red_flag_1: "When the tool requires cloud upload even for private or internal recordings.",
      guide_red_flag_2: "When editing requires learning a heavy system instead of quickly fixing mistakes and silences.",
      guide_red_flag_3: "When the free plan looks good but limits exactly what you need for real work.",
      guide_red_flag_4: "When export or sharing locks you into one platform.",
      about_text: "About",
      about_eyebrow: "About Recordly",
      about_title: "A screen recorder built for speed, clarity, and full control",
      about_subtitle: "Recordly helps teachers, creators, developers, and teams record tutorials, demos, lessons, and product videos without heavy cloud systems or unnecessary complexity.",
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
      about_principle_1_title: "Less friction",
      about_principle_1_text: "Every product decision is measured by one question: does it help you get from a good reason to record to a finished video faster?",
      about_principle_2_title: "More control",
      about_principle_2_text: "Recordly prefers local control over cloud dependency. Recordings, files and workflows should stay in your hands.",
      about_principle_3_title: "Professional result without overload",
      about_principle_3_text: "The goal is not to turn every user into a video editor. The goal is to help anyone who explains something look and sound clearer.",
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
      contact_cta: "Contact us",
      pricing_page_eyebrow: "Pricing",
      pricing_page_title: "Start free. Upgrade when recording becomes part of your work.",
      pricing_page_subtitle: "Recordly Free is perfect for trying the app and creating occasional videos. Recordly Pro unlocks longer recordings, higher limits, and a smoother workflow for creators, teachers, developers, and teams.",
      pricing_hero_compare_cta: "Compare plans",
      pricing_free_kicker: "For getting started",
      pricing_free_title: "Free",
      pricing_free_price: "$0",
      pricing_free_description: "Try Recordly, record short videos, and see how fast local-first screen recording can feel.",
      pricing_free_feature_1: "Same Recordly app as Pro",
      pricing_free_feature_2: "Local-first screen recording",
      pricing_free_feature_3: "Record screen, microphone, system audio, and camera",
      pricing_free_feature_4: "Great for testing, demos, and occasional videos",
      pricing_free_feature_5: "No credit card needed",
      pricing_pro_badge: "Best for serious creators",
      pricing_pro_kicker: "For regular recording",
      pricing_pro_title: "Pro",
      pricing_pro_price_main: "$5",
      pricing_pro_price_suffix: "/ month",
      pricing_pro_description: "Unlock the freedom to record more, record longer, and use Recordly as a real content tool - not just a trial.",
      pricing_pro_cta: "Get Pro",
      pricing_pro_feature_1: "Everything in Free",
      pricing_pro_feature_2: "Higher monthly recording limits",
      pricing_pro_feature_3: "Longer recordings for real lessons, demos, and tutorials",
      pricing_pro_feature_4: "Built for regular creators, teachers, and product teams",
      pricing_pro_feature_5: "One simple low monthly price",
      pricing_compare_title: "Compare Free and Pro",
      pricing_compare_subtitle: "Both plans use the same Recordly app. Pro simply removes the limits that get in the way when recording becomes part of your workflow.",
      pricing_col_feature: "Feature",
      pricing_col_free: "Free",
      pricing_col_pro: "Pro",
      pricing_cmp_same_app: "Same Recordly app",
      pricing_cmp_local: "Local-first recording",
      pricing_cmp_sources: "Screen, mic, system audio, camera",
      pricing_cmp_monthly: "Monthly recording limit",
      pricing_cmp_monthly_free: "Limited",
      pricing_cmp_monthly_pro: "Expanded",
      pricing_cmp_length: "Recording length",
      pricing_cmp_length_free: "Short recordings",
      pricing_cmp_length_pro: "Longer recordings",
      pricing_cmp_best_for: "Best for",
      pricing_cmp_best_free: "Trying and occasional use",
      pricing_cmp_best_pro: "Regular content creation",
      pricing_value_1_title: "Less planning around limits",
      pricing_value_1_text: "Free is great for starting. Pro is for the moment you stop asking ‘do I have enough recordings left?’ and just create.",
      pricing_value_2_title: "Better for real lessons and demos",
      pricing_value_2_text: "Longer recordings make Pro a better fit for courses, onboarding videos, product walkthroughs, and serious tutorials.",
      pricing_value_3_title: "A tiny cost for a tool you actually use",
      pricing_value_3_text: "If Recordly saves even a few minutes per video, Pro quickly pays for itself in clarity, speed, and fewer interruptions.",
      pricing_story_label: "Why Pro is worth it",
      pricing_story_title: "When recording becomes part of your work, small limits become wasted time.",
      pricing_story_text_1: "Free is excellent for testing Recordly and creating occasional videos. But once you regularly record lessons, tutorials, product demos, support videos or community content, Pro is not just more recordings. The value is fewer interruptions, less planning around limits and more flow.",
      pricing_story_text_2: "For one small monthly price, Pro turns Recordly into a daily work tool: the same app, the same experience, but with more freedom to record seriously.",
      pricing_faq_title: "Pricing questions",
      pricing_faq_1_q: "Is the Free plan really free?",
      pricing_faq_1_a: "Yes. Free is designed so you can try Recordly and create occasional recordings without a credit card.",
      pricing_faq_2_q: "Do Free and Pro use different apps?",
      pricing_faq_2_a: "No. It is the same Recordly app. Pro unlocks higher limits and a better workflow for regular recording.",
      pricing_faq_3_q: "When should I upgrade to Pro?",
      pricing_faq_3_a: "Upgrade when you record regularly, need longer videos, or want Recordly to become part of your teaching, content, or product workflow.",
      pricing_faq_4_q: "Can I start with Free and upgrade later?",
      pricing_faq_4_a: "Yes. Start with Free, test your workflow, and upgrade only when the extra freedom is worth it for you.",
      pricing_faq_5_q: "Is Pro right for me if I only record occasionally?",
      pricing_faq_5_a: "If you record only once in a while, Free is probably enough. Pro is better for people whose recordings are part of their real teaching, support, product or content work.",
      pricing_faq_6_q: "Does my content get different features in Pro?",
      pricing_faq_6_a: "No. Recordly keeps the same principle: the same app and the same local-first approach. Pro unlocks usage limits so you can record more and for lengths that fit real work.",
      pricing_faq_7_q: "Why not just use another free tool?",
      pricing_faq_7_a: "If a free tool gives you exactly the workflow, privacy and simplicity you need, great. Recordly is for people who want a balance of ease of use, local recording, clear audio/camera sources and simple pricing.",
      definition_label: "What is Recordly?",
      definition_title: "A local-first screen recorder for tutorials, lessons and product demos.",
      definition_text_1: "Recordly is a Windows desktop app that helps teachers, creators, developers and product teams record screen, microphone, system audio and camera in a short, clear workflow.",
      definition_text_2: "Instead of turning every video into a heavy cloud project, Recordly focuses on what most creators actually need: start fast, explain clearly, keep files local and export a video you can send to students, clients, teammates or your community.",
      workflow_label: "Workflow",
      workflow_title: "Built for tutorials, not video-production headaches.",
      workflow_text: "Recordly keeps the process short: choose what to record, start, remove unnecessary moments and export. Fewer menus, less confusion and more time to teach, explain and create.",
      workflow_step_1: "Choose screen, microphone, system audio and camera",
      workflow_step_2: "Record a clear explanation without cloud upload",
      workflow_step_3: "Cut silences and small mistakes before sharing",
      workflow_step_4: "Export a clean file for a lesson, client, team or community",
      local_deep_label: "Why local-first matters",
      local_deep_title: "Not every recording should start in the cloud.",
      local_deep_text_1: "Many screen recorders are built around automatic upload, team libraries and share links. That can be useful, but it is not always what you want for private lessons, code, internal systems, client work or ideas that are not ready to publish.",
      local_deep_text_2: "Recordly starts locally: recording and editing happen on your computer. You decide what to save, what to export, where to store it and when to share. That is faster, more private and simpler for many tutorial and demo videos.",
      usecases_label: "Common use cases",
      usecases_title: "Recordly is built for anyone who explains something on screen.",
      usecase_teachers_title: "Teachers, lecturers and course creators",
      usecase_teachers_text: "Record short lessons, exercise walkthroughs, course explanations, answers to student questions and internal training without opening a heavy video system.",
      usecase_devs_title: "Developers and product teams",
      usecase_devs_text: "Create bug reports with full context, new-version demos, flow explanations, feature reviews or user guidance that shows exactly what happens on screen.",
      usecase_marketers_title: "Creators, marketers and small businesses",
      usecase_marketers_text: "Produce product videos, short tutorials, social content, simple sales videos and community content without wrestling with large editing tools.",
      usecase_ai_title: "AI educators and online creators",
      usecase_ai_text: "Record prompt-engineering demos, AI tool explanations, visual workflows and short lessons your audience can understand and apply quickly."
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
    if (themeIcon) themeIcon.textContent = normalizedTheme === "dark" ? "☀" : "☾";
  }

  function setLanguage(lang) {
    const normalizedLang = lang === "en" ? "en" : "he";
    const normalizedDir = lang === "en" ? "ltr" : "rtl";
    const dictionary = translations[normalizedLang] || translations.he || {};

    document.documentElement.setAttribute("lang", normalizedLang);
    document.documentElement.setAttribute("dir", normalizedDir);
    document.documentElement.setAttribute("data-lang", normalizedLang);
    storage.set("recordly-lang", normalizedLang);
    const navLinks = document.getElementById("navLinks");
    navLinks.setAttribute("dir", normalizedDir);

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

  const CONTACT_ENDPOINT = "https://recordly.ailoveu.art/api/contact";

  function setupContactForm() {
    // const endpoint = "https://recordly.ailoveu.art/contact";
    // const endpoint = "https://recordly.ailoveu.art/api/contact";
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
        const turnstileToken = getTurnstileToken();
        if (!turnstileToken) throw new Error(contactMessage("missingVerification"));

        const category = cleanFormValue(formData.get("category"));
        const rawMessage = cleanFormValue(formData.get("message"));
        const payload = {
          category,
          name: cleanFormValue(formData.get("name")),
          email: cleanFormValue(formData.get("email")),
          subject: cleanFormValue(formData.get("subject")) || "Recordly contact request",
          message: rawMessage,
          company: cleanFormValue(formData.get("company")),
          turnstileToken,
        };

        validateContactPayload(payload, category);

        const response = await postContactRequest(payload);
        const result = await readJsonResponse(response);

        if (!response.ok || result.ok === false) {
          throwContactResponseError(response, result);
        }

        form.reset();
        resetTurnstile();
        setContactStatus(status, contactMessage("success"), "success");
      } catch (error) {
        const message = getFriendlyContactErrorMessage(error);
        setContactStatus(status, message, "error");
        resetTurnstile();
      } finally {
        setContactSubmitting(submit, false);
      }
    });
  }

  async function postContactRequest(payload) {
    return fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async function readJsonResponse(response) {
    try {
      return await response.json();
    } catch (_) {
      return {};
    }
  }

  function throwContactResponseError(response, result) {
    if (response.status === 429) {
      const retryAfter = result.retryAfter || 60;
      throw new Error(contactMessage("rateLimited", retryAfter));
    }

    if (response.status === 404 || response.status >= 500) {
      const error = new Error(contactMessage("serviceUnavailable"));
      error.isContactServiceUnavailable = true;
      throw error;
    }

    throw new Error(result.error || contactMessage("failed"));
  }

  function getFriendlyContactErrorMessage(error) {
    if (!navigator.onLine || error instanceof TypeError || error?.isContactServiceUnavailable) {
      return contactMessage("serviceUnavailable");
    }

    return error?.message || contactMessage("failed");
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
        failed: "לא הצלחנו לשלוח את ההודעה. נסה שוב בעוד רגע, או שלח לנו מייל ישירות ל-h2o@ailoveu.art.",
        serviceUnavailable: "טופס יצירת הקשר אינו זמין כרגע. נסה שוב בעוד רגע, או שלח לנו מייל ישירות ל-h2o@ailoveu.art.",
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
        failed: "Could not send your message. Please try again in a moment, or email us directly at h2o@ailoveu.art.",
        serviceUnavailable: "The contact form is temporarily unavailable. Please try again in a moment, or email us directly at h2o@ailoveu.art.",
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
    if (!referrerElement) { return; }
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
