# DIORA Research - Baby 프로젝트

baby.diora.co.kr 전용 연구자료 웹사이트

## 프로젝트 구조

```
BABY/
├── index.html          # 비밀번호 입력 페이지
├── research.html       # 연구자료 메인 페이지
├── styles.css          # DIORA 브랜드 스타일
├── script.js           # 인터랙션 및 차트
└── README.md           # 배포 가이드
```

## 주요 기능

### 1. 비밀번호 보호
- 비밀번호: `1909`
- 세션 스토리지 기반 인증
- 새로고침해도 재입력 불필요

### 2. DIORA 브랜드 디자인
- 배경: #fafaf8
- 카드: #ffffff
- 골드 악센트: #c9b896 / #8a7a5f
- 텍스트: #0a0a0a / #2a2a2a
- 보더: #e8dcc8
- 폰트: Noto Sans KR (400-600 weight)

### 3. 한글 가독성 최적화
- `word-break: keep-all`
- `line-height: 1.8` 이상
- 모바일: 16px, 데스크탑: 18px

### 4. 콘텐츠 시각화
- **가격대 비교 차트**: 저가형/중가형/프리미엄 3단계 구조
- **24개월 타임라인**: Phase 1~5 로드맵
- **매출 전망 그래프**: 판매량 및 매출 dual-axis 차트
- **Zebra stripe 테이블**: 가독성 향상
- **Phase별 색상 구분**: 각 단계별 시각적 구분

### 5. 반응형 레이아웃
- **데스크탑**: 고정 사이드바 목차 (왼쪽)
- **모바일**: 햄버거 메뉴 (상단)
- **태블릿**: 최적화된 중간 레이아웃
- **맨 위로 버튼**: 스크롤 300px 이상 시 표시

### 6. 네비게이션
- 자동 섹션 하이라이트
- 부드러운 스크롤
- DIORA 로고 클릭 → diora.co.kr 새창 열림

## Cloudflare Pages 배포 가이드

### 방법 1: GitHub 연동 (권장)

1. **GitHub 리포지토리 생성**
   ```bash
   cd G:/HDDCODE/BABY
   git init
   git add .
   git commit -m "Initial commit: DIORA Research baby site"
   git branch -M main
   git remote add origin https://github.com/liveq/baby.git
   git push -u origin main
   ```

2. **Cloudflare Pages 연결**
   - Cloudflare Dashboard → Workers & Pages
   - "Create application" 클릭
   - "Pages" 탭 선택
   - "Connect to Git" 클릭
   - GitHub에서 `liveq/baby` 리포지토리 선택

3. **빌드 설정**
   ```
   Framework preset: None
   Build command: (비워두기)
   Build output directory: /
   Root directory: /
   ```

4. **환경 변수**
   - 필요 없음 (순수 정적 사이트)

5. **배포**
   - "Save and Deploy" 클릭
   - 자동 빌드 및 배포 시작

### 방법 2: Direct Upload

1. **Cloudflare Dashboard 접속**
   - Workers & Pages → "Create application" → "Pages" → "Upload assets"

2. **파일 업로드**
   - 다음 파일들을 선택:
     - index.html
     - research.html
     - styles.css
     - script.js

3. **프로젝트 이름**
   - Project name: `baby`

4. **배포**
   - "Deploy site" 클릭

### 도메인 연결

1. **Cloudflare Dashboard**
   - Workers & Pages → baby 프로젝트 선택
   - "Custom domains" 탭

2. **도메인 추가**
   - "Set up a custom domain" 클릭
   - `baby.diora.co.kr` 입력
   - "Continue" 클릭

3. **DNS 자동 설정**
   - Cloudflare가 nameserver를 관리하므로 자동으로 CNAME 레코드 생성
   - 즉시 활성화됨

4. **SSL/TLS**
   - 자동으로 SSL 인증서 발급 (무료)
   - HTTPS 강제 활성화

## 로컬 테스트

### 방법 1: Python SimpleHTTPServer

```bash
cd G:/HDDCODE/BABY
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### 방법 2: Node.js http-server

```bash
cd G:/HDDCODE/BABY
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

## 업데이트 방법

### GitHub 연동된 경우

```bash
cd G:/HDDCODE/BABY
git add .
git commit -m "Update: 내용 수정"
git push
```

자동으로 Cloudflare Pages에 배포됨

### Direct Upload인 경우

1. Cloudflare Dashboard → baby 프로젝트
2. "Upload assets" 클릭
3. 수정된 파일 업로드
4. 새 배포 생성

## 비밀번호 변경

`index.html` 파일의 93번째 줄 수정:

```javascript
if (password === '1909') {  // 여기서 비밀번호 변경
```

## 연구자료 업데이트

`research.html` 파일 수정 후 배포

## 스타일 커스터마이징

`styles.css` 파일에서 DIORA 브랜드 컬러 변경:

```css
/* 메인 컬러 */
--color-primary: #8a7a5f;
--color-secondary: #c9b896;
--color-background: #fafaf8;
--color-card: #ffffff;
--color-border: #e8dcc8;
```

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript (ES6+)**: 모듈화, 이벤트 처리
- **Chart.js 4.4.0**: 데이터 시각화
- **Google Fonts**: Noto Sans KR

## 브라우저 지원

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 성능 최적화

- ✅ 웹폰트 preconnect
- ✅ 이미지 최적화 (현재 이미지 없음)
- ✅ CSS 압축
- ✅ JavaScript 압축
- ✅ Cloudflare CDN 자동 적용

## 보안

- ✅ 세션 기반 비밀번호 보호
- ✅ HTTPS 강제
- ✅ XSS 방지 (순수 정적 사이트)
- ✅ CORS 정책

## 라이선스

© 2024 DIORA. All rights reserved.

## 문의

baby.diora.co.kr 관련 문의: [이메일 주소]
