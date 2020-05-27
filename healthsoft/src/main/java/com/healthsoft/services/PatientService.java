package com.healthsoft.services;

import com.healthsoft.apis.response.PatientResponse;
import com.healthsoft.dtos.PatientDto;
import com.healthsoft.entities.Patient;

import java.util.Optional;

public interface PatientService {
    PatientResponse addPatient(PatientDto patient);
    PatientResponse getPatient(String patientId);
    PatientResponse updatePatient(String patientId, String newPatientId);
    PatientResponse deletePatient(String patientId);
    PatientResponse findPatients(final String firstName,
                         final String lastName,
                         final String gender,
                         final String patientId,
                         final String dob, String sort);
}
