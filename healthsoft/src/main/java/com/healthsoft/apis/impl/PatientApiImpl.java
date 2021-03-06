package com.healthsoft.apis.impl;

import com.healthsoft.apis.PatientApi;
import com.healthsoft.apis.response.PatientResponse;
import com.healthsoft.dtos.PatientDto;
import com.healthsoft.services.PatientService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(value = "http://localhost:3000")
public class PatientApiImpl implements PatientApi {

    private PatientService patientService;

    public PatientApiImpl(PatientService patientService) {
        this.patientService = patientService;
    }

    @Override
    public PatientResponse addPatient(PatientDto patient) {
        return patientService.addPatient(patient);
    }

    @Override
    public PatientResponse getPatient(String patientId) {
        return patientService.getPatient(patientId);
    }

    @Override
    public PatientResponse getPatients(String firstName, String lastName, String gender, String patientId, String dob, String sort) {
        return patientService.findPatients(firstName, lastName, gender, patientId, dob, sort);
    }

    @Override
    public PatientResponse updatePatient(String patientId, String newPatientId) {
        return patientService.updatePatient(patientId, newPatientId);
    }

    @Override
    public PatientResponse deletePatient(String patientId) {
        return patientService.deletePatient(patientId);
    }
}
