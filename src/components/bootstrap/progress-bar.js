import ProgressBar from 'react-bootstrap/ProgressBar';

function CustomProgressBar(prop) {
  const {scale} = prop;
  return <ProgressBar now={scale}  />;
}

export default CustomProgressBar;