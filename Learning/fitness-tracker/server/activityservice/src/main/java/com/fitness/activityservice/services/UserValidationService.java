package com.fitness.activityservice.services;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserValidationService {
    private final WebClient userServiceWebClient;

    public boolean validateUser(String userId) {
        log.info("Calling User Validation API for userID: " + userId);
        try {
            return userServiceWebClient.get()
            .uri("/api/auth/{userId}/validate", userId)
            .retrieve()
            .bodyToMono(Boolean.class)
            .block();
        } catch (WebClientResponseException e) {
            if (e.getStatusCode().equals(HttpStatus.SC_NOT_FOUND)) {
                throw new RuntimeException("User not found: " + userId);
            } else if (e.getStatusCode().equals(HttpStatus.SC_BAD_REQUEST)) {
                throw new RuntimeException("Invalid request: " + userId);
            }
        }
        return false;
    }
}