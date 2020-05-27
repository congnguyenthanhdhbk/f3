package com.healthsoft.repositories;

import com.healthsoft.entities.Patient;

import java.util.List;

public interface PatientCustomRepository {
    List<Patient> findPatients(final String firstName,
                               final String lastName,
                               final String gender,
                               final String genderId,
                               final String dob, String sort);
}
