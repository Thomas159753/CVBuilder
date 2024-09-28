import inputFields from './styles/inputFields.module.css'
import Btn from './styles/buttons.module.css'

function EducationInput ({educations, setEducation}) {
    
    function handleChange(e, educID){
        const name = e.target.name;
        const value = e.target.value;

        const updateEducation = educations.map((education) => {
            if(education.id === educID) {
                return {...education, [name]: value}
            }
            return education
        });

        setEducation(updateEducation)
    }

    function removeField(educID){
        setEducation(educations.filter(education => education.id !== educID))
    }

    return (
        <>
        {educations.map((education) => (
            <div key={education.id} className={inputFields.inputFields}>
                <label>
                    Title:
                <input 
                    type="text"
                    name="title"
                    value={education.title}
                    onChange={e => handleChange(e, education.id)}
                />
                </label>
                <label>
                    University:
                <input
                    type="text"
                    name="university"
                    value={education.university}
                    onChange={e => handleChange(e, education.id)}
                />
                </label>
                <label>
                    Start:
                <input
                    type="date"
                    name="start"
                    value={education.start}
                    onChange={e => handleChange(e, education.id)}
                />
                </label>
                <label>
                    End:
                <input
                    type="date"
                    name="end"
                    value={education.end}
                    onChange={e => handleChange(e, education.id)}
                />
                </label>
                <button
                    type="button"
                    className={Btn.BtnStyle}
                    onClick={() => removeField(education.id)}
                    >Remove Field</button>
            </div>
        ))}
        </>
    )
}

export default EducationInput