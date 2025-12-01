const showTextBtn = document.getElementById('showTextBtn');
        const hideContentBtn = document.getElementById('hideContentBtn');
        const text = document.getElementById('text');

        showTextBtn.addEventListener('click', () => {
            text.style.display = 'block';
        });

        hideContentBtn.addEventListener('click', () => {
            document.body.style.display = 'none';
        });