function createDust() {
    const container = document.getElementById('dust-particles');
    const dust = document.createElement('div');
    
    // สุ่มขนาดและตำแหน่ง
    const size = Math.random() * 4 + 1 + 'px';
    const startPos = Math.random() * 100 + 'vw';
    const duration = Math.random() * 5 + 5 + 's';
    const opacity = Math.random() * 0.5;

    dust.classList.add('dust');
    dust.style.width = size;
    dust.style.height = size;
    dust.style.left = startPos;
    dust.style.top = '-10px';
    dust.style.opacity = opacity;
    dust.style.animationDuration = duration;

    container.appendChild(dust);

    // ลบเมื่อจบ Animation
    setTimeout(() => {
        dust.remove();
    }, parseFloat(duration) * 1000);
}

// สร้างละอองเป็นระยะ
setInterval(createDust, 400);