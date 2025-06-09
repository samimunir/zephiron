package com.fitness.airservice.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fitness.airservice.models.Recommendation;
import com.fitness.airservice.repositories.RecommendationRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RecommendationService {
    private final RecommendationRepository recommendationRepository;

    public List<Recommendation> getUserRecommendation(String userId) {
        return recommendationRepository.findByUserId(userId);
    }

    public Recommendation getActivityRecommendation(String activityId) {
        return recommendationRepository.findByActivityId(activityId)
            .orElseThrow(() -> new RuntimeException("No recommendation found this activity: " + activityId));
    }
}