import { SET_FORM_DATA } from "./formTypes";

export const saveFormData = (formData) => ({
    type: SET_FORM_DATA,
    payload: formData
});