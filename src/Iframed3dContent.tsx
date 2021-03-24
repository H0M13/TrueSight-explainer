import React from "react";
import styled from "styled-components"

export const Iframed3dContent = () => {
  return (
    <IframeWrapper>
      <StyledIframe
        title="link-sentry"
        frameBorder="0"
        srcDoc={`
          <html>
              <head>
                  <style>
                    html { height: 1300px; }
                      body { width: 100%; 
                           height: 100%;
                           margin: 0;
                           background: rgba(25,25,25, 1) }
                                canvas { width: 100%; height: 100%; outline: none; }
                                #container { width: 100%; height: 100%; }
                    </style>
              </head>
            <body>
            <div id='container'>
              <canvas id='canvas3d'></canvas>
            </div>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'></script>
            <script src='https://cdn.spline.design/lib/anime.min.js'></script>
            <script src='./spline.runtime.min.js'></script>
            <script src='./main.js'></script>
          </body>
        </html>
  `}
      />
    </IframeWrapper>
  );
};

const IframeWrapper = styled.div`
    width: 100%;
    height: 1300px;
    position: fixed; 
    overflow: hidden; 
    outline: none;
    top: 0;
    z-index: 1;
`

const StyledIframe = styled.iframe`
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: none;
`