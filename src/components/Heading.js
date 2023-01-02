import './styles.css';

const Heading = () => { 
    
    const date = new Date();
    const currentHour = date.getHours();
    let greeting;
    const customStyles = {
        color: ''
    }
    
    if(currentHour < 12){
        greeting = 'Good Morning'
        customStyles.color = 'red';
    } else if(currentHour < 18) {
        greeting = 'Good Afternoon'
        customStyles.color = 'blue';
    } else {
        greeting = 'Good Night'
        customStyles.color = 'green';
    }
    
    return(
        <h1 className="heading" style={customStyles}>{greeting}</h1>
    )
}

export default Heading;