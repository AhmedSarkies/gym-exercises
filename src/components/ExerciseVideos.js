import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
        marginBottom: { lg: "10px", xs: "30px" },
      }}
      p="20px"
    >
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise video
      </Typography>
      <Stack
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { xl: "110px", xs: "20px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h6" color="#000">
                {item.video.title?.slice(0, 50)}...
              </Typography>
              <Typography variant="h7" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
