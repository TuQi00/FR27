import { useContext, useState } from 'react';
import { contextApp } from '../../App';
import './Subcriber.css';
// import postAddEmailUser from '../../axios/postAddEmailUser';
import { ToastContainer, toast } from 'react-toastify';
import postAddEmailUser from '../../axios/postAddEmailUser';

const Subscriber = () => {
    const dataContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [email, setEmail] = useState('');

    const handleOnChangeInputEmailUser = (event) => {
        setEmail(event.target.value);
    };

    const handleOnClickPostAddEmailUser = async (event) => {
        event.preventDefault();
        const deleteSpaceEmail = email.trim();
        const trimmedEmail = deleteSpaceEmail.slice(-10);
        if (trimmedEmail === '@gmail.com') {
            try {
                const dataBlogPost = await postAddEmailUser(email);
                if (dataBlogPost.errorCode === 0) {
                    toast.success(dataBlogPost.message);
                    setEmail('');
                } else {
                    toast.error(dataBlogPost.message);
                }
            } catch (error) {
                console.error('Error while adding email:', error);
                toast.error('An error occurred while processing your request.');
            }
        } else {
            toast.error('Your email is not in the correct format!');
        }
    };

    return (
        <>
            <div className='subscriber'>
                <ToastContainer />
                <h3 className='subscriber_titleOne'>Newlatters</h3>
                <h3 className={`subscriber_titleTwo ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>Stories and interviews</h3>
                <p className={`subscriber_text ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
                <form className='subscriber_form'>
                    <input type="text" placeholder='Enter your email' className='subscriber_form_inputEmail' value={email} onChange={handleOnChangeInputEmailUser} />
                    <button type='submit' className='subscriber_form_btn' onClick={handleOnClickPostAddEmailUser}>Subscriber</button>
                    <p className={`subscriber_form_text ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>We care about your data in our <a href="">privacy policy</a></p>
                </form>
            </div>
        </>
    );
};

export default Subscriber;
