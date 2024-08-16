import Logo from "./components/Logo";
import Description from "./components/Description";
import OpenLink from "../components/OpenLink";
import LessonInfo from "../components/LessonInfo";
import Contador from "./components/Contador";

const Default = () => {
    return (
        <>
            <Contador />
            <Logo />
            <Description />
            <OpenLink 
                title="Learn React" 
                url="https://react.dev/" 
            />
            <OpenLink 
                title="Mi proyecto react (Github)" 
                url="https://github.com/qisranti/desarrollo-frontend-react" 
            />
            <LessonInfo 
                number="1" 
                title="Introducción a react y estructura de proyecto" 
            />
            <LessonInfo 
                number="2" 
                title="Context API para la gestión del estado global en aplicaciones react" 
            />
        </>
    );
};

export default Default;