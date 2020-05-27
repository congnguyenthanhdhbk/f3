package com.healthsoft.repositories;

import com.healthsoft.entities.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String>, PatientCustomRepository {
}
