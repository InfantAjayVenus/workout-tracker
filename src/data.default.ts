import { TrackingValues, Workout } from "./models/Workout";

export const DEFAULT_PLANS = [
    new Workout('Push Ups', [TrackingValues.COUNT]),
    new Workout('Pull Ups', [TrackingValues.COUNT]),
    new Workout('Assisted Pull Ups', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Shoulder Press', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Shoulder Side Raise', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Reverse Delt Fly', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Machine Fly', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Bench Press', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Inclined Press', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Declined Press', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Lat Pull Down', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Lat Row', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Rope Push Down', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Skull Crusher', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Over Head Extension', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Bicep Curl', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Bicep Hammer Curl', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Shrugs', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Weighted Squats', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Leg Press', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Leg Extension', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Hammstring Curl', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Calf Raises', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Dead Lift', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Cable Cross Over', [TrackingValues.WEIGHT, TrackingValues.COUNT]),
    new Workout('Squat', [TrackingValues.COUNT]),
    new Workout('Walking', [TrackingValues.COUNT, TrackingValues.TIME]),
]