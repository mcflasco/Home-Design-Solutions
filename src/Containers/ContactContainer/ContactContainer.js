import React from 'react';
import FormType from '../../Components/Contact/FormType/FormType';
import { Link } from 'react-router-dom';


const initialState = {
        name: "",
        phone: "",
        email:"",
        zipCode: "",
        message: "",
        nameError: "",
        phoneError: "",
        emailError: "",
        zipCodeError: "",
        messageError: "",
}


 class ContactContainer extends React.Component{

    state = initialState;

    handleChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;
        
        this.setState({[name]: value}, () =>{
            console.log(value)
            
        })
        console.log(event.target.value)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    validate = () => {
        let {name, phone, email, zipCode, message} = this.state 
        const validEmailRegex = 
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        var validPhoneFormat = /^\d{10}$/;
        let nameError = "";
        let phoneError = "";
        let emailError = "";
        let zipCodeError = "";
        let messageError = "";

        // switch(type) {
        //     case 'name':
        //          nameError = "Name cannot be blank!"
        //          break;
        // }

        if(!name){
            nameError = "Name cannot be blank!"
        }
      
        if(!phone.match(validPhoneFormat)){
          
            phoneError = "Invalid Phone Number"
        }

        if(!validEmailRegex.test(email)){
            emailError = 'Invalid Email'
        }

        if(zipCode.length < 5){
            zipCodeError = 'Invalid Entry'
        }

        if(message.length < 30){
            messageError = "Message must be more than 30 characters"
        }

        

        if( nameError || phoneError || emailError ||  zipCodeError || messageError){
            this.setState({nameError, phoneError, emailError, zipCodeError, messageError})
            return false;
        }
        return true;
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state)
            this.setState(initialState)
        }
    }

    render(){
        return(
            <div className="contact" >
                <h1 className="contact-title">Contact Us</h1>
                <div className="info">
                    <p className="desc-title">Home Design Solutions</p>
                    <p className="contact-info">
                         101 Sedalia Dr.
                         Phoenix, AZ 85001
                         Phone: 602-KITCHEN
                         Fax: 602-555-1212</p>
                </div>
            
                       
            
                <form onSubmit={this.handleSubmit}>
                            
                    <FormType
                        type="text"
                        value={this.state.name} 
                        class="error" 
                        name="name" 
                        error={this.state.nameError} 
                        validation={this.handleChange}>Name: 
                    </FormType>
                        
                    {/* <div style={{ color:"red" }}>{this.state.nameError}</div> */}
                    <FormType 
                        type="text" 
                        value={this.state.phone}   
                        class="error" 
                        name="phone"
                        error={this.state.phoneError} 
                        validation={this.handleChange}>Phone Number: 
                    </FormType>

                    <FormType
                        type="text" 
                        value={this.state.email}
                        class="error" 
                        name="email"
                        error={this.state.emailError} 
                        validation={this.handleChange}>Email: </FormType>

                    <FormType
                        type="text" 
                        value={this.state.zipCode}
                        class="error" 
                        name="zipCode"
                        error={this.state.zipCodeError} 
                        validation={this.handleChange}>zip Code: </FormType>

                    {/* <FormType type="text" name="email">Zip Code: </FormType>  */}
            
                    <label className="label" for="lname">Message:</label> <br />
                    <textarea className="message input" name="message" /><br />
                    <p className="error">{this.state.messageError}</p>
                    
                   
                <button className="submit-button" type="submit">Submit</button>
               </form>
            
                
          
              
          
            
            </div>
        )
    }
 }
 export default ContactContainer;


