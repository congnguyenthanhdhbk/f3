package com.healthsoft.repositories.impl;

import com.healthsoft.entities.Patient;
import com.healthsoft.repositories.PatientCustomRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.MongoRegexCreator;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Repository
public class PatientCustomRepositoryImpl implements PatientCustomRepository {
    private MongoTemplate mongoTemplate;

    public PatientCustomRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Patient> findPatients(String firstName,
                                      String lastName,
                                      String gender,
                                      String patientId,
                                      String dob, String sort) {
        String[] sortCodition = sort.split(",");
        final Query query = new Query();
        final List<Criteria> criteria = new ArrayList<>();

        criteria.add(Criteria.where("isDeleted").is(false));

        if (StringUtils.isNoneEmpty(firstName)) {
            criteria.add(Criteria.where("firstName").regex(Objects.requireNonNull(MongoRegexCreator.INSTANCE.toRegularExpression(
                    firstName, MongoRegexCreator.MatchMode.CONTAINING
            )), "i"));
        }

        if (StringUtils.isNoneEmpty(lastName)) {
            criteria.add(Criteria.where("lastName").regex(Objects.requireNonNull(MongoRegexCreator.INSTANCE.toRegularExpression(
                    lastName, MongoRegexCreator.MatchMode.CONTAINING
            )), "i"));
        }

        if (StringUtils.isNoneEmpty(gender)) {
            criteria.add(Criteria.where("gender").is(gender));
        }

        if (StringUtils.isNoneEmpty(patientId)) {
            criteria.add(Criteria.where("id").is(patientId));
        }

        if (StringUtils.isNoneEmpty(dob)) {
            criteria.add(Criteria.where("dob").is(dob));
        }

        if (!criteria.isEmpty()) {
            query.addCriteria(new Criteria().orOperator(criteria.toArray(new Criteria[criteria.size()])));
        }

        query.with(Sort.by(Sort.Direction.ASC, sortCodition));

        return mongoTemplate.find(query, Patient.class);
    }
}
