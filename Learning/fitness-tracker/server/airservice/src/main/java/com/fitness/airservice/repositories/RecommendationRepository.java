package com.fitness.airservice.repositories;

import java.util.Optional;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fitness.airservice.models.Recommendation;

@Repository
public interface RecommendationRepository extends MongoRepository<Recommendation, String> {

    List<Recommendation> findByUserId(String userId);

    Optional<Recommendation> findByActivityId(String activityId);
}