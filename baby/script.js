// ===========================
// 모달 열기/닫기
// ===========================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // 배경 스크롤 복원
    }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ===========================
// 인증 확인
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // 인증되지 않은 경우 로그인 페이지로 리다이렉트
    if (sessionStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'index.html';
        return;
    }

    // ===========================
    // 모바일 메뉴 토글
    // ===========================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });

        // 사이드바 외부 클릭 시 닫기
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }

    // ===========================
    // 네비게이션 활성화
    // ===========================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function setActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
    setActiveNav();

    // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // ===========================
    // 맨 위로 버튼
    // ===========================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===========================
    // 차트 생성
    // ===========================

    // 1. 가격대 비교 차트
    const priceChartCanvas = document.getElementById('priceChart');
    if (priceChartCanvas) {
        const priceCtx = priceChartCanvas.getContext('2d');
        new Chart(priceCtx, {
            type: 'bar',
            data: {
                labels: ['저가형', '중가형', '프리미엄'],
                datasets: [
                    {
                        label: '최소 가격',
                        data: [20000, 50000, 100000],
                        backgroundColor: 'rgba(138, 122, 95, 0.6)',
                        borderColor: '#8a7a5f',
                        borderWidth: 1
                    },
                    {
                        label: '최대 가격',
                        data: [50000, 100000, 260000],
                        backgroundColor: 'rgba(201, 184, 150, 0.6)',
                        borderColor: '#c9b896',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Noto Sans KR',
                                size: 14
                            },
                            color: '#2a2a2a',
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y.toLocaleString() + '원';
                                return label;
                            }
                        },
                        backgroundColor: 'rgba(42, 42, 42, 0.9)',
                        titleFont: {
                            family: 'Noto Sans KR',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Noto Sans KR',
                            size: 13
                        },
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return (value / 10000).toLocaleString() + '만원';
                            },
                            font: {
                                family: 'Noto Sans KR',
                                size: 12
                            },
                            color: '#6b7280'
                        },
                        grid: {
                            color: '#e8dcc8'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Noto Sans KR',
                                size: 13
                            },
                            color: '#2a2a2a'
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // 2. 타임라인 차트
    const timelineChartCanvas = document.getElementById('timelineChart');
    if (timelineChartCanvas) {
        const timelineCtx = timelineChartCanvas.getContext('2d');
        new Chart(timelineCtx, {
            type: 'line',
            data: {
                labels: ['착수 전', '1개월', '3개월', '6개월', '12개월', '18개월', '24개월'],
                datasets: [
                    {
                        label: 'Phase 1: 사전 준비',
                        data: [1, 1, null, null, null, null, null],
                        borderColor: '#9ca3af',
                        backgroundColor: 'rgba(156, 163, 175, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        tension: 0.4
                    },
                    {
                        label: 'Phase 2: 출시 및 테스트',
                        data: [null, 2, 2, null, null, null, null],
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        tension: 0.4
                    },
                    {
                        label: 'Phase 3: 성장',
                        data: [null, null, null, 3, null, null, null],
                        borderColor: '#8b5cf6',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        tension: 0.4
                    },
                    {
                        label: 'Phase 4: 규모 확장',
                        data: [null, null, null, null, 4, null, null],
                        borderColor: '#c9b896',
                        backgroundColor: 'rgba(201, 184, 150, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        tension: 0.4
                    },
                    {
                        label: 'Phase 5: B2B 탐색',
                        data: [null, null, null, null, null, 5, 5],
                        borderColor: '#8a7a5f',
                        backgroundColor: 'rgba(138, 122, 95, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Noto Sans KR',
                                size: 13
                            },
                            color: '#2a2a2a',
                            padding: 10,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(42, 42, 42, 0.9)',
                        titleFont: {
                            family: 'Noto Sans KR',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Noto Sans KR',
                            size: 13
                        },
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        display: false
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Noto Sans KR',
                                size: 13
                            },
                            color: '#2a2a2a'
                        },
                        grid: {
                            color: '#e8dcc8'
                        }
                    }
                }
            }
        });
    }

    // 3. 매출 전망 차트
    const revenueChartCanvas = document.getElementById('revenueChart');
    if (revenueChartCanvas) {
        const revenueCtx = revenueChartCanvas.getContext('2d');
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['3개월', '6개월', '12개월', '24개월'],
                datasets: [
                    {
                        label: '월 판매량 (개)',
                        data: [60, 155, 375, 900],
                        borderColor: '#8a7a5f',
                        backgroundColor: 'rgba(138, 122, 95, 0.1)',
                        borderWidth: 3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: '#8a7a5f',
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: '월 매출 (만원)',
                        data: [400, 1000, 2500, 6500],
                        borderColor: '#c9b896',
                        backgroundColor: 'rgba(201, 184, 150, 0.1)',
                        borderWidth: 3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: '#c9b896',
                        tension: 0.4,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Noto Sans KR',
                                size: 14
                            },
                            color: '#2a2a2a',
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(42, 42, 42, 0.9)',
                        titleFont: {
                            family: 'Noto Sans KR',
                            size: 14
                        },
                        bodyFont: {
                            family: 'Noto Sans KR',
                            size: 13
                        },
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.datasetIndex === 0) {
                                    label += context.parsed.y.toLocaleString() + '개';
                                } else {
                                    label += context.parsed.y.toLocaleString() + '만원';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: '판매량 (개)',
                            font: {
                                family: 'Noto Sans KR',
                                size: 13
                            },
                            color: '#8a7a5f'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString() + '개';
                            },
                            font: {
                                family: 'Noto Sans KR',
                                size: 12
                            },
                            color: '#6b7280'
                        },
                        grid: {
                            color: '#e8dcc8'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: '매출 (만원)',
                            font: {
                                family: 'Noto Sans KR',
                                size: 13
                            },
                            color: '#c9b896'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString() + '만원';
                            },
                            font: {
                                family: 'Noto Sans KR',
                                size: 12
                            },
                            color: '#6b7280'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Noto Sans KR',
                                size: 13
                            },
                            color: '#2a2a2a'
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
});
