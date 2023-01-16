package com.saraya.hospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.saraya.hospital.model.Patient;
import com.saraya.hospital.repository.PatientRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientRepo patientRepo;

    public Patient getPatientByEmail(String email){ 
        return patientRepo.findByEmail(email);
    }

    public Patient getPatientByEmailAndPassword(String email, String password){
        return patientRepo.findByEmailAndPassword(email, password);
    }

    public long findAllPatients(){
        List<Patient>  patients = patientRepo.findAll();
     
         long totalPatients =patients.stream().count();
         return totalPatients;

     }
     
    
}