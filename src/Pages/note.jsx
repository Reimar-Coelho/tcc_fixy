import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateNote() {

    const { id } = useParams();
    const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes/${id}`;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(baseUrl);
                if (!response.ok) {
                    throw new Error("Failed to fetch data.");
                }

                const data = await response.json();
                setTitle(data.title);
                setDescription(data.description);
                setIsLoading(false);
            }catch(error){
                setError("Error fetching data. Please try again later");
                setIsLoading(false);
            }
        }
        fetchData();
    },[]);

    const navigate = useNavigate();

    const updateNote = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch(baseUrl, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title, description
                }),
            })

            if(response.ok) {
                setSubmitted(true)
                setTimeout(() => {setSubmitted(false); navigate("/notes")}, 2000);
            }
            else {
                console.log("Failed to submit data.")
            }

        } catch(error){
            console.log(error); 
        }
    }

    const removeNote = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(baseUrl, {
                method: "DELETE"
            });

            if(response.ok) {
                navigate('/notes')
            }
        }catch(error){

        }
    }

  return (
    <div className="text-white">
        <div className="breadcrump-nav">
        <Link to="/notes" className='back-button'>👈back</Link>
        <button onClick={removeNote} className='delete'>❌ Remove</button>
        </div>  
        
        <form onSubmit={updateNote}>
            <div className="single-note">
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='title text-black'/>
                </div>
                <div>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' rows='4' cols='50' className='description text-black'></textarea>
                </div>
            </div>
            <input type="submit" value={submitted ? "Saving note..." : "💾 Add note"} disabled={submitted}/>
            <p className='text-center'>
                {submitted && <div className='succes-message'>Note has been added!</div>}
            </p>
        </form>
    </div>
  )
}
