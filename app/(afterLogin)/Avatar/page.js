"use client";

import React, { useState, useEffect } from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { fonts } from "../../fonts.js";
import Avatar from "./components/Avatar.js";
import Backdrop from "./components/Backdrop.js";
//import accessories
import Shades from "./components/Shades.js";
import PixelShades from "./components/Pixelshades.js";
import LoveShades from "./components/LoveHeartShades.js";
import Cap from "./components/Cap.js";
import Scarf from "./components/Scarf.js";
import Sunhat from "./components/Sunhat.js";
import Top_Hat from "./components/Top_hat.js";
// Avatar wearing accessories
import AvatarWearingShades from "./components/MiffyShades.js";
import AvatarWearingLoveShades from "./components/MiffyLoveHearts.js";
import AvatarWearingPixelShades from "./components/MiffyPixelShades.js";
import AvatarWearingCap from "./components/MiffyCap.js";
import AvatarWearingScarf from "./components/MiffyScarf.js";
import AvatarWearingTop_Hat from "./components/Miffy_Top_Hat.js";
import AvatarWearingSunhat from "./components/MiffySunhat.js";
//arrows for navigating through gallery//
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const CharacterPage = () => {
  const [characterImage, setCharacterImage] = useState("Miffy.png");
  const [selectedAccessoryIndex, setSelectedAccessoryIndex] = useState(0);
  const accessories = [
    "shades",
    "loveShades",
    "pixelShades",
    "cap",
    "scarf",
    "top_hat",
    "sunhat",
  ];

  const accessoryImages = {
    shades: "shades.png",
    loveShades: "loveheartshades.png",
    pixelShades: "pixel_shades.png",
    cap: "cap.png",
    scarf: "scarf_orange.png",
    top_hat: "top_hat.png",
    sunhat: "sunhat.png",
  };

  const wearingAccessoryIndex = {
    miffyWearingShades: "Miffy_shades.png",
    miffyWearingLoveShades: "Miffy_lovehearts.png",
    miffyWearingPixelShades: "Miffy_pixel_shades.png",
    miffyWearingCap: "Miffy_cap.png",
    miffyWearingSunhat: "Miffy_Sunhat.png",
    miffyWearingTop_hat: "Miffy_top_hat.png",
    miffyWearingScarf: "Miffy_orange_scarf.png",
  };

  const handleNextAccessory = () => {
    const nextIndex = (selectedAccessoryIndex + 1) % accessories.length;
    setSelectedAccessoryIndex(nextIndex);
  };

  const handlePrevAccessory = () => {
    const prevIndex =
      (selectedAccessoryIndex - 1 + accessories.length) % accessories.length;
    setSelectedAccessoryIndex(prevIndex);
  };

  const handleApplyAccessory = () => {
    const selectedAccessory = accessories[selectedAccessoryIndex];
    const imageWithAccessory =
      wearingAccessoryIndex[
        `miffyWearing${
          selectedAccessory.charAt(0).toUpperCase() + selectedAccessory.slice(1)
        }`
      ];
    setCharacterImage(imageWithAccessory || "Miffy.png");
  };

  const handleRemoveAccessory = () => {
    setCharacterImage("Miffy.png");
    setSelectedAccessoryIndex(0);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * accessories.length);
    setSelectedAccessoryIndex(randomIndex);
    handleApplyAccessory("Miffy_shades.png");
  }, []);

  return (
    <VStack
      as="main"
      spacing={10}
      bg="#FDFFB6"
      minHeight="100%"
      mb="10%"

      // maxHeight: "100vh",
    >
      <Heading
        m={5}
        mt={10}
        className={fonts.arvo.className}
        textAlign="center"
      >
        Rewards Room - Congratulations!
      </Heading>
      <h2
        style={{ textAlign: "center", margin: "5px", fontSize: "2rem" }}
        className={fonts.arvo.className}
        textAlign="center"
      >
        Choose an accessory for Miffy
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            position: "relative",
          }}
        >
          <FaArrowCircleLeft
            onClick={handlePrevAccessory}
            style={{
              background: "none",
              border: "none",
              fontSize: "4rem",
              cursor: "pointer",
              position: "absolute",
              left: "-2.5rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <div style={{ width: "2rem" }}></div>
          <div
            style={{
              border: "2px solid black",
              borderRadius: "7px",
              padding: "2.5rem",
              position: "relative",
              width: "fit-content",
            }}
          >
            <img
              src={`./${accessoryImages[accessories[selectedAccessoryIndex]]}`}
              alt="Accessory"
              style={{ width: "100px", height: "100px", margin: "5px" }}
            />
          </div>
          <FaArrowCircleRight
            onClick={handleNextAccessory}
            style={{
              background: "none",
              border: "none",
              fontSize: "4rem",
              cursor: "pointer",
              position: "absolute",
              right: "-4.3rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
        {selectedAccessoryIndex !== null && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "20px",
            }}
          >
            <Button
              width="80px"
              onClick={handleApplyAccessory}
              padding="0.6em 2em"
              borderRadius="10px"
              color="white"
              bg="#111"
              position="relative"
              zIndex="0"
              userSelect="none"
              webkitUserSelect="none"
              touchAction="manipulation"
              _before={{
                content: '""',
                background:
                  "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
                position: "absolute",
                top: "-2px",
                left: "-2px",
                backgroundSize: "400%",
                zIndex: "-1",
                filter: "blur(5px)",
                webkitFilter: "blur(5px)",
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                animation: "glowing-button-85 20s linear infinite",
                transition: "opacity 0.3s ease-in-out",
                borderRadius: "10px",
                "@keyframes glowing-button-85": {
                  "0%": {
                    backgroundPosition: "0 0",
                  },
                  "50%": {
                    backgroundPosition: "400% 0",
                  },
                  "100%": {
                    backgroundPosition: "0 0",
                  },
                },
              }}
              _after={{
                zIndex: "-1",
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#222",
                left: "0",
                top: "0",
                borderRadius: "10px",
              }}
              mt={3}
            >
              Apply
            </Button>
            <Button
              width="80px"
              onClick={handleRemoveAccessory}
              padding="0.6em 2em"
              borderRadius="10px"
              color="white"
              bg="#111"
              position="relative"
              zIndex="0"
              userSelect="none"
              webkitUserSelect="none"
              touchAction="manipulation"
              _before={{
                content: '""',
                background:
                  "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
                position: "absolute",
                top: "-2px",
                left: "-2px",
                backgroundSize: "400%",
                zIndex: "-1",
                filter: "blur(5px)",
                webkitFilter: "blur(5px)",
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                animation: "glowing-button-85 20s linear infinite",
                transition: "opacity 0.3s ease-in-out",
                borderRadius: "10px",
                "@keyframes glowing-button-85": {
                  "0%": {
                    backgroundPosition: "0 0",
                  },
                  "50%": {
                    backgroundPosition: "400% 0",
                  },
                  "100%": {
                    backgroundPosition: "0 0",
                  },
                },
              }}
              _after={{
                zIndex: "-1",
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#222",
                left: "0",
                top: "0",
                borderRadius: "10px",
              }}
              mt={3}
            >
              Remove
            </Button>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={`./${characterImage}`}
            alt="Avatar"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
    </VStack>
  );
};

export default CharacterPage;
