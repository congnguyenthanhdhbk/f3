package com.healthsoft.dtos;

public class PatientDto {
    private String firstName;
    private String lastName;
    private String dob;
    private String middleName;
    private String gender;

    public PatientDto(String firstName, String lastName, String dob, String middleName, String gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.middleName = middleName;
        this.gender = gender;
    }

    public PatientDto() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
