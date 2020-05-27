package com.healthsoft.repositories.impl;

import com.healthsoft.entities.Patient;
import com.healthsoft.repositories.PatientCustomRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PatientCustomRepositoryImpl implements PatientCustomRepository {
    private MongoTemplate mongoTemplate;

    public PatientCustomRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Patient> findPatients(String firstName, String lastName, String gender, String genderId, String dob) {
        Query query = new Query();
        return null;
    }
}
