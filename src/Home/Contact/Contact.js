import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    
    return (

        <div style={{ backgroundColor: '#F6F6F6' }}>
         
            <div className="container py-5 ">
                <div className="row py-5">
                    <div className="col-md-4">
                        <h2 className="section-h2">GET IN TOUCH</h2>
                        <hr />
                        <p>There are many variations of pssges of Lorem Ipsum available, bu in some form, by</p>
                        <div className="d-flex">
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon className="contact-icon " size="2x" icon={faPhoneAlt} />
                            </div>
                            <div>
                                <h4 className="contact-h4">Phone</h4>
                                <span><a className="contact-a" href="tel:+88 669 658 6586">01706*****2</a></span>
                            </div>

                        </div>
                        <div className="d-flex">
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon className="contact-icon " size="2x" icon={faEnvelope} />
                            </div>
                            <div>
                                <h4 className="contact-h4">Email</h4>
                                <span><a className="contact-a" href="mailto:owahedhossain@gmail.com">owahedhossain@gmail.com</a></span>
                            </div>

                        </div>
                        <div className="d-flex">
                            <div className='d-flex align-items-center'>
                                <FontAwesomeIcon className="contact-icon " size="2x" icon={faMapMarkerAlt} />
                            </div>
                            <div>
                                <h4 className="contact-h4">Location</h4>
                                <span><a className="contact-a" href="tel:+88 669 658 6586">Dhaka,Bangladesh</a></span>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                   <div className="row">
                   <div className=" col-md-6">
                   <span class="wpcf7-form-control-wrap contact_name"><input type="text" name="contact_name" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required contact-input" id="contact_name" placeholder="Your Name"/></span>
                   </div>

                   <div className='col-md-6'>
                   <span class="wpcf7-form-control-wrap contact_email"><input type="email" name="contact_email"  size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email contact-input" id="contact_email" aria-required="true" aria-invalid="false" placeholder="Your Email"/></span>
                   </div>
                   </div>

                    <textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required mt-3 contact-input contact-area" id="contact_message" aria-required="true" aria-invalid="false" placeholder="Your Message" spellcheck="false"></textarea>
                    <button className="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Contact;