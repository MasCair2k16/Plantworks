import Style from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StepBox(props) {

    return (
        <div className={Style.stepBox}>
            <h1>{props.stepTitle}</h1>
            <span>{props.stepDesc}</span>
        </div>
    )

}
