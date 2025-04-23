import { useState } from "react";
import { initialTravelPlan } from "./data/places";
import PlaceTree from "./PlaceTree";
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  function handleComplete(id, parentId) {
    const nextPlan = {
      ...plan[parentId],
      childIds: plan[parentId]?.childIds.filter((childId) => childId !== id),
    };
    setPlan({ ...plan, [parentId]: nextPlan });
  }
  return (
    <ol>
      {plan[0]?.childIds.map((childId) => (
        <PlaceTree
          key={childId}
          id={childId}
          rootData={plan}
          parentId={0}
          onComplete={handleComplete}
        />
      ))}
    </ol>
  );
}
