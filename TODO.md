# TODO: Ручная настройка SnapStep Landing

Список задач, которые нужно выполнить вручную для завершения настройки лендинга.

---

## 🔥 Критично (Сделать в первую очередь)

### 1. Firebase Analytics - Настройка credentials

**Статус:** ⏳ Ожидает выполнения

**Где:** [.env.local](.env.local)

**Что делать:**
1. Открыть https://console.firebase.google.com
2. Выбрать проект SnapStep (где уже есть мобильное приложение)
3. Project Settings (⚙️) → General → Your apps
4. Нажать "Add app" → Выбрать Web (</>)
5. Название: "SnapStep Landing"
6. Включить "Firebase Hosting" (опционально)
7. Скопировать конфигурацию:
   ```
   apiKey: "..."
   authDomain: "..."
   projectId: "..."
   appId: "..."
   measurementId: "G-..."
   ```
8. Открыть [.env.local](.env.local)
9. Заменить placeholder значения на реальные

**Проверка:**
```bash
npm run dev
# Открыть браузер → DevTools Console
# Должно быть: "Firebase Analytics disabled in development mode"
# Кликнуть на кнопку скачивания → Должно быть: "📊 Analytics Event: landing_download_click"
```

**Документация:**
- [Firebase Web Setup](https://firebase.google.com/docs/web/setup)
- [Firebase Analytics](https://firebase.google.com/docs/analytics/get-started)

---

### 2. Ссылки на App Store и Google Play

**Статус:** ⏳ Ожидает выполнения

**Где:**
- [src/components/Hero.jsx](src/components/Hero.jsx) (строки 51-53, 70-72)
- [src/App.jsx](src/App.jsx) (строки 46-48, 65-67)

**Что делать:**
1. Получить реальные ссылки на приложение в сторах:
   - Google Play: `https://play.google.com/store/apps/details?id=com.spacewhale.snapstep`
   - App Store: `https://apps.apple.com/app/snapstep/id<APP_ID>`

2. В [Hero.jsx](src/components/Hero.jsx):
   ```javascript
   // Строка 51-53 (Android button)
   onClick={(e) => {
     e.preventDefault();
     trackDownloadClick('android', 'hero');
     window.open('https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME', '_blank');
   }}

   // Строка 70-72 (iOS button)
   onClick={(e) => {
     e.preventDefault();
     trackDownloadClick('ios', 'hero');
     window.open('https://apps.apple.com/app/snapstep/idYOUR_APP_ID', '_blank');
   }}
   ```

3. В [App.jsx](src/App.jsx) - то же самое для CTA секции (строки 46-48 и 65-67)

**Проверка:**
- Кликнуть на кнопки → Должны открыться сторы в новой вкладке

---

## 📱 Важно (Ссылки на соцсети и поддержку)

### 3. Ссылка на Twitter/X

**Статус:** ⏳ Ожидает выполнения

**Где:** [src/App.jsx](src/App.jsx) (строка 107)

**Что делать:**
```javascript
// Строка 107
<a href="https://twitter.com/snapstep_app" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
```

Заменить `#` на реальную ссылку на Twitter аккаунт SnapStep.

---

### 4. Ссылка на Telegram Support

**Статус:** ✅ Уже настроено

**Где:** [src/App.jsx](src/App.jsx) (строки 93, 112)

**Текущее значение:** `https://t.me/snapstep_support`

**Что делать:**
- Проверить, что канал существует и активен
- Если нужно изменить - обновить обе ссылки (в footer и в support section)

---

### 5. Email поддержки

**Статус:** ✅ Уже настроено

**Где:** [src/App.jsx](src/App.jsx) (строка 92)

**Текущее значение:** `snapstep.help@gmail.com`

**Что делать:**
- Проверить, что этот email активен и мониторится
- Если нужно изменить - обновить в коде

---

### 6. GDPR ссылка

**Статус:** ⏳ Ожидает выполнения

**Где:** [src/App.jsx](src/App.jsx) (строка 101)

**Что делать:**
```javascript
// Строка 101
<a href="/gdpr-compliance">GDPR</a>
// или
<a href="https://snapstep.app/gdpr">GDPR</a>
```

Заменить `#` на:
- Создать отдельную страницу GDPR Compliance
- Или ссылку на раздел в Privacy Policy
- Или внешнюю документацию GDPR

---

## 📄 SEO и контент (Желательно)

### 7. Обновить Privacy Policy для Firebase Analytics

**Статус:** ⏳ Ожидает выполнения

**Где:** [src/components/Privacy.jsx](src/components/Privacy.jsx)

**Что добавить:**

Добавить раздел о Firebase Analytics в Privacy Policy:

```markdown
## Аналитика и Cookies

### Firebase Analytics
Мы используем Google Firebase Analytics для сбора анонимных данных о посещениях сайта:

**Собираемые данные:**
- Просмотры страниц
- Клики на кнопки скачивания приложения
- Общая статистика использования
- Географическое местоположение (страна/город)
- Тип устройства и браузер

**Цель сбора:**
- Улучшение пользовательского опыта
- Понимание эффективности маркетинговых кампаний
- Оптимизация производительности сайта

**Хранение данных:**
- Данные хранятся на серверах Google (США)
- Срок хранения: 14 месяцев (по умолчанию)
- IP-адреса анонимизированы

**Отказ от сбора:**
Вы можете отключить Google Analytics используя [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)

Подробнее: [Google Privacy Policy](https://policies.google.com/privacy)
```

**Проверка:**
- Соответствие GDPR (если работаете с EU пользователями)
- Ясность формулировок
- Ссылки работают

---

### 8. Cookie Consent Banner (для EU пользователей)

**Статус:** ⏳ Опционально (обязательно для EU)

**Что делать:**

Если у вас есть пользователи из Европы, добавьте cookie consent banner:

1. Установить библиотеку:
   ```bash
   npm install react-cookie-consent
   ```

2. Добавить в [src/App.jsx](src/App.jsx):
   ```javascript
   import CookieConsent from "react-cookie-consent";

   // В компонент App, перед closing </Router>:
   <CookieConsent
     location="bottom"
     buttonText="Accept"
     declineButtonText="Decline"
     enableDeclineButton
     onAccept={() => {
       localStorage.setItem('analytics-consent', 'true');
       initializeFirebase();
     }}
     onDecline={() => {
       localStorage.setItem('analytics-consent', 'false');
     }}
     style={{ background: "#1a1a1a" }}
     buttonStyle={{ background: "#3b82f6", color: "#fff" }}
   >
     We use cookies to improve your experience.
     See our <Link to="/privacy">Privacy Policy</Link>.
   </CookieConsent>
   ```

3. Обновить [src/config/firebase.js](src/config/firebase.js):
   ```javascript
   // Проверять consent перед инициализацией
   const hasConsent = localStorage.getItem('analytics-consent') === 'true';
   if (!hasConsent && import.meta.env.PROD) {
     console.log('Analytics disabled - no user consent');
     return { app: null, analytics: null };
   }
   ```

---

## 🧪 Тестирование

### 9. Проверка Firebase Analytics в Production

**Статус:** ⏳ После настройки credentials

**Что делать:**

1. **Build и deploy:**
   ```bash
   npm run build
   npm run preview  # или deploy на хостинг
   ```

2. **Проверка DebugView:**
   - Открыть Firebase Console → Analytics → DebugView
   - Установить Chrome extension: "Google Analytics Debugger"
   - Включить extension
   - Открыть сайт → Выполнить действия
   - События должны появляться в DebugView в реальном времени

3. **Проверка событий (24-48 часов):**
   - Firebase Console → Analytics → Events
   - Проверить события:
     - `page_view`
     - `landing_download_click`
     - `generate_lead`
   - Проверить параметры событий

4. **Настройка Conversions:**
   - Firebase Console → Analytics → Events
   - Найти `landing_download_click` → "Mark as conversion"
   - Найти `generate_lead` → "Mark as conversion"

---

### 10. Проверка всех ссылок на сайте

**Статус:** ⏳ Ожидает выполнения

**Чеклист:**

```
Footer Links:
□ Features (#features) - работает
□ Pricing (#pricing) - работает
□ How It Works (#how-it-works) - работает
□ Categories (#categories) - работает
□ Email Support (mailto:snapstep.help@gmail.com) - работает
□ Telegram (https://t.me/snapstep_support) - работает
□ FAQ (#faq) - работает
□ Terms of Service (/terms) - работает
□ Privacy Policy (/privacy) - работает
□ GDPR (#) - НУЖНО ОБНОВИТЬ
□ Twitter (#) - НУЖНО ОБНОВИТЬ

Download Buttons:
□ Google Play в Hero - НУЖНО ОБНОВИТЬ
□ App Store в Hero - НУЖНО ОБНОВИТЬ
□ Google Play в CTA - НУЖНО ОБНОВИТЬ
□ App Store в CTA - НУЖНО ОБНОВИТЬ

Navigation:
□ Все секции доступны через меню
□ Smooth scroll работает
□ Mobile menu открывается/закрывается
```

---

## 🎨 Финальная полировка

### 11. Тестирование на мобильных устройствах

**Статус:** ⏳ Перед production запуском

**Что проверить:**
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad)

**Чеклист:**
- [ ] Кнопки кликабельны
- [ ] Меню работает
- [ ] Smooth scroll работает
- [ ] Все секции читаемы
- [ ] Нет горизонтального скролла
- [ ] Изображения загружаются
- [ ] Analytics трекает события

---

### 12. Performance и SEO проверка

**Статус:** ⏳ Перед production запуском

**Инструменты:**
1. **Lighthouse (Chrome DevTools):**
   ```bash
   npm run build
   npm run preview
   # Открыть DevTools → Lighthouse → Run audit
   ```

   **Целевые показатели:**
   - Performance: >90
   - Accessibility: >95
   - Best Practices: >95
   - SEO: >95

2. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Проверить production URL

3. **Проверка meta tags:**
   - Open Graph работает (поделиться в соцсетях)
   - Twitter Cards работают
   - Structured Data (JSON-LD) валиден

---

## 📊 Firebase Console - Дополнительная настройка

### 13. Настройка Firebase Analytics Dashboard

**Статус:** ⏳ После первых данных

**Что настроить:**

1. **Custom Dashboard:**
   - Firebase Console → Analytics → Dashboard
   - Add widget: "Event count" для `landing_download_click`
   - Add widget: "User engagement"
   - Add widget: "Page views by page"

2. **Audiences:**
   - Create audience: "iOS interested" (clicked iOS button)
   - Create audience: "Android interested" (clicked Android button)
   - Create audience: "Visited pricing" (scrolled to pricing)

3. **Funnels:**
   - Create funnel: Home → Features → Download Click
   - Analyze drop-off points

4. **Google Analytics 4 Integration:**
   - Link Firebase Analytics to GA4 (если нужно)
   - Analytics → Integrations → Google Analytics

---

## 🚀 Deploy Checklist

### 14. Pre-deployment проверка

**Перед деплоем на production:**

```bash
# 1. Проверить environment variables
cat .env.local  # Реальные credentials?

# 2. Build production версии
npm run build

# 3. Preview локально
npm run preview

# 4. Проверить размер bundle
npm run build -- --report  # если есть plugin

# 5. Проверить все TODO выше
```

**Чеклист перед деплоем:**
- [ ] Firebase credentials настроены
- [ ] Ссылки на сторы добавлены
- [ ] Все соцсети и контакты правильные
- [ ] Privacy Policy обновлен
- [ ] Analytics работает
- [ ] Lighthouse score >90
- [ ] Мобильные устройства протестированы
- [ ] Нет console errors
- [ ] Git commit сделан

---

## 📝 Заметки

### Полезные команды

```bash
# Разработка
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Проверка Firebase в console
# DevTools Console должен показывать:
# - "Firebase Analytics initialized" (production)
# - "Firebase Analytics disabled in development mode" (dev)
# - "📊 Analytics Event: ..." при действиях (dev)

# Очистка и переустановка
rm -rf node_modules package-lock.json
npm install
```

### Контакты для вопросов

- **Email:** Daniil.Kharlan@space-whale.io
- **Support:** snapstep.help@gmail.com
- **Telegram:** https://t.me/snapstep_support

---

**Последнее обновление:** 2026-03-13
**Создано:** Claude Code - Firebase Analytics Integration
