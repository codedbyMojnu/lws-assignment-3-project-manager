import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [index, setIndex] = useState(null);

  return (
    <>
      <Panel
        title="রবিন্দ্রনাথ ঠাকুর কত সালে নোবেল পুরস্কার পান?"
        isActive={index === 0}
        onSmash={() => setIndex(0)}
      >
        উত্তর- ১৯১৩ সাল
      </Panel>
      <Panel
        title="কাজী নজরুল ইসলামের ডাকনাম কি"
        isActive={index === 1}
        onSmash={() => setIndex(1)}
      >
        উত্তর- দুখু মিয়া
      </Panel>
    </>
  );
}
