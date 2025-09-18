document.addEventListener('DOMContentLoaded', function() {
    const typingEffectProjects = document.getElementById('typing-effect-projects');
    const textProjects = "~/Projects";
    typingEffectProjects.textContent = '';
    const enterCommand = document.getElementById('enter-command');

    function showProjectsContent() {
        enterCommand.style.display = 'none';
        document.querySelector('.info').classList.add('show');
    }

    enterCommand.textContent = "Enter command_";
    setTimeout(() => {
        typeEffect(typingEffectProjects, textProjects, showProjectsContent);
    }, 0);
   
});