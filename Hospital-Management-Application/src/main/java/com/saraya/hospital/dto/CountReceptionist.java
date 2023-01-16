package com.saraya.hospital.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CountReceptionist <T> {

    int countReceptionist;
    T type;
    
}