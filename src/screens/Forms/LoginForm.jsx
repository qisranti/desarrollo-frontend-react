import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo, { modalInfo } from "../../components/ModalInfo";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange] = useForm({username: '', email: '', password: ''});
    const form = useSelector(state => state.form);
    const [showModalInfo, setShowModalInfo] = useState(false);
    const hideModalInfo = () => {
        setShowModalInfo(false);
    }
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));        
        setShowModalInfo(true);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <ModalInfo 
                    visible={showModalInfo} 
                    message="Bienvenidos al Modulo 7" 
                    onClose={hideModalInfo}
                    />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>Login Form</h5>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </motion.div>        
    );
};

export default LoginForm;