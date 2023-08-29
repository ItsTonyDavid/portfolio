import './ProjectImage.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectImage = ({image, link = false}) => {
    return (
        <div className='is-img-project'>
          <Image
            src={image}
            alt="Project"
            className={ link ? "is-image is-link": "is-image"}
          />
          {
            link &&
            <Link href="/projects" className="centered">
                <p className="subtitle is-project">
                  See projects
                  <br/>
                  <FontAwesomeIcon icon={faArrowRight} size="sm"/>
                </p>
            </Link>
          }
        </div>
    );
}



export default ProjectImage;
