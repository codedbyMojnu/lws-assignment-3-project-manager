export default function PlaceTree({ id, rootData, parentId, onComplete }) {
  const place = rootData[id];
  return (
    <>
      <li>{place?.title}</li>
      <button onClick={() => onComplete(id, parentId)}>Complete</button>
      <ol>
        {place?.childIds.length > 0 &&
          place?.childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              rootData={rootData}
              parentId={id}
              onComplete={onComplete}
            />
          ))}
      </ol>
    </>
  );
}
