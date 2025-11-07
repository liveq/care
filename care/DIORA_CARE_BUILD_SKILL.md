# DIORA CARE Service Build Skill

## Overview
This skill guides Claude Code through building a professional digital privacy management service page (care.diora.co.kr) as a subdomain of the existing DIORA website.

## Context
- **Client**: Solo entrepreneur running DIORA (beauty ODM/OEM + AI web development)
- **Service**: Digital privacy management (삭제 서비스) - removing illegal content, leaked personal info, and reputation management
- **Target Users**: Korean-speaking victims of digital crimes, leaked personal info, and individuals/companies needing reputation management
- **Differentiators**: Information Security degree + Digital Undertaker certification + AI crawling technology

## Critical Requirements

### 1. Repository Structure
```
EXISTING: diora.co.kr repository
ACTION: Create /care folder inside existing repo
PATH: diora.co.kr/care/

Structure:
/care
  ├── index.html (Korean)
  ├── en/
  │   └── index.html (English)
  ├── assets/
  │   ├── css/
  │   │   └── style.css
  │   ├── js/
  │   │   ├── main.js
  │   │   └── i18n.js
  │   ├── images/
  │   └── documents/
  │       ├── delegation_form.pdf
  │       └── delegation_form.hwp
  ├── sitemap.xml
  └── robots.txt
```

### 2. Design System (MUST MATCH diora.co.kr)
```css
/* Color Palette - White Gold Premium Tone */
--bg-primary: #fafaf8;
--bg-card: #ffffff;
--accent-gold: #c9b896;
--accent-gold-dark: #8a7a5f;
--text-primary: #0a0a0a;
--text-secondary: #2a2a2a;
--border: #e8dcc8;

/* Typography */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif;
font-weight: 400-500; /* Never use bold excessively */
line-height: 1.6-1.8; /* High readability */

/* Buttons */
.btn-primary {
  background: linear-gradient(135deg, #c9b896, #8a7a5f);
  color: #ffffff;
  border-radius: 8px;
  padding: 12px 32px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: #ffffff;
  color: #0a0a0a;
  border: 1px solid #e8dcc8;
  border-radius: 8px;
  padding: 12px 32px;
  transition: all 0.3s ease;
}
```

### 3. SEO Strategy (CRITICAL)

#### Primary Keywords (Korean)
```
디지털성범죄삭제, 불법촬영물삭제, 리벤지포르노삭제, 개인정보유출, 
온라인평판관리, 디지털장의사, 악플삭제, 과거기록삭제, 웹하드삭제, 
딥페이크삭제, 몰카삭제, 잡플래닛삭제, 블라인드삭제
```

#### Meta Tags Template (Korean)
```html
<title>디지털 프라이버시 관리 | 불법촬영물·개인정보 삭제 전문 | DIORA CARE</title>
<meta name="description" content="불법촬영물, 리벤지포르노, 개인정보 유출 삭제 전문. 정보보호 전공 + AI 기술로 국내외 플랫폼 신속 대응. 비밀 보장 100%. 무료 상담.">
<meta name="keywords" content="디지털성범죄삭제, 불법촬영물삭제, 리벤지포르노삭제, 개인정보유출, 온라인평판관리, 디지털장의사, 악플삭제">
<meta property="og:title" content="DIORA CARE - 디지털 프라이버시 관리 전문">
<meta property="og:description" content="불법촬영물·개인정보 유출·온라인 평판 문제 해결. AI 기술 + 전문성으로 신속 대응.">
<meta property="og:url" content="https://care.diora.co.kr">
<meta property="og:type" content="website">
<link rel="canonical" href="https://care.diora.co.kr">
```

#### Schema Markup (MUST INCLUDE)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "DIORA CARE",
  "description": "디지털 프라이버시 관리 및 온라인 평판 보호 전문 서비스",
  "url": "https://care.diora.co.kr",
  "email": "dio@diora.co.kr",
  "areaServed": "KR",
  "serviceType": ["Digital Privacy Management", "Online Reputation Protection", "Illegal Content Removal"]
}
```

### 4. Page Structure (8 Main Sections)

#### Section 1: Hero
```
H1: 디지털 프라이버시 관리 | 온라인 평판 보호 | 디지털 족적 관리
Subheading: 불법 촬영물, 개인정보 유출, 악성 게시물로 고통받고 계신가요?
             AI 기술과 정보보호 전문성으로 신속하게 해결합니다.
Trust Badges:
  ✓ 정보보호학과 출신 + 디지털 장의사 자격 보유
  ✓ AI 크롤링으로 24시간 내 유포 범위 파악
  ✓ 국내외 플랫폼 협력 체계 구축
  ✓ 100% 비밀 보장
