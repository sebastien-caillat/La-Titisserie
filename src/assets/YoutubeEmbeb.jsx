import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const VideoResponsive = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
`

const VideoResponsiveIframe = styled.iframe`
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
`
  
export const YoutubeEmbed = ({ embedId }) => (
  <VideoResponsive>
    <VideoResponsiveIframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

