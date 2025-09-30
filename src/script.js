document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.getElementById('typing-effect');
    const enterCommand = document.getElementById('enter-command');
    const text = "Foucault Félix";
    typingEffect.textContent = '';
    let isTyping = true;
    let i = 0;

    function launch() {
        if (enterCommand) {
            enterCommand.textContent = "Enter command_";
            setTimeout(type, 800);
        }
    }

    function type() {
        if (!isTyping) return;
        if (i < text.length) {
            typingEffect.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => {
                if (enterCommand) enterCommand.style.display = 'none';
                typingEffect.classList.add('remove-cursor');
                document.querySelector('.info').classList.add('show');
            }, 800);
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
        document.addEventListener('click', stopTyping);
        
        document.addEventListener('keydown', stopTyping);
        
        launch();
    }
});