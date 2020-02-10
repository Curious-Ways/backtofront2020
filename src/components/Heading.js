import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  const { Tag, text, className } = props;

  return (
    <Tag className={className}>
      {text}
    </Tag>
  );
}

Heading.propTypes = {
  Tag: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Heading;
