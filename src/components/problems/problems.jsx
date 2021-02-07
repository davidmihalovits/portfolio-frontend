import React from "react";
import "./problems.sass";
import checkmark from "../../assets/checkmark2.svg";
import cross from "../../assets/cross.svg";

const Articles = () => {
    return (
        <div className="problems-container">
            <div className="problems-content">
                <h1 className="problems-title">Problems I solved recently</h1>
                <div className="problems">
                    <div className="problem">
                        <h2 className="problem-title">Username issue</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    Username in Navbar didn't change after user
                                    updated it on their profile page.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    I implemented a global state using Redux so
                                    the username is now accessible across every
                                    component.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">Notification problem</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    User liked another user's post or started
                                    following them but the other user didn't get
                                    notified without refreshing the page
                                    manually.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    I set up Socket.IO between the client and
                                    server so now they are able to communicate
                                    real-time with each other by emitting events
                                    on user interaction.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">HTTPS issue</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    Chrome DevTools gave a serious security
                                    warning about HTTP traffic not being
                                    redirected to HTTPS.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    I had to write a few extra lines of code on
                                    the back end (index.js) to redirect all HTTP
                                    traffic to HTTPS after adding an SSL
                                    certificate.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">CORS problems</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    First CORS didn't allow me to request
                                    restricted resources from another domain
                                    (server) while testing CRUD functionalities
                                    in my social media app clone.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    On the back end (index.js) I installed and
                                    configured the CORS middleware to enable all
                                    requests for every route with a few lines of
                                    code.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">Nodemailer & Gmail</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    Nodemailer refused to send the email through
                                    the contact form to the corresponding
                                    address and gave an authentication error.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    Nodemailer needs access to the given Gmail
                                    account by enabling an authorization
                                    framework called OAuth2.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">Flexbox issues</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    Flexbox doesn't work the same way in
                                    different browsers. Some browsers render the
                                    images inside a flexbox incorrectly.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    I had to use different prefixes in my
                                    stylesheet to display the images correctly
                                    or get rid of the flexbox and use a grid
                                    container instead.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">Navbar button</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    I wanted to display a Contact button
                                    whenever the user was on the homepage and a
                                    Back button while visiting a subpage.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    I took advantage of React Router and used
                                    the useLocation hook inside a ternary
                                    operator to render it conditionally.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">MongoDB user model</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    I couldn't access the user object's
                                    properties by default and it wasn't a good
                                    idea to duplicate data in my database when
                                    saving a document in a different collection.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    With the help of Mongoose, I saved only the
                                    given user's id, referred to this document
                                    with SchemaType.prototype.ref() and
                                    populated the user model to access the
                                    properties of the referenced object.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="problem">
                        <h2 className="problem-title">Unique Socket.IO id</h2>
                        <div className="problem-box">
                            <img className="cross" src={cross} alt="cross" />
                            <div className="problem-span">
                                <span className="bold">Problem: </span>
                                <span className="normal">
                                    I had a problem assigning a unique socket id
                                    to each user along with their details after
                                    authentication.
                                </span>
                            </div>
                        </div>
                        <div className="problem-box">
                            <img
                                className="checkmark"
                                src={checkmark}
                                alt="checkmark"
                            />
                            <div className="problem-span">
                                <span className="bold">Solution: </span>
                                <span className="normal">
                                    I had to emit the user details from the
                                    client to the server and push each user with
                                    the associated socket id and user details to
                                    an object.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
