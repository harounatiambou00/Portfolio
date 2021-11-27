import React, { useRef } from 'react'
import emailjs from "emailjs-com";


const ContactMe = () => {
    
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_6ickl1g', 'template_hldzpcz', form.current, 'user_qVbNcZxyoTP4neSN2UZtB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
    };

    return (
        <div id="ContactMe_Section" className="container-fluid bg-light">
            <div id="" className="col-12 Section_Title mt-0 mb-2 p-auto fs-2">
                Contact Me
            </div>
            <div className="row" id="content">
                <div className="col-12 col-lg-8">
                    <h3 className="mt-4 text-center">Send me a message</h3>
                    <form id="ContactMe_Form" ref={form} className="row" onSubmit={sendEmail}>
                        <div className="col-12 col-lg-6">
                            <label>First Name</label>
                            <input type="text" placeholder="" name="firstname" required/>
                        </div>

                        <div className="col-12 col-lg-6">
                            <label>Last name</label>
                            <input type="text" placeholder="" name="lastname" required/>
                        </div>

                        <div className="col-12 col-lg-6">
                            <label>E-mail</label>
                            <input type="text" placeholder="" name="email"  required/>
                        </div>

                        <div className="col-12 col-lg-6">
                            <label>Subject</label>
                            <input type="text" placeholder=""  name="subject"/>
                        </div>

                        <div className="col-12">
                            <label>Message</label>
                            <textarea rows="30" cols="50" required placeholder="Write your message here" name="message">
                                
                            </textarea>
                        </div>

                        <div className="col-12 text-end">
                            <input type="submit" value="Send" id="Submit_Button"/>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-4 mt-3 mt-lg-0 Contact">
                    <h4 className="mt-4 mb-5 text-light text-center">
                        Other ways
                    </h4>
                    <div className="text-light text-center mt-5 pt-5">
                        <span className="fs-5 my-2"><i class="fas fa-map-marker-alt text-warning"></i>     "Rue de l'environnement" <br />Monastir-Tunisia 5000<br /><br /></span>
                        <span className="fs-6 my-2"><i class="fas fa-envelope text-warning"></i>     harounatiambou.pro@gmail.com<br /><br /></span>
                        <span className="fs-5 my-2"><i class="fas fa-phone text-warning"></i>     +216 52 178 506<br /><br /></span>
                    </div>
                    <div id="Social_Medias_Icons" className="text-center mt-5 pt-2 pt-lg-5 text-light">
                        <div id="Linked_In">
                            <a href="https://www.linkedin.com/in/abdoul-wahabou-harouna-tiambou-475099210/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div id="Facebook">
                            <a href="https://www.facebook.com/abdoulwahab.harouna.98/">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                        <div id="Instagram">
                            <a href="https://www.instagram.com/tchambou_harouna_abdul_wahab/?hl=fr">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div id="Twitter">
                            <a href="https://twitter.com/AbdoulTiambou">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe