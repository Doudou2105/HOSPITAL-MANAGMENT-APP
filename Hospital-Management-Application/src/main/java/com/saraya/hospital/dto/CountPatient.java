package com.saraya.hospital.dto;

import java.util.List;

import com.saraya.hospital.model.Patient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CountPatient<T> {
      
      int countPatient ;
      T size;
}