package com.healthsoft.services.impl;

import com.healthsoft.apis.response.PatientResponse;
import com.healthsoft.dtos.PatientDto;
import com.healthsoft.entities.Patient;
import com.healthsoft.repositories.PatientRepository;
import com.healthsoft.services.PatientService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService {
    private PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public PatientResponse addPatient(PatientDto patient) {
        if (patient == null) {
            return new PatientResponse("400", "Patient must not be null or empty", null);
        }

        if (StringUtils.isEmpty(patient.getFirstName())) {
            return new PatientResponse("422", "First name must not be null or empty", null);
        }

        if (StringUtils.isEmpty(patient.getDob())) {
            return new PatientResponse("422", "Bod must not be null or empty", null);
        }

        if (StringUtils.isEmpty(patient.getLastName())) {
            return new PatientResponse("422", "Last name must not be null or empty", null);
        }

        if (StringUtils.isEmpty(patient.getGender())) {
            return new PatientResponse("422", "Gender must not be null or empty", null);
        }

        if ("F".equals(patient.getGender()) || "M".equals(patient.getGender()) || "O".equals(patient.getGender())) {
            Patient createdPatient = new Patient(
                    patient.getFirstName(),
                    patient.getLastName(),
                    patient.getMiddleName(),
                    patient.getDob(),
                    patient.getGender());
            return new PatientResponse("201", "Patient has been saved", patientRepository.save(createdPatient));
        }

        return new PatientResponse("422", "Gender must be F, M or O", null);
    }

    @Override
    public PatientResponse getPatient(String patientId) {
        if (StringUtils.isEmpty(patientId)) {
            return new PatientResponse("400", "Patient must not be null or empty", null);
        }

        Optional<Patient> patient = patientRepository.findById(patientId);
        if (!patient.isPresent()) {
            return new PatientResponse("404", "Patient doesn't exist", null);
        }

        return new PatientResponse("200", "Patient has been found", patient.get());
    }

    @Override
    public PatientResponse updatePatient(String patientId, String newPatientId) {
        if (StringUtils.isEmpty(patientId) || StringUtils.isEmpty(newPatientId)) {
            return new PatientResponse("400", "Patient Id or new Patient Id must not be null or empty", null);
        }

        if (patientId.equals(newPatientId)) {
            return new PatientResponse("400", "Patient Id must be difference new Patient Id", null);
        }

        Optional<Patient> patient = patientRepository.findById(patientId);
        if (!patient.isPresent()) {
            return new PatientResponse("404", "Parent Id doesn't exist", null);
        }

        boolean checkExist = patientRepository.existsById(newPatientId);
        if (checkExist) {
            return new PatientResponse("400", "New Patient does exist", null);
        }
        Patient updatedPatient = patient.get();
        updatedPatient.setId(newPatientId);

        Patient updated = patientRepository.save(updatedPatient);
        return new PatientResponse("200", "Patient has been updated", updated);
    }

    @Override
    public PatientResponse deletePatient(String patientId) {

        if (StringUtils.isEmpty(patientId)) {
            return new PatientResponse("400", "Patient must not be null or empty", null);
        }

        Optional<Patient> patient = patientRepository.findById(patientId);
        if (!patient.isPresent()) {
            return new PatientResponse("404", "Patient doesn't exist", null);
        }

        patientRepository.delete(patient.get());
        return new PatientResponse("204", "Patient has been deleted", null);
    }
}
