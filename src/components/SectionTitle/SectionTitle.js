import './SectionTitle.css'

const SectionTitle = ({
  text = ''
}) => <>{text && <h2 className='SectionTitle'>{text}</h2>}</>

export default SectionTitle;
