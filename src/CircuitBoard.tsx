import { ReactFlow, Background, MiniMap, Controls, Node, Edge } from "@xyflow/react";

export default function CircuitBoard() {
  const nodes: Node[] = [
    {
      id: "1",
      data: { label: "Hello" },
      position: { x: 0, y: 0 },
      type: "input",
    },
    {
      id: "2",
      data: { label: "World" },
      position: { x: 100, y: 100 },
      type: "output",
    },
  ];

  const edges: Edge[] = [{ id: "1-2", source: "1", target: "2", type: "smoothstep", label: "to the" }];

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow fitView nodes={nodes} edges={edges}>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
