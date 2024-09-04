document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const youtubeLink = document.getElementById('https://youtube.com/@similimodo409?si=tO8njrgArHPIOedV');
    const resumeLink = document.getElementById('resume-link');
    const projectsLink = document.getElementById('https://youtube.com/@similimodo409?si=tO8njrgArHPIOedV');

    youtubeLink.addEventListener('click', (e) => {
        e.preventDefault();
        contentArea.innerHTML = `
            <h2>My YouTube Videos</h2>
            <ul>
                <li><a href="#" target="_blank">Video 1: Cloud Engineering Basics</a></li>
                <li><a href="#" target="_blank">Video 2: AWS vs GCP Comparison</a></li>
                <li><a href="#" target="_blank">Video 3: Python for DevOps</a></li>
            </ul>
        `;
    });

    resumeLink.addEventListener('click', (e) => {
        e.preventDefault();
        contentArea.innerHTML = `
            <h2>My Resume</h2>
            <p>Download my full resume <a href="your-resume.pdf" target="_blank">here</a>.</p>
            <h3>Skills</h3>
            <ul>
                <li>Cloud Engineering (AWS, GCP)</li>
                <li>Python Programming</li>
                <li>DevOps Practices</li>
                <li>Content Creation</li>
            </ul>
        `;
    });

    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        contentArea.innerHTML = `
            <h2>My Projects</h2>
            <ul>
                <li>Serverless Web Application on AWS</li>
                <li>Automated CI/CD Pipeline with Jenkins</li>
                <li>Kubernetes Cluster on GCP</li>
                <li>Python-based Log Analysis Tool</li>
            </ul>
        `;
    });
});
