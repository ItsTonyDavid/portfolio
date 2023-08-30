import './send.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Button from '../Inputs/button';

const Send = ({ buttonFunction, buttonText, children}) => {
    return (
         <div className="centered-sent">
          <FontAwesomeIcon icon={faPaperPlane} size="4x"/>
          <br/>
          {children}
          <Button text={buttonText} onClick={buttonFunction} />
        </div>
    );
}

export default Send;
