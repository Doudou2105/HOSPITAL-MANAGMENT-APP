package com.saraya.hospital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.saraya.hospital.model.Appointment;
import com.saraya.hospital.repository.AppointmentRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    
    private final AppointmentRepo appointmentRepo;


    public float findPercentages(){
        List<Appointment>  appointments = appointmentRepo.findAll();     
         long totalAppointments =appointments.stream().count();

         float result = (float) (totalAppointments*1)/100;
         return result;
     }
}