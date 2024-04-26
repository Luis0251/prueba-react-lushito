import { useCatImage } from '../hooks/useCatImage'
import PropTypes from 'prop-types';

export const Otro = ({ fact }) => {
    const {imageUrl} = useCatImage({fact})
  return (
    <>
    
    {imageUrl && <img src={imageUrl} alt="imagen de gato" />}
    </>
  )
}

Otro.propTypes = {
    fact: PropTypes.string
}