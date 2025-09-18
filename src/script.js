document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.getElementById('typing-effect');
    const enterCommand = document.getElementById('enter-command');
    const text = "Foucault Félix";
    typingEffect.textContent = '';
    let isTyping = true;
    let i = 0;

    const hasPlayedTypingAnimation = localStorage.getItem('typingAnimationPlayed');


    function launch() {
        if (enterCommand) {
            enterCommand.textContent = "Enter command_";
            setTimeout(type, 400);
        }
    }

    function type() {
        if (!isTyping) return;
        if (i < text.length) {
            typingEffect.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                if (enterCommand) enterCommand.style.display = 'none';
                typingEffect.classList.add('remove-cursor');
                document.querySelector('.info').classList.add('show');
                localStorage.setItem('typingAnimationPlayed', 'true');
            }, 300);
        }
    }

    function stopTyping() {
        isTyping = false;
        typingEffect.textContent = "Foucault Félix";
        typingEffect.classList.add('remove-cursor');
        if (enterCommand) enterCommand.style.display = 'none';
        document.querySelector('.info').classList.add('show');
    }

    if (typingEffect) {
        typingEffect.addEventListener('click', stopTyping);
        launch();
    }

    if (hasPlayedTypingAnimation) {
        stopTyping();
    } else {
        type();
    }

    window.addEventListener('beforeunload', function() {
        localStorage.setItem('typingAnimationPlayed', 'false');
    });
});