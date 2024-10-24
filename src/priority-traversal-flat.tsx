import {
  For,
  createSignal,
  Show,
  createMemo,
  onMount,
  onCleanup,
} from "solid-js";
import {
  RelationNodeWithSiblings,
  TraversalOutputProps,
  HypergraphWithSibling,
  HypergraphNodeWithSiblingsProps,
} from "./priority-traversal-types";
import {
  addSiblingsToHypergraph,
  findNodesOnSameLevel,
} from "./priority-traversal-flat-utils";

/**
 * Component to output the traversal structure to the DOM
 * Contains both the visualization for the traversal structure (optional) and
 * also screen reader output for traversal structure
 */
export function TraversalOutputComponentKeyboardFlat(
  props: TraversalOutputProps
) {
  const [currentNodeId, setCurrentNodeId] = createSignal<string | null>(
    props.nodeGraph[0].id
  );

  const [hypergraphWithSiblings, setHypergraphWithSiblings] =
    createSignal<HypergraphWithSibling>(
      addSiblingsToHypergraph(props.nodeGraph)
    );

  // Keeps track of traversal history for undo
  const [history, setHistory] = createSignal<string[]>(["0"]);

  const currentNode = createMemo(() => {
    if (currentNodeId() !== null) {
      return hypergraphWithSiblings()[currentNodeId() as string];
    }
    return hypergraphWithSiblings()[0]; // Default to the first node if none is selected
  });

  const handleNodeClick = (oldId: string, newId: string) => {
    setHistory((prev) => [...prev, newId]);
    setCurrentNodeId(newId);

    // Moves screen reader focus
    setTimeout(() => {
      const newNode = document.getElementById(`info-${newId}`);

      if (newNode) {
        if (!newNode.hasAttribute("tabindex")) {
          newNode.setAttribute("tabindex", "0");
        }
        newNode.focus();
      }
    }, 0);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp" && event.shiftKey) {
      const parentSection = document.getElementById(`parents-group`);
      if (parentSection) {
        parentSection.focus();
      }
      event.preventDefault();
    } else if (event.key === "ArrowDown" && event.shiftKey) {
      // Directly navigate to first child if children exist
      // If not, then select entire group and announce that no children exist

      const firstChildId = currentNode().children[0];

      if (firstChildId) {
        setCurrentNodeId(firstChildId);
        setHistory((prev) => [...prev, firstChildId]);

        const newSection = document.getElementById(`info-${firstChildId}`);
        if (newSection) {
          newSection.focus();
        }
      } else {
        const childSection = document.getElementById(`children-group`);
        if (childSection) {
          childSection.focus();
        }
      }
      event.preventDefault();
    } else if (event.key === "h") {
      const titleSection = document.getElementById(`home`);

      const lastNodeId = history()[history().length - 1];
      const lastNodeButton = document.getElementById(`info-${lastNodeId}`);

      if (lastNodeButton) {
        lastNodeButton.focus();
      } else {
        titleSection?.focus();
      }
    } else if (event.key === "Backspace") {
      setHistory((prev) => {
        const newHistory = [...prev];

        if (newHistory.length <= 1) {
          return newHistory;
        }

        const currentNode = newHistory.pop();
        const previousNodeId = newHistory[newHistory.length - 1];

        if (previousNodeId) {
          // used to announce undo action
          const undoMessage = document.getElementById("hidden-focus");
          if (undoMessage) {
            undoMessage.focus();
          }

          setCurrentNodeId(previousNodeId);

          // reset focus to previous node after announcement
          setTimeout(() => {
            const newNode = document.getElementById(`info-${previousNodeId}`);
            if (newNode) {
              newNode.focus();
            }
          }, 700);
        }
        return newHistory;
      });
    } else if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;

      if (focusedElementId.startsWith("info-") || focusedElementId === "home") {
        const buttonsInGroup = Array.from(
          document.querySelectorAll(`#home button`)
        ) as HTMLElement[];

        const currentIndex = buttonsInGroup.indexOf(focusedElement);
        let newIndex = currentIndex;

        if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex > 0
        ) {
          newIndex = currentIndex - 1;
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex < buttonsInGroup.length - 1
        ) {
          newIndex = currentIndex + 1;
        }

        const newNodeId = buttonsInGroup[newIndex]?.id.split("info-")[1];
        if (newNodeId) {
          setCurrentNodeId(newNodeId);

          setHistory((prev) => {
            const newHistory = [...prev];
            newHistory.pop();
            newHistory.push(newNodeId);
            return newHistory;
          });
        }
        buttonsInGroup[newIndex]?.focus();
        event.preventDefault();
      } else if (focusedElementId.startsWith("parents")) {
        const buttonsInGroup = Array.from(
          document.querySelectorAll(`#parents-group button`)
        ) as HTMLElement[];
        const currentIndex = buttonsInGroup.indexOf(focusedElement);
        if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex > 0
        ) {
          buttonsInGroup[currentIndex - 1].focus();
          event.preventDefault();
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex < buttonsInGroup.length - 1
        ) {
          buttonsInGroup[currentIndex + 1].focus();
          event.preventDefault();
        } else {
          event.preventDefault();
        }
      }
    } else if (event.key === "Enter") {
      const focusedElement = document.activeElement as HTMLElement;

      if (focusedElement && focusedElement.tagName === "BUTTON") {
        focusedElement.click();
        event.preventDefault();
      }
    }
  };

  onMount(() => {
    window.addEventListener("keydown", handleKeyPress);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });

  return (
    <div>
      <button
        id="hidden-focus"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: "0",
          border: "0",
          clip: "rect(0, 0, 0, 0)",
          overflow: "hidden",
          "white-space": "nowrap",
        }}
        aria-hidden="true"
      >
        Pressing Undo
      </button>

      <Show when={currentNodeId()}>
        <HypergraphNodeComponentKeyboardOnly
          node={currentNode() as RelationNodeWithSiblings}
          nodeGraph={hypergraphWithSiblings()}
          onNodeClick={handleNodeClick}
        />
      </Show>
    </div>
  );
}

