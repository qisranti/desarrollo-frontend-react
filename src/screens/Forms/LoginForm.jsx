import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";

const LoginForm = () => {
    const [values, handleChange] = useForm({username: '', email: ''});
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }

    return (
        <div className="App-header">
            <h4>Login Form</h4>
            <h5>username: {form.formData.username}</h5>
            <h5>email: {form.formData.email}</h5>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;