CTA: [무료 상담 시작하기] [서비스 자세히 보기]
```

#### Section 2: Problem & Solution
```
H2: 이런 고민, 혼자 끙끙대고 계신가요?
Problems (5 pain points with ❌)
H2: DIORA CARE가 해결합니다
Solutions (5 solutions with ✅)
```

#### Section 3: Why DIORA
```
H2: DIORA CARE를 선택해야 하는 이유
4 Cards:
  1. 전문성 (정보보호 전문가)
  2. 기술력 (AI 크롤링)
  3. 협력 체계 (기관·플랫폼 협업)
  4. 비밀 보장 (100% 비밀)
```

#### Section 4: Service Scope
```
H2: 처리 가능 플랫폼 및 유형
3 Tabs:
  1. 국내 플랫폼 (네이버, 다음, 인스타, 유튜브, 웹하드 등)
  2. 해외 플랫폼 (Google, Meta, X, Reddit, 성인사이트)
  3. 처리 가능 유형 (성범죄, 개인정보, 악플, 과거기록, 기업평판)
```

#### Section 5: Process
```
H2: 진행 프로세스
5 Steps:
  1. 상담 접수
  2. 착수금 & 위임장
  3. 1차 조사 & 견적
  4. 중도금 & 삭제 진행
  5. 완료 & 잔금
```

#### Section 6: Pricing
```
H2: 투명한 요금 체계
3 Packages:
  1. 단건 삭제 (3~10만원/건)
  2. 스탠다드 (월 150~200만원, 3개월)
  3. 프리미엄 (월 250~350만원, 6개월)
착수금 정책 명시
```

#### Section 7: FAQ
```
H2: 자주 묻는 질문
10 Q&As (삭제 가능 여부, 소요시간, 비밀보장, 착수금, 불법아닌것, 해외사이트 등)
```

#### Section 8: Legal & Contact
```
H2: 법적 안내 및 위임장
위임장 다운로드 (PDF/HWP)
H2: 문의하기
Email: dio@diora.co.kr
실시간 채팅 버튼
```

### 5. Legal Compliance

#### Delegation Form Requirements
```
MUST INCLUDE:
- 위임자 정보 (성명, 생년월일, 주소, 연락처)
- 수임자 정보 (DIORA 사업자 정보)
- 위임 내용 (개인정보 삭제 및 처리정지 청구 대행)
- 위임 기간
- 동의 사항 (개인정보보호법 제38조 근거)
- 첨부: 신분증 사본

WARNING:
- 100% 삭제 보장 표현 금지
- 착수금 환불 불가 명시
- 법적 면책 조항 포함
```

### 6. Bilingual Implementation

#### Language Toggle
```html
<!-- Floating Language Button (Top Right) -->
<div class="floating-lang">
  <button data-lang="ko" class="lang-btn active">KR</button>
  <button data-lang="en" class="lang-btn">EN</button>
</div>
```

#### URL Structure
```
Korean: care.diora.co.kr/
English: care.diora.co.kr/en/
```

### 7. Responsive Design

#### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

#### Critical Mobile Optimizations
```
- Hero: Stack vertically, reduce font size
- Cards: Single column on mobile
- Pricing Table: Horizontal scroll with touch
- FAQ: Collapsible accordion
- CTA Buttons: Full width on mobile
```

### 8. Performance Optimization

```
- Lazy load images
- Minify CSS/JS
- Inline critical CSS
- Defer non-critical JS
- Optimize images (WebP format)
- Use CDN for assets
```

## Step-by-Step Implementation

### Step 1: Backup
```bash
# Always backup before major changes
cd /path/to/diora.co.kr
git add .
git commit -m "Backup before adding CARE service"
```

### Step 2: Create Structure
```bash
mkdir -p care/en
mkdir -p care/assets/{css,js,images,documents}
```

### Step 3: Build index.html (Korean)
```
1. Start with <!DOCTYPE html> and proper meta tags
2. Include Schema.org JSON-LD
3. Build 8 sections in order
4. Add floating buttons (language toggle + chat)
5. Add footer with privacy policy link
6. Validate HTML (W3C validator)
```

### Step 4: Build en/index.html (English)
```
1. Translate ALL content from Korean
2. Keep same structure and design
3. Update meta tags for English
4. Update canonical URL
```

### Step 5: CSS Implementation
```
1. Use CSS variables for colors
2. Mobile-first approach
3. Ensure white-gold premium tone
4. Test on multiple devices
```

### Step 6: JavaScript
```
1. Language toggle function
2. Smooth scroll
3. FAQ accordion
4. Form validation (if any)
5. Analytics tracking (optional)
```

### Step 7: Documents
```
1. Create delegation_form.pdf (use template provided)
2. Create delegation_form.hwp (Korean standard)
3. Test download links
```

### Step 8: SEO Files
```
1. sitemap.xml (include both KR and EN URLs)
2. robots.txt (allow all)
3. Verify canonical URLs
```

### Step 9: Main Header Update
```
File: diora.co.kr/index.html
Action: Add link to care.diora.co.kr in navigation
Example:
<nav>
  <a href="/">홈</a>
  <a href="/about">소개</a>
  <a href="https://care.diora.co.kr">디지털 프라이버시 관리</a>
  <a href="/contact">문의</a>
