import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children, title }) {
  return (
    <div className={s.section}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
