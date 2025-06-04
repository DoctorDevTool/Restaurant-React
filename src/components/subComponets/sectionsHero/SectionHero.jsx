import './sectionHero.css'

const SectionHero = ({title, span}) => {
    return ( 
        <h2 className="sub-header">{title}<span>{span}</span></h2>
     );
}
 
export default SectionHero;