</nav>
```

### Step 10: DNS Configuration Guide
```
Provide instructions for:
1. Adding CNAME record (care → github.io)
2. Enabling HTTPS
3. Verifying SSL certificate
```

## Testing Checklist

### Functional Tests
- [ ] All links work
- [ ] Language toggle works
- [ ] Mobile responsive
- [ ] Forms submit correctly
- [ ] Downloads work
- [ ] Chat widget works

### SEO Tests
- [ ] Meta tags correct
- [ ] Schema markup validates
- [ ] Sitemap accessible
- [ ] Robots.txt correct
- [ ] Page speed > 90

### Cross-browser Tests
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari
- [ ] Mobile Chrome

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader compatible
- [ ] Alt text on images
- [ ] ARIA labels
- [ ] Color contrast ratio > 4.5:1

## Critical Warnings

### DO NOT
❌ Use exact quotes from search results (copyright violation)
❌ Promise 100% deletion guarantee
❌ Make medical or legal claims
❌ Store sensitive user data without encryption
❌ Use auto-playing media
❌ Break existing diora.co.kr functionality

### DO
✅ Use white-gold premium design tone
✅ Emphasize confidentiality and expertise
✅ Include proper legal disclaimers
✅ Optimize for Korean search engines (Naver, Google KR)
✅ Make bilingual (Korean primary, English secondary)
✅ Test on mobile devices
✅ Back up before deployment

## Deployment

### GitHub Pages Setup
```
1. Commit /care folder to main branch
2. Push to GitHub
3. Settings → Pages → Configure custom domain
4. Enter: care.diora.co.kr
5. Wait for DNS propagation (up to 24 hours)
6. Enable "Enforce HTTPS"
```

### Post-Deployment
```
1. Submit to Google Search Console
2. Submit to Naver Webmaster Tools
3. Test all functionality
4. Monitor for 404 errors
5. Set up analytics (optional)
```

## Content Guidelines

### Tone of Voice
- **Professional but approachable** (like a law firm, not a tech startup)
- **Empathetic** (users are often victims)
- **Confident** (expertise and technology)
- **Discreet** (emphasize confidentiality)

### Writing Style
- Short paragraphs (2-3 sentences max)
- Bullet points for scannability
- Clear headings (H2, H3)
- No jargon unless necessary
- Direct language, no fluff

### Forbidden Phrases
❌ "100% 보장" (100% guarantee)
❌ "완벽한 삭제" (perfect deletion)
❌ "무조건 성공" (always successful)
❌ "빠른 시일 내" (vague timeframe)

### Recommended Phrases
✅ "최선을 다합니다" (we do our best)
✅ "법적 근거에 기반한" (based on legal grounds)
✅ "비밀 보장" (confidentiality guaranteed)
✅ "전문성과 기술력" (expertise and technology)

## Success Metrics

After deployment, track:
- [ ] Organic search traffic
- [ ] Keyword rankings (top 10 keywords)
- [ ] Consultation inquiries
- [ ] Page load time < 3 seconds
- [ ] Mobile usability score > 95
- [ ] Bounce rate < 50%

## Reference Materials

All detailed specifications are in:
`/home/claude/DIORA_CARE_SERVICE_GUIDE.md`

This includes:
- Full Korean and English content
- Complete pricing structure
- Legal document templates
- SEO keyword lists
- Schema markup examples
- FAQ content

## Final Notes

This is a **sensitive service** dealing with:
- Victims of digital crimes
- Personal privacy
- Legal implications

Therefore:
1. **Prioritize user privacy** in every decision
2. **Be legally compliant** (Korean privacy laws)
3. **Maintain professional tone** (not marketing-heavy)
4. **Test thoroughly** before going live
5. **Document everything** for future updates

---

## Quick Start Command for Claude Code

```
Read /home/claude/DIORA_CARE_SERVICE_GUIDE.md for full specifications.
Then execute this skill to build care.diora.co.kr service page.

Repository: diora.co.kr (existing)
Target: /care folder (new)
Design: White-gold premium tone (match main site)
Languages: Korean (primary), English (secondary)
Focus: SEO optimization for digital crime victim keywords
Legal: Comply with Korean Personal Information Protection Act
```

---

END OF SKILL
