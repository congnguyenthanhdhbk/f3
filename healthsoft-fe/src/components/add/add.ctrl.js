import {decorate, observable} from "mobx";
import axios from "axios";
import api from "../../shared/api";
import { ToastContainer, toast } from 'react-toastify';

class AddCtrl {
    selectedGenderOptions = [];
    selectedGenderValue = null;
    bod = new Date();
    inputFirstName = null;
    inputLastName = null;
    inputMiddleName = null;

    handleChangeFirstName = (inputFirstName) => {
        this.inputFirstName = inputFirstName.target.value;
    };

    handleChangeLastName = (inputLastName) => {
        this.inputLastName = inputLastName.target.value;
    };

    handleChangeMiddleName = (inputMiddleName) => {
        this.inputMiddleName = inputMiddleName.target.value;
    }

    initValue = () => {
        this.selectedGenderOptions = [
            {
                value: "M",
                label: "Male"
            },
            {
                value: "F",
                label: "Female"
            },
            {
                value: "O",
                label: "Others"
            }
        ]
    }

    handleGenderChange = (selectedGenderValue) => {
        this.selectedGenderValue = selectedGenderValue
    }

    handleChangeBod = (bod) => {
        this.bod = bod;
    }

    handleSelectBod = (bod) => {
        this.bod = bod;
    }

    addPatient = async (e) => {
        e.preventDefault();
        const patientRequest = {
            firstName: this.inputFirstName,
            lastName: this.inputLastName,
            middleName: this.inputMiddleName,
            dob: this.bod,
            gender: this.selectedGenderValue.value
        };

        const createdPatient = await axios.post(api.addPatient, patientRequest);
        toast.success("Patient has been created");
    }


}

decorate(AddCtrl, {
    selectedGenderOptions: observable,
    selectedGenderValue: observable,
    bod: observable,
    inputFirstName: observable,
    inputLastName: observable,
    inputMiddleName: observable

});

export default new AddCtrl();
