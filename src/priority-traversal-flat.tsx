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
    if (oldId === newId) {
      return;
    }

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
      // Focused element will be in "home" group
      // if trying to select parent on upwards navigation
      // Focused element will be in "parents" group otherwise
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;

      if (focusedElementId.startsWith("parents")) {
        // Same as selecting parent
        focusedElement.click();
        event.preventDefault();
      } else if (
        focusedElementId.startsWith("info-") ||
        focusedElementId === "home"
      ) {
        const parentSection = document.getElementById(`parents-group`);
        if (parentSection) {
          parentSection.focus();
        }
      } else if (focusedElementId.startsWith("children")) {
        const currentNode = document.getElementById(`info-${currentNodeId()}`);
        if (currentNode) {
          currentNode.focus();
        }
      }
      event.preventDefault();
    } else if (event.key === "ArrowDown" && event.shiftKey) {
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;

      if (focusedElementId.startsWith("parents")) {
        const currentNode = document.getElementById(`info-${currentNodeId()}`);
        if (currentNode) {
          currentNode.focus();
        }
      } else {
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
        const elmInGroup = Array.from(
          document.querySelectorAll(`#home li`)
        ) as HTMLElement[];
        const currentIndex = elmInGroup.indexOf(focusedElement);

        let newIndex = currentIndex;

        if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex > 0
        ) {
          newIndex = currentIndex - 1;
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex < elmInGroup.length - 1
        ) {
          newIndex = currentIndex + 1;
        }

        const newNodeId = elmInGroup[newIndex]?.id.split("info-")[1];
        if (newNodeId) {
          setCurrentNodeId(newNodeId);

          setHistory((prev) => {
            const newHistory = [...prev];
            newHistory.pop();
            newHistory.push(newNodeId);
            return newHistory;
          });
        }
        elmInGroup[newIndex]?.focus();
        event.preventDefault();
      } else if (focusedElementId.startsWith("parents")) {
        const elmInGroup = Array.from(
          document.querySelectorAll(`#parents-group li`)
        ) as HTMLElement[];
        const currentIndex = elmInGroup.indexOf(focusedElement);
        if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex > 0
        ) {
          elmInGroup[currentIndex - 1].focus();
          event.preventDefault();
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex < elmInGroup.length - 1
        ) {
          elmInGroup[currentIndex + 1].focus();
          event.preventDefault();
        } else {
          event.preventDefault();
        }
      }
    } else if (event.key === "Enter") {
      const focusedElement = document.activeElement as HTMLElement;

      if (focusedElement) {
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
      <ul id="home" tabindex="0">
        <For
          each={sortAdjacents()}
          fallback={<li style={{ color: "grey" }}>None</li>}
        >
          {(adjacent, idx) => (
            <li
              aria-label={`Node ${idx() + 1} of ${sortAdjacents().length}; ${
                adjacent.displayName
              }; ${adjacent.descriptionTokens?.longDescription}`}
              id={`info-${adjacent.id}`}
              onClick={() => props.onNodeClick(props.node.id, adjacent.id)}
              tabindex="0"
            >
              <span aria-hidden="true">{`${adjacent.displayName}; ${adjacent.descriptionTokens?.longDescription}`}</span>
            </li>
          )}
        </For>
      </ul>

      <ul
        id="parents-group"
        aria-label={
          props.node.parents.length == 0
            ? `${props.node.displayName} belongs to 0 groups`
            : `${props.node.displayName} belongs to (${collectParentNames()})`
        }
        tabindex="0"
      >
        <span style={{ "font-weight": "bold" }}>Belongs to</span>
        <For each={sortedParents()}>
          {(parent, idx) => (
            <li
              id={`parents-${props.node.id}-${idx()}`}
              aria-label={`${parent.displayName} group`}
              onClick={() => props.onNodeClick(props.node.id, parent.id)}
              tabIndex="0"
            >
              <span aria-hidden="true">{parent.displayName} group</span>
            </li>
          )}
        </For>
      </ul>

      <ul
        id="children-group"
        aria-label={
          props.node.children.length === 0
            ? `${props.node.displayName} contains no nodes`
            : `${props.node.displayName} contains (${collectChildrenNames()})`
        }
        tabindex="0"
      >
        <span style={{ "font-weight": "bold" }} aria-hidden={true}>
          Contains
        </span>
        <For each={sortedChildren()}>
          {(child, idx) => (
            <li
              id={`children-${props.node.id}-${idx()}`}
              aria-label={child.displayName}
              onClick={() => props.onNodeClick(props.node.id, child.id)}
            >
              <span aria-hidden="true">{child.displayName}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
