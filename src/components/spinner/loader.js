import { DNA } from 'react-loader-spinner'


 const CustomSpinner =() =>{
    return ( 
    <DNA
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    />
    )
};

export default CustomSpinner;