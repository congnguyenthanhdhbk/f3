package com.healthsoft.apis;

import com.healthsoft.apis.response.PatientResponse;
import com.healthsoft.dtos.PatientDto;
import org.springframework.web.bind.annotation.*;

public interface PatientApi {
    @PostMapping(value = "/patient")
    PatientResponse addPatient(@RequestBody PatientDto patient);
    @GetMapping(value = "/patient/{id}")
    PatientResponse getPatient(@PathVariable("id") String patientId);
    @GetMapping(value = "/patients")
    PatientResponse getPatients(@RequestParam(value = "firstName", required = false) String firstName,
                                @RequestParam(value = "lastName", required = false) String lastName,
                                @RequestParam(value = "gender", required = false) String gender,
                                @RequestParam(value = "patientId", required = false) String patientId,
                                @RequestParam(value = "dob", required = false) String dob,
                                @RequestParam(value = "sort", required = true) String sort);
    @PutMapping(value = "/patient/{id}")
    PatientResponse updatePatient(@PathVariable("id") String patientId, @RequestBody String newParentId);
    @DeleteMapping(value = "/patient/{id}")
    PatientResponse deletePatient(@PathVariable("id") String patientId);
}
