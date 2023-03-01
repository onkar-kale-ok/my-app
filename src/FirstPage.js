function FirstPage(props) {

    console.log('props',props);

    return(
        <h1>I'm from first page, my name is {props.data.name} , my country is {props.countryDetails}</h1>
    )
    
};

export default FirstPage;