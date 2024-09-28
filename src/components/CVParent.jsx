import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './styles/cv.css'

function CVParent ({contact, jobs, educations}){

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <>
        <aside ref={componentRef}>
            <section>
                <h1>
                    {contact.firstName}
                    {contact.lastName}
                </h1>
                <p>Email: {contact.email}</p>
                <p>Tel: {contact.phoneNum}</p>       
            </section>
            <section>
                <h2>Work Experience</h2>
                <ul>
                    {jobs.map((job) => (
                        <li key={job.id}>
                            <h3>{job.title} at {job.company}</h3>
                            <p>{job.description}</p>
                            <p>{job.start} to {job.end}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Education</h2>
                <ul>
                {educations.map((education) => (
                        <li key={education.id}>
                            <h3>{education.title} at {education.university}</h3>
                            <p>{education.start} to {education.end}</p>
                        </li>
                    ))}
                </ul>
            </section>

        <button onClick={handlePrint} style={{ width: '7%' }}>
        Print CV
        </button>
        
        </aside>
        </>
    )
}

export default CVParent