import Btn from './styles/buttons.module.css'
import inputFields from './styles/inputFields.module.css'

function JobInput ({jobs, setJobs}){

    function handleChange (e,jobId){
        const name = e.target.name;
        const value = e.target.value;

        const updatedJobs = jobs.map((job) => {
            if (job.id === jobId) {
              return { ...job, [name]: value };
            }
            return job;
          });
      
          setJobs(updatedJobs);
    }

    function removeField(jobId){
        setJobs(jobs.filter(job => job.id !== jobId))
    }
    
    return(
        <>
        {jobs.map((job) =>(
            <div key={job.id} className={inputFields.inputFields}>
                <label>
                    Job Title:
                <input 
                    type="text"
                    name="title"
                    value={job.title}
                    onChange={e => handleChange(e, job.id)}
                />
                </label>
                <label>
                    Company:
                <input
                    type="text"
                    name="company"
                    value={job.company}
                    onChange={e => handleChange(e, job.id)}
                />
                </label>
                <label>
                    Description:
                <textarea
                    style={{
                    height: '7rem',
                    resize: 'none',
                    width: '100%'}}
                    type="text"
                    name="description"
                    value={job.description}
                    onChange={e => handleChange(e, job.id)}
                />
                </label>
                <label>
                    Start Date:
                <input
                    type="date"
                    name="start"
                    value={job.start}
                    onChange={e => handleChange(e, job.id)}
                />
                </label>
                <label>
                    End Date:
                <input
                    type="date"
                    name="end"
                    value={job.end}
                    onChange={e => handleChange(e, job.id)}
                />
                </label>
                <button
                    className={Btn.BtnStyle}
                    type="button"
                    onClick={() => removeField(job.id)}
                >Remove Field</button>
            </div>
        ))}
        </>
    )
}

export default JobInput