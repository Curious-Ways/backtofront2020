import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Heading = props => {
  
  const { Tag, text, className } = props;
  
  const HeadingType = styled(Tag)`
    font-family: AribauGrotesk-Bd, sans-serif;
    font-size: 22px;
    margin-top: 0;
  `
  
  return (
    <HeadingType className={className}>
      {text}
    </HeadingType>
  );
}

Heading.propTypes = {
  Tag: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Heading;
