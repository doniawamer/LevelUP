import { useContext } from "react";
import { Box } from "@mui/material";

import { styles } from "../../styles";
import { CardsContext } from "../../Context";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import Navbar from "../../components/Navbar";
import BottomNav from "../../components/BottomNav";

export default function Home() {
  const { cards } = useContext(CardsContext);

  return (
    <Box
      sx={{
        background: "rgba(198, 181, 208, 0.5)",
      }}
    >
      <Box
        sx={{
          ...styles.skeleton,
          paddingTop: "116px",
          background: "#C6B5D0",
        }}
      >
        <Navbar fullNav={true} />

        <Button
          onClick={() => {}}
          variant="secondary"
          sx={{ marginBottom: "37px", color: "#88679F" }}
        >
          + Add Friends
        </Button>
        {cards.map(
          (card, index) =>
            index === 0 && (
              <Card
                key={`card-${index}`}
                card={card}
                position={index}
                sx={{ marginBottom: "11px" }}
              />
            )
        )}
        <BottomNav />
      </Box>
    </Box>
  );
}
