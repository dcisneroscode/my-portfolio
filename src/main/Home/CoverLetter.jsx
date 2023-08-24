function CoverLetter({ data }){

    return(
        <>
            <div className="about-me--cover-letter">
                <h3>{data.language == "spanish" ? "Carta de presentación.": "Cover letter."}</h3>
                {data.language == "spanish" ? 
                <>
                    <p>Soy un apasionado desarrollador Full Stack  con experiencia en tecnologías clave como JavaScript con React, Python con Django y FastAPI, así como habilidades en análisis de ciberseguridad y soporte técnico.<br /><br />
                    Durante mi tiempo como desarrollador Full Stack, he adquirido una sólida comprensión de los principios de desarrollo web moderno. Mi experiencia con JavaScript y el framework React me ha permitido crear aplicaciones web interactivas y visualmente atractivas que brindan experiencias excepcionales a los usuarios. Mi destreza en Python, junto con el uso de frameworks como Django y FastAPI, me ha permitido desarrollar soluciones backend eficientes y escalables. Estoy constantemente buscando oportunidades para mejorar mis habilidades y mantenerme al tanto de las últimas tendencias en desarrollo web.<br/><br />
                    Mi enfoque en ciberseguridad como analista junior ha enriquecido mi comprensión de las prácticas de desarrollo seguro. He participado en la identificación proactiva de posibles vulnerabilidades y en la implementación de medidas para proteger los datos confidenciales y la integridad del sistema. Esta experiencia ha ampliado mi perspectiva y ha reforzado mi compromiso con la creación de aplicaciones y sistemas confiables desde el punto de vista de la seguridad. <br /><br />
                    Además, mi experiencia previa como especialista en soporte técnico me ha brindado habilidades valiosas en la resolución de problemas y la comunicación efectiva con los usuarios finales. Estoy acostumbrado a trabajar en entornos dinámicos y colaborativos, y teniendo un historial probado de proporcionar asistencia técnica oportuna y eficiente para garantizar la satisfacción del cliente.<br /><br />
                    Creo firmemente en la importancia de la educación continua y la adaptabilidad en el campo de la tecnología. Estoy entusiasmado por la posibilidad de unirme a un equipo innovador y contribuir con mis habilidades técnicas, así como mi pasión por aprender y crecer en este emocionante campo.
                </p>
                </> : 
                <>
                    <p>
                    As a passionate Full Stack developer with experience in key technologies such as JavaScript with React, Python with Django and FastAPI, as well as skills in cybersecurity analysis and technical support.<br /><br />
                    During my time as a  Full Stack Developer, I have gained a solid understanding of modern web development principles. My experience with JavaScript and the React framework has allowed me to create interactive and visually engaging web applications that deliver exceptional user experiences. My proficiency in Python, along with the use of frameworks such as Django and FastAPI, has allowed me to develop efficient and scalable backend solutions. I am constantly looking for opportunities to improve my skills and keep abreast of the latest trends in web development.<br /><br />
                    My focus on cybersecurity as a junior analyst has enriched my understanding of secure development practices. I have been involved in proactively identifying potential vulnerabilities and implementing measures to protect sensitive data and system integrity. This experience has broadened my perspective and strengthened my commitment to building applications and systems that are trusted from a security standpoint.<br /><br />
                    In addition, my previous experience as a technical support specialist has provided me with valuable skills in problem solving and effective communication with end users. I am accustomed to working in dynamic and collaborative environments, and have a proven track record of providing timely and efficient technical support to ensure customer satisfaction.<br /><br />
                    I strongly believe in the importance of continuing education and adaptability in the technology field. I am excited about the possibility of joining an innovative team and contributing my technical skills, as well as my passion for learning and growing in this exciting field.
                    </p>
                </>}
                
            </div>
        </>
    )
};

export { CoverLetter };