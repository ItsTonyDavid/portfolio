import './ProjectImage.css'
import Link from 'next/link'
import Image from 'next/image'

const ProjectImage = ({image}) => {
    return (
        <div className='is-img-project'>
          <Image
            src={image}
            alt="Project"
            className="is-image"
          />
        </div>
    );
}



export default ProjectImage;
