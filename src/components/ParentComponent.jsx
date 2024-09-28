import { useState } from "react"
import InputForm from "./inputsForm.jsx"
import CVParent from "./CVParent.jsx"

export function ParentComponent() {
    const [contact, setContact] = useState({ 
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: ''
    });

    const [jobs, setJobs] = useState([{     // using state to store an array of the job object data
        id: crypto.randomUUID(),            // apart from contact is a single object
        title: "",
        company: "",
        description: "",
        start: "",
        end: ""
    }]);

    const [educations, setEducation] = useState ([{
        id: crypto.randomUUID(),
        title: "",
        university: "",
        start: "",
        end: ""
    }])

    return (
    <>
    <header>
        CV Builder
    </header>
    <main>
        <InputForm
            contact={contact}
            setContact={setContact}
            jobs={jobs}
            setJobs={setJobs}
            educations={educations}
            setEducation={setEducation}
        ></InputForm>
        <CVParent
            contact={contact}
            jobs={jobs}
            educations={educations}
        ></CVParent>
    </main>
    <footer>
        <a href="https://github.com/Thomas159753">Made By Thomas!</a>
    </footer>
    </>
    )
}

export default ParentComponent