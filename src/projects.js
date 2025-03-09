document.addEventListener('DOMContentLoaded', function() {
    const typingEffectProjects = document.getElementById('typing-effect-projects');
    const textProjects = "~/Projects";
    const projectsContent = document.getElementById('projects-content');
    typingEffectProjects.textContent = '';
    const enterCommand = document.getElementById('enter-command');

    function showProjectsContent() {
        enterCommand.style.display = 'none';
        projectsContent.style.display = 'block';
        projectsContent.classList.add('show');
    }

    enterCommand.textContent = "Enter command_";
    setTimeout(() => {
        typeEffect(typingEffectProjects, textProjects, showProjectsContent);
    }, 1000);
   
});