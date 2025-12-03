import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Karan Bothra - Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030712", // gray-950
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.1)", // blue-500
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(168, 85, 247, 0.1)", // purple-500
            filter: "blur(100px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            zIndex: 10,
          }}
        >
          {/* Developer Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #a855f7)",
              marginBottom: "20px",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "64px", height: "64px" }}
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #fff, #94a3b8)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
            }}
          >
            Karan Bothra
          </h1>

          <p
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              margin: 0,
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Software Engineer • Next.js • React • Full Stack
          </p>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
