import "./SuccessMessageToast.css";
import successCheck from "/assets/images/icon-success-check.svg";

export default function SuccessMessageToast({onSuccess}) {
    return (<section role="alert" className="success-message__container" data-show={onSuccess}>
            <div className="success-message">
              <div className="success-message__title-container">
                <img src={successCheck} alt="" />
                <h2 className="success_message-title">Message Sent!</h2>
              </div>
             <p>Thanks for completing the form. We’ll be in touch soon!</p>
            </div>
          </section>);
}