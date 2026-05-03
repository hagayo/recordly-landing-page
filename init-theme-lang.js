(function () {
  const savedTheme = localStorage.getItem("recordly-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedLang = localStorage.getItem("recordly-lang");
  const browserLang = (navigator.language || navigator.userLanguage || "he").toLowerCase();
  const initialLang = savedLang || (browserLang.startsWith("he") ? "he" : "en");

  document.documentElement.setAttribute("data-theme", savedTheme || (prefersDark ? "dark" : "light"));
  document.documentElement.setAttribute("lang", initialLang);
  document.documentElement.setAttribute("dir", initialLang === "he" ? "rtl" : "ltr");
  document.documentElement.setAttribute("data-lang", initialLang);
})();
