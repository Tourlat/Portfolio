document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.getElementById('typing-effect');
    const text = typingEffect.textContent;
    const enterCommand = document.getElementById('enter-command');
    typingEffect.textContent = '';

    let isTyping = true;
    let i = 0;

    function launch() {
        enterCommand.textContent = "Enter command_";
        setTimeout(type, 1000); 

    }

    function type() {
        if(!isTyping) return;
        if (i < text.length) {
            typingEffect.textContent += text.charAt(i);
            i++;
            setTimeout(type, 200);
        }else {
            setTimeout(() => {
                enterCommand.style.display = 'none'
                document.querySelector('#typing-effect').classList.add('remove-cursor');
                document.querySelector('.info').classList.add('show');
            }, 500);
        } 
    }

    function stopTyping() {
        isTyping = false;
        typingEffect.textContent = "Foucault Félix";
        typingEffect.classList.add('remove-cursor');
        document.querySelector('.info').classList.add('show');
    }
    
    typingEffect.addEventListener('click', stopTyping);

    launch();



});