/**
 * Component to output a single node in the hypergraph
 * Screen reader output for single node in traversal structure
 */
export function HypergraphNodeComponentKeyboardOnly(
  props: HypergraphNodeWithSiblingsProps
) {
  const sortedParents = createMemo(() =>
    props.node.parents
      .map((parentId) => props.nodeGraph[parentId])
      .sort((a, b) => a.priority - b.priority)
  );

  const collectParentNames = createMemo(() => {
    return sortedParents()
      .map((parentNode) => parentNode.descriptionTokens?.label)
      .join(", ");
  });

  const sortedChildren = createMemo(() =>
    props.node.children
      .map((childId) => props.nodeGraph[childId])
      .sort((a, b) => a.priority - b.priority)
  );

  const collectChildrenNames = createMemo(() => {
    return sortedChildren()
      .map((childNode) => childNode.descriptionTokens?.label)
      .join(", ");
  });

  const sortAdjacents = createMemo(() => {
    const adjacentNodeIds = findNodesOnSameLevel(
      props.node.id,
      props.nodeGraph
    );

    const adjacentNodes = Array.from(adjacentNodeIds)
      .map((nodeId) => props.nodeGraph[nodeId])
      .sort((a, b) => {
        // First, sort by priority (high to low)
        const priorityDifference = a.priority - b.priority;
        if (priorityDifference !== 0) {
          return priorityDifference;
        }
        // If priorities are the same, sort by ID (lexicographical order)
        return Number(a.id) - Number(b.id);
      });
    return adjacentNodes;
  });

  return (
    <div style={{ padding: "20px" }}>
      <div id={`home`} tabindex="0">
        <For
          each={sortAdjacents()}
          fallback={
            <span
              style={{ color: "grey" }}
              aria-label={"There are no adjacent nodes"}
              id={`info-none`}
            >
              {" "}
              None
            </span>
          }
        >
          {(adjacent, idx) => (
            <button
              onClick={() => props.onNodeClick(props.node.id, adjacent.id)}
              style={{ "margin-right": "5px" }}
              aria-label={`Node ${idx() + 1} of ${sortAdjacents().length}; ${
                adjacent.displayName
              }; ${adjacent.descriptionTokens?.longDescription}`}
              id={`info-${adjacent.id}`}
            >
              <span aria-hidden={true}>{adjacent.displayName}</span>
            </button>
          )}
        </For>
      </div>
      <div
        id={`parents-group`}
        style={{ "margin-top": "10px" }}
        aria-label={`${
          props.node.parents.length
        } parent relations; ${collectParentNames()}`}
        tabindex="0"
      >
        <span style={{ "font-weight": "bold" }} aria-hidden={true}>
          Parents{" "}
        </span>
        <For
          each={sortedParents()}
          fallback={
            <span
              style={{ color: "grey" }}
              aria-label="There are no parent nodes"
              id={`parents-${props.node.id}-0`}
            >
              {" "}
              None
            </span>
          }
        >
          {(parent, idx) => (
            <button
              onClick={() => props.onNodeClick(props.node.id, parent.id)}
              style={{ "margin-right": "5px" }}
              aria-label={`Parent ${idx() + 1} of ${sortedParents().length}; ${
                parent.displayName
              }`}
              id={`parents-${props.node.id}-${idx()}`}
            >
              <span aria-hidden={true}>{parent.displayName}</span>
            </button>
          )}
        </For>
      </div>
      <div
        style={{ "margin-top": "10px" }}
        id={`children-group`}
        aria-label={`${
          props.node.children.length
        } child relations; ${collectChildrenNames()}`}
        tabindex="0"
      >
        <span style={{ "font-weight": "bold" }} aria-hidden={true}>
          Children{" "}
        </span>
        <For
          each={sortedChildren()}
          fallback={
            <span
              style={{ color: "grey" }}
              aria-label="There are no children nodes"
              id={`children-${props.node.id}-0`}
            >
              {" "}
              None
            </span>
          }
        >
          {(child, idx) => (
            <button
              onClick={() => props.onNodeClick(props.node.id, child.id)}
              style={{ "margin-right": "5px" }}
              aria-label={`Child ${idx() + 1} of ${sortedChildren().length}; ${
                child.displayName
              }`}
              id={`children-${props.node.id}-${idx()}`}
            >
              <span aria-hidden={true}>{child.displayName}</span>
            </button>
          )}
        </For>
      </div>
    </div>
  );
}
