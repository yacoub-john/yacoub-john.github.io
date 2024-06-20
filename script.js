// script.js

document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById('app');

    // Header
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>John Yacoub</h1>
        <p>Software Engineering Student</p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;
    app.appendChild(header);

    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.innerHTML = `
        <h2>About Me</h2>
        <p>Software Engineering student at York University with a passion for developing innovative programs. Proficient in various programming languages and tools, with hands-on experience in software development through multiple internships.</p>
    `;
    app.appendChild(aboutSection);

    // Skills Section
    const skillsSection = document.createElement('section');
    skillsSection.id = 'skills';
    skillsSection.innerHTML = `
        <h2>Skills</h2>
        <h3>Languages</h3>
        <ul>
            <li>Java</li>
            <li>C/Assembly</li>
            <li>C++</li>
            <li>Arduino</li>
            <li>Bash Scripting</li>
            <li>MATLAB/Simulink</li>
            <li>ROS</li>
            <li>Python</li>
        </ul>
        <h3>Methods</h3>
        <ul>
            <li>Object Oriented Design</li>
            <li>UNIT Testing</li>
            <li>Git Version Control</li>
            <li>System Design and Modeling</li>
            <li>UML Diagrams</li>
            <li>Agile Development</li>
            <li>SCRUM</li>
            <li>OSI Model</li>
        </ul>
        <h3>Software Tools</h3>
        <ul>
            <li>Gradle</li>
            <li>CMake</li>
            <li>OpenCV</li>
            <li>CUDA</li>
            <li>Microsoft Azure (ML)</li>
            <li>Google Test</li>
            <li>MySQL</li>
            <li>Icarus Verilog</li>
            <li>Quartus</li>
            <li>Maven</li>
        </ul>
        <h3>Hardware Tools</h3>
        <ul>
            <li>Microcontrollers</li>
            <li>Serial Protocols (SPI, I2C, UART)</li>
            <li>Sensor Interfacing (TOF, IMU, Temp)</li>
            <li>PID Controllers</li>
            <li>Digital Multimeters</li>
            <li>Oscilloscopes</li>
            <li>Waveform Generators</li>
        </ul>
    `;
    app.appendChild(skillsSection);

    // Education Section
    const educationSection = document.createElement('section');
    educationSection.id = 'education';
    educationSection.innerHTML = `
        <h2>Education</h2>
        <p><strong>York University</strong> - Bachelor of Engineering: Software Engineering<br>
        Sept. 2020 to May 2025<br>
        Cumulative GPA: 8.7/9</p>
    `;
    app.appendChild(educationSection);

    // Experience Section
    const experienceSection = document.createElement('section');
    experienceSection.id = 'experience';
    experienceSection.innerHTML = `
        <h2>Experience</h2>
        <div>
            <h3>Research Development Software Engineer</h3>
            <p><strong>Phoenix Geophysics</strong> · Internship · May 2023 to Aug. 2023</p>
            <ul>
                <li>Utilized C++ and Qt to create and integrate new features, addressing software bugs and ensuring a robust, high-quality final product.</li>
                <li>Played a key role in identifying and resolving software issues, demonstrating analytical skills and problem-solving capabilities through efficient debugging and troubleshooting.</li>
                <li>Contributed to the optimization of the software development lifecycle by implementing version control practices and adhering to coding standards.</li>
                <li>Documented technical aspects of the software for knowledge sharing and future reference, enhancing the accessibility of the developed features.</li>
                <li>Enhanced proficiency in agile methodologies and iterative development practices by engaging in regular sprint planning, code reviews, and feature demos.</li>
            </ul>
        </div>
        <div>
            <h3>5G Software Developer</h3>
            <p><strong>Dell Technologies</strong> · Internship · Jan. 2023 to May 2023</p>
            <ul>
                <li>Implemented, documented, and tested Layer 2 and Layer 3 network features and algorithms, integrating them with the DU core of the 5G radio system.</li>
                <li>Designed and developed 5G network enhancements using C++, Python, and Linux, enriching functionality and performance.</li>
                <li>Collaborated with software engineering peers to optimize and test 5G software, ensuring high performance and reliability.</li>
                <li>Developed a comprehensive understanding of 5G network architecture, protocols, and standardization, applying insights to practical solutions.</li>
                <li>Engaged in cross-functional initiatives, interfacing with network architects and protocol designers to enrich problem-solving and development processes.</li>
            </ul>
        </div>
        <div>
            <h3>Software Developer</h3>
            <p><strong>Phoenix Geophysics</strong> · Internship · Aug. 2022 to Jan. 2023</p>
            <ul>
                <li>Developed and maintained an intuitive graphical user interface geophysics application using C++ and Qt, overseeing functionalities including calibration, data acquisition, processing, analysis, and interpretation.</li>
                <li>Enhanced software quality and reliability by introducing novel features and promptly addressing bugs, ensuring a seamless user experience.</li>
                <li>Collaborated closely with geophysicists and cross-disciplinary colleagues, effectively capturing requirements and refining workflows to enhance software functionality.</li>
                <li>Fostered collaboration across diverse teams, facilitating the integration of software solutions with hardware systems to optimize field data collection processes.</li>
                <li>Displayed adept problem-solving and analytical skills in the proficient identification and resolution of software-related challenges.</li>
            </ul>
        </div>
        <div>
            <h3>Undergraduate Research Assistant (Autonomous vehicles)</h3>
            <p><strong>SDCN Lab - Lassonde School of Engineering</strong> · Aug. 2021 to Jan. 2022</p>
            <ul>
                <li>Programmed and tested an algorithm using C++ to determine the attitude and position of an autonomous vehicle using a low-cost IMU.</li>
                <li>Utilized IMU algorithms to estimate the attitude and position of the vehicle in real-time, augmenting system accuracy and reliability.</li>
                <li>Leveraged PID control algorithms and Kalman filters to achieve precise control and estimation, thereby enhancing the performance of the vehicle's navigation system.</li>
                <li>Collaborated closely with senior researchers to develop and implement effective strategies for real-time vehicle tracking and control.</li>
                <li>Documented research findings and algorithmic approaches, contributing to academic publications and presentations.</li>
            </ul>
        </div>
    `;
    app.appendChild(experienceSection);

    // Projects Section
    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects';
    projectsSection.innerHTML = `
        <h2>Projects</h2>
        <div>
            <h3>TAB2MUSIC Sheet Music and Music Playback UI</h3>
            <p>Java-based application that converts music tablature into MusicXML, Music Scores, and Music Playback. Supports Guitar, Drum, and Bass tablature with real-time updates to the sheet music notes (size, note spacing, line spacing).</p>
        </div>
        <div>
            <h3>Integrating Sensors with SPI/I2C/UART Protocols</h3>
            <p>Implemented software to interface with various sensors using SPI/I2C/UART protocols, collecting and processing data for analysis and visualization. Enhanced data accuracy and system efficiency through optimized communication algorithms.</p>
        </div>
        <div>
            <h3>PID Controller Design for Autonomous Vehicles</h3>
            <p>Developed a PID controller for an autonomous vehicle to maintain stability and control during navigation. Implemented the controller using C++ and validated performance through real-world testing and simulations.</p>
        </div>
    `;
    app.appendChild(projectsSection);

    // Contact Section
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <p>Email: <a href="mailto:john12yacoub@gmail.com">john12yacoub@gmail.com</a></p>
        <p>Phone: +1647-710-9749</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/john-yacoub-a01ba31b4/">John Yacoub</a></p>
        <p>GitHub: <a href="https://www.github.com/yacoub-john">yacoub-john</a></p>
    `;
    app.appendChild(contactSection);

    // Footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2024 John Yacoub</p>
    `;
    app.appendChild(footer);
});
