function typeEffect(element, text, callback) {
    let i = 0;
    let isTyping = true;

    function type() {
        if (!isTyping) return;
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 200);
        } else {
            setTimeout(() => {
                element.classList.add('remove-cursor');
                if (callback) callback();
            }, 500);
        }
    }

    function stopTyping() {
        isTyping = false;
        element.textContent = text;
        element.classList.add('remove-cursor');
        if (callback) callback();
    }

    element.addEventListener('click', stopTyping);
    type();
}