import { Box, Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { updateEmployeeState } from "../api/authService";
import { Employee } from "../types/Employee";

const boxStyles = {
  border: "1px solid #EBEDF0",
  cursor: "pointer",
  align: "center",
  height: "100%",
  flex: "0 25%",
  borderTop: "1px solid #d68a3a",
  borderBottom: "1px solid #d68a3a",
  _hover: {
    bg: "#1D5AD4",
    color: "white",
  },
} as const;

const textStyles = {
  color: "inherit",
  flex: 1,
  pl: 4,
  textAlign: "center",
} as const;

const arrowStyles = {
  border: "solid #d68a3a",
  display: "inline-block",
  p: "9px",
  borderWidth: "0 1px 1px 0",
  transform:
    "translateY(15.5px) rotate(-45deg) skew(-15deg, -15deg) translateX(18px)",
  backgroundColor: "#FFF",
};

const STATES = {
  ADDED: "ADDED",
  IN_CHECK: "IN-CHECK",
  APPROVED: "APPROVED",
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

export default function EmployeeState({ id, state }: Employee) {
  const [activeState, setActiveState] = useState<string>(state);
  const [hoveredState, setHoveredState] = useState<string>(state);

  useEffect(() => {
    activeState === undefined && setActiveState(state);
  }, [activeState, state]);

  const handleStateSelect = (stateName: string) => {
    updateEmployeeState(id, stateName)
      .then(() => setActiveState(stateName))
      .catch((err) => console.error('Error while updading employee state',err));
  };

  return (
    <Flex height="34px" borderLeft="1px solid #d68a3a">
      {Object.keys(STATES).map((key) => (
        <Flex
          {...boxStyles}
          key={key}
          bg={activeState === key ? "#1D5AD4" : ""}
          color={activeState === key ? "white" : ""}
          onClick={() => handleStateSelect(key)}
          onMouseEnter={() => setHoveredState(key)}
          onMouseLeave={() => setHoveredState("")}
        >
          <Text {...textStyles}>{key}</Text>
          <Box
            {...arrowStyles}
            bg={
              hoveredState === key || activeState === key ? "#1D5AD4" : "#fff"
            }
          ></Box>
        </Flex>
      ))}
    </Flex>
  );
}
