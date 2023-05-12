import { useEffect, useState } from "react";
import PageDescription from "../../components/PageDescription";
import ProjectItem from "../../components/ProjectItem";
import { Button } from "@mui/material";
import AddNewProjectModal from "../../components/modals/AddNewProjectModal";

export default function AdminPage( {}) {
    const [isNewProjectModelVisible, setisNewProjectModelVisible] = useState(false)
    const [projects, setProjects] = useState([])


    useEffect(() => {
        fetchProjects()
    }, [])
    
    const handleOnSubmit = values => {
        setProjects(prev => [
          ...prev,
          { ...values, _id: projects.length + 1 }
        ])
      }
    
    
    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/projects')
            const responseJson = await response.json()
            setProjects(responseJson)

        }catch (error) {
            console.error(error)
        }

    }
    
    return ( <section>
        <PageDescription 
            title='Admin' 
            description='Here you will be able to update your projects'
        />
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
            <Button 
                variant='contained' 
                size='large' 
                onClick={ () => setisNewProjectModelVisible(true)}
            >
               Add new project
            </Button>
        </div>
        {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
      <AddNewProjectModal 
      open = { isNewProjectModelVisible }
      onClose= { () => setisNewProjectModelVisible(false)}
      onSubmit={ handleOnSubmit }
      />
    </section>
    )
}